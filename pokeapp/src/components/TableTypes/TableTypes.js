import React from 'react';

import { useSelector } from 'react-redux';
import { mapperTableTypes } from '../../mappers/mapperTableTypes'; 

import './TableTypes.scss';

function TableTypes() {
  const arrayCurrentPokemonType = useSelector(state => state.pokemon.types);
  const pokemonTableTypes = useSelector(state => state.tableTypes);
  
  const tableTypesMapped = mapperTableTypes(arrayCurrentPokemonType, pokemonTableTypes);

  return <div>
            <div className="table-list">
                    <ul>
                      {tableTypesMapped.map((types) => (
                        <li>
                          <h3 className={`pokemon-type type-${types.type}`}>{types.type}</h3>
                          <p><strong>Weaknesses:</strong> {types.weaknesses}</p>
                          <p><strong>Strengths:</strong> {types.strengths.toString()}</p>
                          <p><strong>Immunes:</strong> {types.immunes.toString()}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
          </div>

}

export default TableTypes;