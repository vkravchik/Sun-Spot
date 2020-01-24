import { combineReducers } from 'redux';

import { highStockReducer } from './highStockReducer';
import { switchTypeReducer } from "./switchTypeReducer";

export default combineReducers({
  highStockReducer: highStockReducer,
  switchTypeReducer: switchTypeReducer,
})
