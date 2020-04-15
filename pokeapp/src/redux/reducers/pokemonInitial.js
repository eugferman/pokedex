const pokemonInitial = (state = "bulbasaur", action) => {
  switch (action.type) {
    case "POKEMON_INITIAL":
      return action.payload;  
    default:
      return state;
  }
};

export default pokemonInitial;