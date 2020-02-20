import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';
import { pieReducer } from './pieReducer';
import { highStockReducer } from './highStockReducer';
import { switchTypeReducer } from './switchTypeReducer';
import { sliderReducer } from './sliderReducer';
import { errorHandlerReducer } from './errorHandlerReducer';
import { heroesReducer } from './heroesReducer';
import { matchesReducer } from './matchesReducer';
import { customChartReducer } from './customChartReducer';

export default combineReducers({
  highStockReducer,
  pieReducer,
  switchTypeReducer,
  sliderReducer,
  errorHandlerReducer,
  heroesReducer,
  matchesReducer,
  customChartReducer,
  form: formReducer
});
