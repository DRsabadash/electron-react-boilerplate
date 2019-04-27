import { STORE_DATA, DEL_DATA } from '@/constants/actionTypes';

const initialState = {
  data: []
};

const storageReducer = (state = initialState, action) => {
  switch(action.type) {
    case STORE_DATA:
      return {
        ...state,
        data: action.payload
      };
    case DEL_DATA:
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
}

export default storageReducer;