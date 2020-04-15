import React from 'react';
import { useSelector } from 'react-redux';

import './Movements.scss';

function Movements () {
  const pokemonAttacks = useSelector(state => state.pokemon.moves);

return <div className="main-attack-list">
        <h4>Movements</h4>
        <div className="attack-list">
          <ul>
            {pokemonAttacks.map((listAttack) => (
              <li id={listAttack.name}>
                <p>{listAttack.move.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
}

export default Movements;