import { combineReducers } from "redux";

// My Reducer 
import securityReducer from './security';
import songReducer from './song';
import appReducer from './app';

const rootReducer = combineReducers(
  {
    //All Reducers
    app: appReducer,
    security: securityReducer,
    song: songReducer
  }
)

export default rootReducer;
