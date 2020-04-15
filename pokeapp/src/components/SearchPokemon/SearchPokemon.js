import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pokemonInitial } from '../../redux/actions/pokemonInitial';

import './SearchPokemon.scss';

function SearchPokemon(){
  const [pokemonValue, setPokemonValue] = useState();
  const dispatch = useDispatch();

  const handlePokemon = (e) => {
    setPokemonValue(e.target.value);
  }

  const searchFormPokemon = (event) => {
    event.preventDefault();
    dispatch(pokemonInitial(pokemonValue.toLowerCase())); 
  }

  return <div className="main-form">
          <form onSubmit={searchFormPokemon}>
            <input type="text" placeholder="Write a pokemon to search..." maxLength="20" onChange={handlePokemon} />
            <input type="submit" name="search_pokemon" value="Search pokemon"/>
            </form>
        </div>

}

export default SearchPokemon;