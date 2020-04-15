//React imports
import React from 'react';
import { useState, useEffect } from 'react';

//Redux imports
import { useDispatch, useSelector } from 'react-redux';
import { pokemonToRedux } from './redux/actions/pokemonToRedux';
import { pokemonInitial } from './redux/actions/pokemonInitial';
import { actTableTypes } from './redux/actions/actTableTypes';

//Api imports
import apiService from './services/apiService';
import jsonService from './services/jsonService';

//Components imports
import SearchPokemon from './components/SearchPokemon/SearchPokemon';
import Pokedex from './components/Pokedex/Pokedex';
import Movements from './components/Movements/Movements';
import TableTypes from './components/TableTypes/TableTypes';

//Media and style imports
import imgTitle from './img/pokemon';
import './App.scss';

function App() {
  
  const initialPokemon = useSelector(state => state.pokemonValue);
  const movements = useSelector(state => state.stateMovements);
  const url = "https://pokeapi.co/api/v2/pokemon/"+initialPokemon;
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try{
        const pokemon = await apiService(url);
        const tableTypes = await jsonService();
        dispatch(pokemonToRedux(pokemon));
        dispatch(pokemonInitial(initialPokemon));
        dispatch(actTableTypes(tableTypes));
        setErrorMessage("");
        setIsLoading(false);
      }catch(error){
        let mensajeDeError = "This pokemon doesn't exist";
        setErrorMessage(mensajeDeError);
      }
    }
    fetchData();
  });


  if (isLoading) return <div>Loading...</div>;  

  return (
    <div className="main-app">
      <div className="img-title">
        <img src={imgTitle} alt="pokemon-title" />
      </div>
      <div className="error-message">
          <p>{errorMessage}</p>
      </div>
      <SearchPokemon />
      <div className="data-pokemon">
        <div className="data-pokedex">
          {!isLoading && <Pokedex />}
        </div>
        <div className="data-tabletypes">
          <TableTypes />
        </div>
      </div>
      {movements && <Movements />}
      
    </div>
  );
}

export default App;
