import React from 'react'
import { Toolbar, makeStyles } from '@material-ui/core';
import Headroom from 'react-headroom';

const useStyles = makeStyles((theme) => ({
  buttonsHideScroll: {
    display: 'flex',
    backgroundColor: '#fff'
  },
  buttonLunch: {
    border: '1px solid #414749',
    background: '#414749',
    color: '#fff',
    flex: 1,
    height: 35,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonDinner: {
    border: '1px solid #A7ADAF',
    background: '#fff',
    color: '#A7ADAF',
    flex: 1,
    height: 35,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
}));

export default function Buttons() {
  const classes = useStyles();
  return (
    <div className="buttons">
      <Headroom>
        <Toolbar className={classes.buttonsHideScroll} variant="dense">
          <button className={classes.buttonLunch}>Lunch</button>
          <button className={classes.buttonDinner}>Dinner</button>
        </Toolbar>
      </Headroom>
    </div>
  )
}
