import React from 'react'
import { List, ListItem, Avatar, makeStyles, ListItemAvatar, ListItemText } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room'
import { connect } from 'react-redux'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginTop: 15,
    backgroundColor: theme.palette.background.paper,
  },
  listItemSecondary: {
    textOverflow: 'ellipsis',
    overflow: 'Hidden',
    whiteSpace: 'nowrap',

  }
}));

function LocationList({locations, setNewLocation, toggleDrawer}) {
  const classes = useStyles();
  return (
    <List className={classes.root}>

      {locations.map((each, index) => (
        <ListItem key={index} onClick={e => {
          setNewLocation(each)
          toggleDrawer()
        }}>
          <ListItemAvatar>
            <Avatar>
              <RoomIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText classes={{secondary: classes.listItemSecondary}} primary={each.name} secondary={each.address} />
        </ListItem>
      ))}

    </List>
  )
}

const mapState = state => ({
  locations: state.locations.data
})
const mapDispatch = dispatch => ({
  setNewLocation: payload => dispatch({ type: 'SET_LOCATION', data: payload }),
  toggleDrawer: () => dispatch({ type: 'OPEN_MODAL_LOCATION' })
})

export default connect(mapState, mapDispatch)(LocationList)