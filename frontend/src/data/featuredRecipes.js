const featuredRecipes = [
  {
    name: 'Pasta Carbonara',
    category: 'Italian Cuisine',
    image: 'https://images.unsplash.com/photo-1512058564366-c9e3d8efca9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
    time: '25 minutes',
    difficulty: 'Medium',
    ingredients: [
      '200g spaghetti',
      '100g pancetta',
      '2 eggs',
      '50g pecorino romano',
      'Freshly ground black pepper',
      'Salt to taste'
    ],
    steps: [
      'Cook spaghetti al dente in salted boiling water.',
      'Fry pancetta until crispy, then remove from heat.',
      'Whisk eggs with grated pecorino and black pepper.',
      'Drain pasta and toss with pancetta, then stir in egg mixture off the heat.',
      'Serve immediately with extra pecorino and black pepper.'
    ],
    comments: [
      { user: 'Maya', text: 'Creamy and authentic—I made this for friends and they loved it!' },
      { user: 'Jasper', text: 'Perfect recipe. I swapped pecorino for parmesan and it was still delicious.' }
    ]
  },
  {
    name: 'Risotto Milanese',
    category: 'Italian Cuisine',
    image: 'https://images.unsplash.com/photo-1603052875143-578c82f7b661?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
    time: '40 minutes',
    difficulty: 'Medium',
    ingredients: [
      '320g risotto rice',
      '1 onion, diced',
      '60g butter',
      '1L chicken broth',
      '1 saffron packet',
      '50g parmesan, grated'
    ],
    steps: [
      'Warm broth and steep saffron in it.',
      'Sauté onion in butter until translucent.',
      'Toast rice in the pan, then add warm broth slowly, stirring constantly.',
      'Cook gently until rice is creamy and al dente.',
      'Finish with parmesan and a knob of butter.'
    ],
    comments: [
      { user: 'Leila', text: 'So rich and comforting. Saffron gave it the perfect aroma.' }
    ]
  },
  {
    name: 'Pad Thai',
    category: 'Asian Fusion',
    image: 'https://images.unsplash.com/photo-1604908177522-9e321901764d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
    time: '30 minutes',
    difficulty: 'Easy',
    ingredients: [
      '200g rice noodles',
      '2 eggs',
      '100g shrimp or tofu',
      '2 tbsp tamarind paste',
      '1 tbsp fish sauce',
      '2 tbsp palm sugar',
      'Bean sprouts',
      'Crushed peanuts'
    ],
    steps: [
      'Soak noodles until soft, then drain.',
      'Mix tamarind, fish sauce, and sugar into a sauce.',
      'Cook protein, then add noodles and sauce to the pan.',
      'Push noodles aside, scramble eggs, then combine everything.',
      'Add bean sprouts and peanuts before serving.'
    ],
    comments: [
      { user: 'Nina', text: 'Best homemade Pad Thai I’ve made—balance of sweet and sour is spot on.' }
    ]
  },
  {
    name: 'Sushi Rolls',
    category: 'Asian Fusion',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
    time: '50 minutes',
    difficulty: 'Hard',
    ingredients: [
      '2 cups sushi rice',
      'Nori sheets',
      'Cucumber',
      'Avocado',
      'Fresh salmon',
      'Soy sauce',
      'Wasabi'
    ],
    steps: [
      'Cook sushi rice and season with rice vinegar, sugar, and salt.',
      'Lay nori on a bamboo mat and spread rice evenly.',
      'Add fillings and roll tightly.',
      'Slice rolls with a sharp knife and serve with soy sauce.'
    ],
    comments: [
      { user: 'Ari', text: 'The rice recipe is perfect—my rolls held together beautifully.' }
    ]
  },
  {
    name: 'Grilled Vegetables',
    category: 'Healthy Meals',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1100&q=80',
    time: '25 minutes',
    difficulty: 'Easy',
    ingredients: [
      'Zucchini',
      'Bell peppers',
      'Eggplant',
      'Olive oil',
      'Garlic',
      'Lemon juice',
      'Fresh herbs'
    ],
    steps: [
      'Slice vegetables and toss with olive oil, garlic, salt, and pepper.',
      'Grill on medium heat until tender and charred.',
      'Finish with lemon juice and fresh herbs.',
      'Serve warm or at room temperature.'
    ],
    comments: [
      { user: 'Sara', text: 'A great side dish that everyone enjoyed. Simple and flavorful.' }
    ]
  }
];

export default featuredRecipes;
