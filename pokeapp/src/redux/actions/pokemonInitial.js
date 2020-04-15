export const pokemonInitial = (pokemonValue) =>{
  return {
    type: 'POKEMON_INITIAL',
    payload: pokemonValue
  }
}

export default pokemonInitial;