const API_URL = "https://futuramaapi.com/api/characters";

export async function getCharacters() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch Futurama characters");
  }

  return response.json();
}
