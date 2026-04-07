const API_URL = import.meta.env.VITE_API_URL || '/api/generate-recipe';

export async function generateRecipe(ingredients) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients }),
  });

  if (!response.ok) {
    const errorPayload = await response.json().catch(() => null);
    throw new Error(errorPayload?.error || 'Server error while generating recipe.');
  }

  return response.json();
}
