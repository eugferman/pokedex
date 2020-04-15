const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_POKEMON":
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;