const extractJson = (text) => {
  if (!text || typeof text !== 'string') return null;
  const match = text.match(/\{([\s\S]*)\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch (error) {
    return null;
  }
};

const parseRequestBody = async (req) => {
  if (req.body) return req.body;
  let body = '';
  for await (const chunk of req) {
    body += chunk;
  }
  return body ? JSON.parse(body) : {};
};

const generateMockRecipe = (ingredients) => {
  const ingredientList = ingredients.split(',').map((item) => item.trim()).filter(Boolean);
  return {
    name: `${ingredientList[0] || 'Custom'} Delight`,
    ingredients: ingredientList.length > 0 ? ingredientList : ['Sample ingredient'],
    steps: [
      'Prepare your ingredients by washing and chopping as needed.',
      'Heat a pan over medium heat with a bit of oil.',
      'Add your main ingredients and cook until tender.',
      'Season to taste and serve hot.',
    ],
    time: '25 minutes',
    difficulty: 'Easy',
  };
};

const generateWithOpenAI = async (ingredients) => {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured.');
  }

  const prompt = `You are an expert recipe developer. Create a restaurant-quality recipe using the ingredients provided. Respond only in strict JSON format with keys: name, ingredients, steps, time, difficulty.\n\nIngredients: ${ingredients}`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      messages: [
        { role: 'system', content: 'You are a helpful recipe generation assistant.' },
        { role: 'user', content: prompt },
      ],
    }),
  });

  const data = await response.json();
  const rawResponse = data.choices?.[0]?.message?.content || '';
  const parsed = extractJson(rawResponse);

  if (!parsed) {
    throw new Error('Unable to parse OpenAI response.');
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
};

const generateWithOllama = async (ingredients) => {
  const ollamaUrl = process.env.OLLAMA_URL || 'http://127.0.0.1:11434';
  const systemPrompt = 'You are a professional recipe developer. Generate ONLY valid JSON with no additional text. Keys: name (string), ingredients (array of strings), steps (array of strings), time (string like "30 minutes"), difficulty (string: Easy/Medium/Hard)';
  const userPrompt = `Create a recipe using: ${ingredients}. Return ONLY the JSON object, nothing else.`;

  const response = await fetch(`${ollamaUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'tinyllama',
      prompt: userPrompt,
      system: systemPrompt,
      stream: false,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ollama API error: ${response.statusText}`);
  }

  const data = await response.json();
  const fullResponse = data.response || '';
  const parsed = extractJson(fullResponse);

  if (!parsed) {
    throw new Error('Unable to parse Ollama response.');
  }

  return {
    name: parsed.name || 'Custom Recipe',
    ingredients: Array.isArray(parsed.ingredients)
      ? parsed.ingredients.map(String).filter((item) => item && item !== '[object Object]')
      : typeof parsed.ingredients === 'string'
      ? parsed.ingredients.split(/,\s*/).filter(Boolean)
      : [],
    steps: Array.isArray(parsed.steps)
      ? parsed.steps.map(String).filter((step) => step && step !== '[object Object]')
      : typeof parsed.steps === 'string'
      ? [parsed.steps]
      : [],
    time: String(parsed.time) || '30 minutes',
    difficulty: String(parsed.difficulty) || 'Medium',
  };
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { ingredients } = await parseRequestBody(req);
    if (!ingredients || typeof ingredients !== 'string') {
      res.status(400).json({ error: 'Ingredients must be a non-empty string.' });
      return;
    }

    const provider = process.env.AI_PROVIDER || 'mock';
    let recipeData;

    if (provider === 'ollama') {
      recipeData = await generateWithOllama(ingredients);
    } else if (provider === 'openai') {
      recipeData = await generateWithOpenAI(ingredients);
    } else {
      recipeData = generateMockRecipe(ingredients);
    }

    res.status(200).json(recipeData);
  } catch (error) {
    console.error('API generate-recipe error:', error);
    res.status(500).json({ error: error.message || 'Server error while generating recipe.' });
  }
}
