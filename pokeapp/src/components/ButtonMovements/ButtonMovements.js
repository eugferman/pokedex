import React from 'react';
import { useDispatch } from 'react-redux';
import {actGridMovements} from '../../redux/actions/actGridMovements';

import './ButtonMovements.scss';

function ButtonMovements() {

  const dispatch = useDispatch();
  const showMovements = () => {
    dispatch(actGridMovements(true));
  }

  const hideMovements = () => {
    dispatch(actGridMovements(false));
  }

  return <div className="buttons-pokedex-movements">
          <button onClick={showMovements}>Show Movements</button>
          <button onClick={hideMovements}>Hide Movements</button>
        </div>

}

export default ButtonMovements;