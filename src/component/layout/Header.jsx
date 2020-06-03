import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Toolbar, IconButton, Divider } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { connect } from 'react-redux';
import Calendar from './Calendar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  textSmall: {
    fontSize: 10,
  },
  textLocation: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textLocationArrow: {
    margin: '-7px 5px',
    color: '#FF232A'
  }
}));

function Header({layout, toggleModalLocation}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed" color="inherit">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <KeyboardBackspaceIcon />
          </IconButton>
          <Grid container direction="column" alignItems="flex-start">
            <span className={classes.textSmall}>ALAMAT PENGANTARAN</span>
            <div onClick={toggleModalLocation} className={classes.textLocation}>
              {layout.deliveryLocation.name}
              <KeyboardArrowDownIcon className={classes.textLocationArrow} />
            </div>
          </Grid>
        </Toolbar>
        <Toolbar variant="dense">
          <Calendar />
        </Toolbar>
        <Divider />
      </AppBar>
      <Toolbar />
      <Toolbar />
    </div>
  );
}

const mapState = state => ({
  layout: state.layout
})

const mapDispatch = dispatch => ({
  toggleModalLocation: () => dispatch({ type: 'OPEN_MODAL_LOCATION' })
})

export default connect(mapState, mapDispatch)(Header)