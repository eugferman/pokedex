import React from 'react';
import { useSelector } from 'react-redux';

import './PokemonStats.scss';

function PokemonStats(){
  const pokemonStats = useSelector(state => state.pokemon.stats);

  return <div>
          <h4>Base stats</h4>
          <div className="stats-list">
            <ul>
              {pokemonStats.map((stats) => (
                <li>
                  <p>{stats.stat.name}: <strong>{stats.base_stat}</strong></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
}

export default PokemonStats;