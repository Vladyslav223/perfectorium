export const ACTION_TYPES = {
    DISPATCH: 'DISPATCH',   
  };
  
  const {
    DISPATCH,    
  } = ACTION_TYPES;
  
  export const dataToStore = payload => ({
    type: DISPATCH,
    payload
  });

  export const onDispatch = (step, data) => dispatch => {
    dispatch(dataToStore(step, data));
  }
  