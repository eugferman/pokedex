import React from 'react';
import { useSelector } from 'react-redux';

import './PokemonType.scss';

function PokemonType(){

  const pokemonTypes = useSelector(state => state.pokemon.types);


  return <div className="type-list">
            <ul>
              {pokemonTypes.map((types) => (
                <li className={`pokemon-type type-${types.type.name}`}>
                  <p>{types.type.name}</p>
                </li>
              ))}
            </ul>
          </div>
  }

export default PokemonType;