const redGridMovements = (state = null, action) => {
  switch (action.type) {
    case "GRID_MOVEMENTS":
      return action.payload;  
    default:
      return state;
  }
};

export default redGridMovements;