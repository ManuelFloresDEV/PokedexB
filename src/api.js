const POKEAPI_IRL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemonList(limit = 50) {
  const response = await fetch(`${POKEAPI_IRL}?limit=${limit}`);
  const responseJson = await response.json();
  return responseJson.results;
}

export async function getPokemonByName(name) {
  const response = await fetch(`${POKEAPI_IRL}/${name}`);
  const responseJson = await response.json();
  return responseJson;
}
