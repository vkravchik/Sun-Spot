import { combineReducers } from 'redux';

import { pieReducer } from './pieReducer';
import { highStockReducer } from './highStockReducer';
import { switchTypeReducer } from './switchTypeReducer';
import { sliderReducer } from './sliderReducer';

export default combineReducers({
  highStockReducer,
  pieReducer,
  switchTypeReducer,
  sliderReducer
});
