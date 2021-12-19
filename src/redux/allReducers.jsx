import { productReducer } from './productReducer';
import { filteredDataReducer } from './filteredDataReducer';
import { popupWindowShowReducer } from './popupWindowShowReducer';
import { searchValueReducer } from './searchValueReducer';
import { cartDataReducer } from './cartDataReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  products: productReducer,
  filteredData: filteredDataReducer,
  searchValue: searchValueReducer,
  popupWindowShow: popupWindowShowReducer,
  cartData: cartDataReducer,
});
export default allReducers;
