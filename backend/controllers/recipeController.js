const OpenAI = require('openai');

// Alternative: Ollama for local AI (free, no API key needed)
// const ollama = require('ollama'); // Uncomment if using Ollama

const extractJson = (text) => {
  // Handle undefined or non-string input
  if (!text || typeof text !== 'string') {
    return null;
  }
  
  const match = text.match(/\{([\s\S]*)\}/);
  if (!match) return null;

  try {
    return JSON.parse(match[0]);
  } catch (error) {
    return null;
  }
};

exports.generateRecipe = async (req, res, next) => {
  try {
    const { ingredients } = req.body;

    if (!ingredients || typeof ingredients !== 'string') {
      return res.status(400).json({ error: 'Ingredients must be a non-empty string.' });
    }

    // Choose AI provider based on environment variable
    const aiProvider = process.env.AI_PROVIDER || 'openai'; // 'openai', 'ollama', 'mock'

    let recipeData;

    if (aiProvider === 'ollama') {
      recipeData = await generateWithOllama(ingredients);
    } else if (aiProvider === 'mock') {
      recipeData = generateMockRecipe(ingredients);
    } else {
      // Default to OpenAI
      if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: 'OpenAI API key is not configured.' });
      }
      recipeData = await generateWithOpenAI(ingredients);
    }

    return res.json(recipeData);
  } catch (error) {
    console.error('Recipe generation error:', error);
    next(error);
  }
};

async function generateWithOpenAI(ingredients) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const prompt = `You are an expert recipe developer. Create a restaurant-quality recipe using the ingredients provided. Respond only in strict JSON format with keys: name, ingredients, steps, time, difficulty.\n\nIngredients: ${ingredients}`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    messages: [
      { role: 'system', content: 'You are a helpful recipe generation assistant.' },
      { role: 'user', content: prompt },
    ],
  });

  const rawResponse = completion.choices?.[0]?.message?.content || '';
  const parsed = extractJson(rawResponse);

  if (!parsed) {
    throw new Error('Unable to parse AI response.');
  }

  return {
    name: parsed.name || 'Custom Recipe',
    ingredients: Array.isArray(parsed.ingredients)
      ? parsed.ingredients.map(String)
      : typeof parsed.ingredients === 'string'
      ? parsed.ingredients.split(/,\s*/)
      : [],
    steps: Array.isArray(parsed.steps) ? parsed.steps.map(String) : [],
    time: parsed.time || '30 minutes',
    difficulty: parsed.difficulty || 'Medium',
  };
}

async function generateWithOllama(ingredients) {
  // Use Ollama REST API directly
  // Requires Ollama running on localhost:11434
  // Run: ollama pull tinyllama

  const systemPrompt = 'You are a professional recipe developer. Generate ONLY valid JSON with no additional text. Keys: name (string), ingredients (array of strings), steps (array of strings), time (string like "30 minutes"), difficulty (string: Easy/Medium/Hard)';
  const userPrompt = `Create a recipe using: ${ingredients}. Return ONLY the JSON object, nothing else.`;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'tinyllama',
        prompt: userPrompt,
        system: systemPrompt,
        stream: false,
      })
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.statusText}`);
    }

    const data = await response.json();
    const fullResponse = data.response || '';

    const parsed = extractJson(fullResponse);

    if (!parsed) {
      console.log('Ollama response (first 500 chars):', fullResponse.substring(0, 500));
      // Fallback to mock if Ollama doesn't generate valid JSON
      return generateMockRecipe(ingredients);
    }

    return {
      name: parsed.name || 'Custom Recipe',
      ingredients: Array.isArray(parsed.ingredients)
        ? parsed.ingredients.map(String).filter(i => i && i !== '[object Object]')
        : typeof parsed.ingredients === 'string'
        ? parsed.ingredients.split(/,\s*/).filter(i => i)
        : [],
      steps: Array.isArray(parsed.steps) 
        ? parsed.steps.map(String).filter(s => s && s !== '[object Object]')
        : typeof parsed.steps === 'string'
        ? [parsed.steps]
        : [],
      time: String(parsed.time) || '30 minutes',
      difficulty: String(parsed.difficulty) || 'Medium',
    };
  } catch (error) {
    console.error('Ollama error:', error.message);
    console.log('Falling back to mock recipes');
    return generateMockRecipe(ingredients);
  }
}

function generateMockRecipe(ingredients) {
  // Mock recipe for testing without API calls
  const ingredientList = ingredients.split(',').map(i => i.trim()).filter(i => i);

  return {
    name: `${ingredientList[0] || 'Custom'} Delight`,
    ingredients: ingredientList.length > 0 ? ingredientList : ['Sample ingredient'],
    steps: [
      'Prepare your ingredients by washing and chopping as needed.',
      'Heat a pan over medium heat with a bit of oil.',
      'Add your main ingredients and cook until tender.',
      'Season to taste and serve hot.'
    ],
    time: '25 minutes',
    difficulty: 'Easy'
  };
}

