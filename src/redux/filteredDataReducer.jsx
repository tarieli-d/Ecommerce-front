import productsArray from '../common/constants/constants';
export const filteredDataReducer = (
  state = productsArray.map((u) => Object.assign({}, u)),
  action
) => {
  switch (action.type) {
    case 'ADD_PRODUCi':
      return [...state, action.value];
    case 'CHANGE_FILTERED_DATA':
      return [...action.newObject];
    case 'DELETE_PRODUCi':
      const newObject = state.filter((prod) => prod.id != action.id);
      return [...newObject];
    default:
      return state;
  }
};
