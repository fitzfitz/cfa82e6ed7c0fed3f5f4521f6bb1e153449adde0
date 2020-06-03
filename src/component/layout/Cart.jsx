import React from 'react'
import { makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#B02929',
    color: '#fff',
    position: 'fixed',
    bottom: 15,
    left: 0,
    right: 0,
    margin: 'auto',
    width: '85%',
    borderRadius: 5,
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cartLeft: {
    display: 'flex',
    textAlign: 'left',
    flexDirection: 'column'
  },
  cartCount: {
    fontWeight: 'bold'
  },
  cartDesc: {
    fontSize: 13
  },
  cartRight: {},
}));

function Cart({cart}) {
  const classes = useStyles();
  return cart.length > 0 ? (
    <div className="cart">
      <Headroom>
        <div className={classes.root}>
          <div className={classes.cartLeft}>
            <span className={classes.cartCount}>{cart.length} Items | Rp. {cart.reduce((a, {price}) => a + price, 0).toLocaleString()}</span>
            <span className={classes.cartDesc}>Termasuk ongkos kirim</span>
          </div>
          <div className={classes.cartRight}>
            <ShoppingCartIcon />
            <KeyboardArrowRightIcon />
          </div>
        </div>
      </Headroom>
    </div>
  ) : null;
}

const mapState = state => ({
  cart: state.cart.data
})
const mapDispatch = dispatch => ({})

export default connect(mapState, mapDispatch)(Cart)