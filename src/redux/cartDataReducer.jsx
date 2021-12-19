export const cartDataReducer = (state = new Set(), action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let arr = [...state].filter((prod) => {
        return prod.id !== action.newItem.id;
      });
      return new Set([...arr, action.newItem]);
    case 'DELETE_FROM_CART':
      let newCart = new Set([...state]);
      newCart.delete(action.item);
      return newCart;
    default:
      return state;
  }
};
