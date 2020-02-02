import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import ButtonCustom from './ButtonCustom';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';
import "./index.scss";
//import { onClickUser } from '../../store/actions.js'

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
    width: "90%",
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
    1: <img alt="icon" src="../icons/step1.png"></img>,
    2: <img alt="icon" src="../icons/step1.png"></img>,
    3: <img alt="icon" src="../icons/step2.png"></img>,
    4: <img alt="icon" src="../icons/step3.png"></img>,
    5: <img alt="icon" src="../icons/step4.png"></img>,
  };

  const iconsActive = {
    1: <img alt="icon" src="../icons/step2b.png"></img>,
    2: <img alt="icon" src="../icons/step1b.png"></img>,
    3: <img alt="icon" src="../icons/step2b.png"></img>,
    4: <img alt="icon" src="../icons/step3b.png"></img>,
    5: <img alt="icon" src="../icons/step4b.png"></img>,
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
    marginLeft: '7%',
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
    case 0:
      return 'Hello!';
    case 1:
      return 'Step1. Receiving user information 1';
    case 2:
      return 'Step2. Information 1 received. Receiving user information 2';
    case 3:
      return 'Step3. Information 1 & 2 received. Receiving user information 3';
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    console.log(activeStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
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
          <div>
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
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <form className="form">
                  <input type="checkbox"></input>
                  <label>I agree to the <a href="http://google.com">Terms and Conditions</a></label><br/>
                  <Button
                    style={{color: "gray"}}
                    variant="contained"
                    color="default"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <ColorButton
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'DISPATCH'}
                  </ColorButton>
              </form>    
              
            </div>
          </div>
        )}           
    </div>
  );
}
