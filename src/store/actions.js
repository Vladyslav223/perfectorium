export const ACTION_TYPES = {
    DISPATCH: 'DISPATCH',   
  };
  
  const {
    DISPATCH,    
  } = ACTION_TYPES;
  
  const dataToStore = ({ data, step }) => ({
    type: DISPATCH,
    payload: { data, step },
  });

  export const onDispatch = (data, step) => dispatch => {
    dispatch(dataToStore(data, step));
  }
  