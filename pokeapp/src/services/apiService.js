const apiService = async (url) => {

  const response = await fetch(url);
  const pokemonList = await response.json();
      
  return pokemonList;
}
export default apiService;

