  
import { ACTION_TYPES } from './actions';

const {
  DISPATCH,
  BACK,
  FINISH,
  RESET   
} = ACTION_TYPES;

export const initialState = {
  data1: false,
  data2: false,
  data3: false,
  results: null
};

export const reducer = (state = initialState, action ) => {
    switch (action.type) {
        case DISPATCH:
          return {
            ...state,
            ["data" + action.payload.step]:  action.payload.data,     
          };      

        case BACK:
            return {
              ...state,
              ["data" + action.payload.step]: false,
            };      

        case FINISH:
          const arr = [state.data1, state.data2, state.data3]
            return {
              ...state,
              results: arr
            };      
      
        case RESET:
            state = initialState;
            return {
              ...state
            };      
        
        default:
          return state;
      }
}
