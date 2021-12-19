export const searchValueReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_VALUE':
      return action.value;
    default:
      return state;
  }
};
