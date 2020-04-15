const tableTypesReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_TABLETYPES":
      return action.payload;
    default:
      return state;
  }
};

export default tableTypesReducer;