import React, { useState } from 'react'
import { Drawer, Typography, makeStyles, IconButton, Paper, InputBase } from '@material-ui/core'
import { connect } from 'react-redux'
import CloseIcon from '@material-ui/icons/Close';
import RoomIcon from '@material-ui/icons/Room';
import LocationList from './LocationList';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh'
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  drawerTitle: {
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  drawerBody: {
    padding: '0 12px 12px'
  },
  fieldRoot: {
    display: 'flex'
  },
  fieldInputIcon: {
    margin: '12px 6px',
    color: '#F73A4C'
  },
  input: {

  }
}));
function LocationSearch({layout, toggleDrawer}) {
  const [search, setSearch] = useState('kul')
  const classes = useStyles();
  return (
    <Drawer
      anchor={'bottom'}
      open={layout.modalLocation}
      onClose={toggleDrawer}
    >
      <div className={classes.root}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.drawerBody}>
          <Typography className={classes.drawerTitle} variant="h6">Cek makanan yang tersedia di lokasi kamu!</Typography>
          <Paper component="div" className={classes.fieldRoot}>
            <RoomIcon className={classes.fieldInputIcon} />
            <InputBase
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={classes.input}
              placeholder="Search your location"
              inputProps={{ 'aria-label': 'search your location' }}
            />
          </Paper>
          <LocationList />
        </div>

      </div>
    </Drawer>
  )
}

const mapState = state => ({
  layout: state.layout
})
const mapDispatch = dispatch => ({
  toggleDrawer: () => dispatch({ type: 'OPEN_MODAL_LOCATION' })
})

export default connect(mapState, mapDispatch)(LocationSearch)