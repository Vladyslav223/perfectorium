import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';

import "./index.scss";
import "./arrow.scss";

const ColorButton = withStyles(theme => ({
  root: {
    color: "white",
    backgroundColor: deepOrange[200],
    '&:hover': {
      backgroundColor: deepOrange[300],
    },
  },
}))(Button);

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 16,
    width: "100%",
    marginLeft: "-5px",
  },
  active: {
    '& $line': {
      backgroundColor: '#22c1c6',
    },    
  },
  completed: {
    '& $line': {
        backgroundColor: '#22c1c6',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 33,
    height: 33,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {    
    backgroundColor: 'white',
    border: '2px solid #00b7bd',
    boxSizing: 'border-box',
    color: '#00b7bd'
  },
  completed: {
    backgroundColor: '#00b7bd',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  const icons = {
    2: <img alt="icon" src="icons/step1.png"></img>,
    3: <img alt="icon" src="icons/step2.png"></img>,
    4: <img alt="icon" src="icons/step3.png"></img>,
    5: <img alt="icon" src="icons/step4.png"></img>,
  };

  const iconsActive = {
    2: <img alt="icon" src="icons/step1b.png"></img>,
    3: <img alt="icon" src="icons/step2b.png"></img>,
    4: <img alt="icon" src="icons/step3b.png"></img>,
    5: <img alt="icon" src="icons/step4b.png"></img>,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {props.active ? iconsActive[String(props.icon)] : icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

function getStepContent(step) {
  switch (step) {
    case 1:
      return 'Step 1. We simulate receiving data 1 from the user using the checkbox.';
    case 2:
      return 'Step2. Simulation 1 complete. Simulating receiving user information 2';
    case 3:
      return 'Step3. Simulation 1 & 2 complete. Simulating receiving user information 3';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers(props) {
  const { onDispatch, onBack, onFinish, onReset } = props;  
  const [val, changeVal] = useState(false);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = (event) => {
    event.preventDefault();
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    onDispatch(activeStep, event.target[0].checked);
    if(activeStep === 3) {
      onFinish();
    }   
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    onBack(activeStep);
  };

  const handleReset = () => {
    setActiveStep(1);
    onReset();
    changeVal(!val);
  };  
 
  return (
    <div className={classes.root}>
         
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}><div className="first-line"></div>   
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}><div className="label">{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
       {activeStep === steps.length ? (
          <>
            <Typography className={classes.instructions}>
            Information 1, 2 and 3 received.
              All steps completed!
            </Typography>
            <Button 
              variant="contained"
              color="primary"
              onClick={handleReset}
              className={classes.button}
            >
              Reset
            </Button>
          </>
        ) : (
          <>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>            
              <div className="fake">
                <div class="arrow-1">
                    <div/>
                </div>
                           
                <form className="form" onSubmit={handleNext}>
                    <input className="input" id="input" onChange={() => changeVal(!val)} type="checkbox"></input>
                    <label className="input label-check" htmlFor="input">I agree to begin now the <a href="http://google.com">Simulation</a></label><br/>
                    <Button
                      variant="contained"
                      color="default"
                      disabled={activeStep === 1}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <ColorButton
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}                    
                      disabled={!val}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'SIMULATE'}
                    </ColorButton>
                </form>
              </div>              
            </>          
        )}           
    </div>
  );
}

