import { combineReducers } from "redux";

import { demoReducer } from "./demoReducer";
import { chartReducer } from "./chartReducer";

export default combineReducers({
  demoReducer,
  chartReducer,
})
