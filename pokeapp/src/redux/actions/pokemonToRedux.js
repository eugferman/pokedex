export const pokemonToRedux = (pokemon) =>{
  return {
    type: 'LOAD_POKEMON',
    payload: pokemon
  }
}

export default pokemonToRedux;
