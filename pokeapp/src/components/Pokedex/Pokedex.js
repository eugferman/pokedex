import React from 'react';
import { useSelector } from 'react-redux';
import PokemonStats from '../PokemonStats/PokemonStats';
import ButtonMovements from '../ButtonMovements/ButtonMovements';
import PokemonType from '../PokemonType/PokemonType';
import './Pokedex.scss';
import './Bg-Pokemon-Types.scss';

function Pokedex () {
  
  const pokemonRedux = useSelector(state => state.pokemon);
  const pokemonTypes = useSelector(state => state.pokemon.types[0].type.name);

return <div className="main-pokedex">
          <div className="pokedex">
            <div className="left-panel-pokedex">
              <div className="lights">
                <div className="blue-light"></div>
                <div className="light red"></div>
                <div className="light yellow"></div>
                <div className="light green"></div>
              </div>
              <div className="pokemon-name">
                <h4>{pokemonRedux.name.toUpperCase()}</h4>
              </div>
              <div className={`bg-pokemon ${pokemonTypes}`}>
                <img src={pokemonRedux.sprites.front_default} alt={pokemonRedux.name}></img>
              </div>
              <ButtonMovements />
            </div>
            <div className="right-panel-pokedex">
              <PokemonStats />
            </div>
          </div>
        </div>
}

export default Pokedex;