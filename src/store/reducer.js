  
import { ACTION_TYPES } from './actions';

const {
  DISPATCH,
} = ACTION_TYPES;

export const initialState = {
  data1: false,
  data2: false,
  data3: false,
  data4: false,
};

export const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case DISPATCH:
          return {
            ...state,
            ["data"+action.payload.step]: action.payload.data
          };      
    
        default:
          return state;
      }
}