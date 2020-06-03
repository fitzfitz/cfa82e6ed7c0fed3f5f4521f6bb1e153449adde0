import { combineReducers } from "redux";
import layout from './layout'
import locations from './locations'
import items from './items'
import cart from './cart'

export default combineReducers({
  layout,
  locations,
  items,
  cart
})