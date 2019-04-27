import { combineReducers } from 'redux';
//import networkReducer from './NetworkReducer';
//import * as reducerTypes from '../constants/reducerTypes

const createReducer = (reducer, name) => (state, action) => {
  if (name !== action.name && state !== undefined) {
    return state;
  }
  return reducer(state, action);
}

const rootReducer = combineReducers({
  state: (state = {}) => state,

  //Import reducer types, and the reducer first, then create them using the create
  //reducer method above, for example: 
  //[reducerTypes.REQUEST_DATA]: createReducer(networkReducer, reducerTypes.REQUEST_DATA),

  //EACH NETWORK REQUEST NEEDS IT'S OWN REDUCER! SO DOES EACH COMPONENT REQUIRING DATA TO BE STORED
  //this being said, any component can obviously bind to any slice of state/network request status

});

export default rootReducer;
