export const ACTION_TYPES = {
    DISPATCH: 'DISPATCH',
    BACK: "BACK",
    FINISH: "FINISH",
    RESET: "RESET",       
  };
  
  const {
    DISPATCH,
    BACK,
    FINISH,
    RESET    
  } = ACTION_TYPES;
  
  const dataToStore = ({step, data}) => ({
    type: DISPATCH,
    payload: {step, data}
  });

  const backStep = payload => ({
    type: BACK,
    payload
  });

  const finishSteps = () => ({
    type: FINISH,
  })

  const resetSteps = () => ({
    type: RESET,
  })

  export const onDispatch = (step, data) => dispatch => {
    dispatch(dataToStore({step, data}));
  }

  export const onBack = (step) => dispatch => {
    dispatch(backStep({step}));
  }

  export const onFinish = () => dispatch => {
    dispatch(finishSteps());
  }

  export const onReset = () => dispatch => {
    dispatch(resetSteps());
  }

  