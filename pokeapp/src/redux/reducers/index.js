import pokemonReducer from "./pokemons"
import pokemonInitial from "./pokemonInitial";
import redGridMovements from "./redGridMovements";
import redTableTypes from "./redTableTypes";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  pokemon: pokemonReducer,
  pokemonValue: pokemonInitial,
  stateMovements: redGridMovements,
  tableTypes: redTableTypes
});

export default allReducers;