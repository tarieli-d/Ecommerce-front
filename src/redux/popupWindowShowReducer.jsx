export const popupWindowShowReducer = (state = 'none', action) => {
  switch (action.type) {
    case 'FLEX':
      return action.display;
    case 'HIDE':
      return action.display;
    default:
      return state;
  }
};
