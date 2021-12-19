import productsArray from '../common/constants/constants';
export const productReducer = (
   state = [], action) => {
   switch (action.type) {
      case 'GET_PRODUCTS': return [...action.products];
      case 'ADD_PRODUCT': return [...action.newObject];
      case 'CHANGE_PRODUCT': return [...action.newObject];
      case 'DELETE_PRODUCT':
         //const newObject = state.filter((prod) => prod.id != action.id);
         return [...action.newObject];
      default: return state;
   }
};
