import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, deepOrange } from '@material-ui/core/colors';



const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[200]),
    backgroundColor: deepOrange[200],
    '&:hover': {
      backgroundColor: deepOrange[400],
    },
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: "40%",
    color: "white",
  },
}));

export default function CustomizedButtons(props) {
  const classes = useStyles();

  return (   
      <ColorButton variant="contained"  className={classes.margin}>
       {props.title}
      </ColorButton>    
  );
}
