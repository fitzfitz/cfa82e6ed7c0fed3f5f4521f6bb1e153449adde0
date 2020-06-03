import React from 'react'
import { connect } from 'react-redux'
import { makeStyles, Container } from '@material-ui/core'
import { Rating } from '@material-ui/lab'

const useStyle = makeStyles({
  root: {},
  itemContainer: {
    margin: '0 0 20px',
    boxShadow: '0 3px 15px rgba(10, 31, 68, 0.1)',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    height: 0,
    overflow: 'hidden',
    paddingBottom: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  description: {
    padding: 10
  },
  rating: {
    color: '#6C7679',
    marginBottom: '5px',
    display: 'flex',
    fontWeight: 'bold',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: '5px'
  },
  author: {
    fontSize: 13,
    color: '#6C7679',
    marginBottom: '5px'
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },
  buttonAdd: {
    backgroundColor: '#FF232A',
    border: 'none',
    color: '#fff',
    padding: '7px 20px',
    borderRadius: 5,
    outline: 'none'
  }
})

function Items({items, addCart}) {
  const classes = useStyle();

  return (
    <Container>
      {
        items.map((e, i) => (
          <div className={classes.itemContainer} key={i}>
            <div className={classes.image} style={{ backgroundImage: `url(${e.image})` }}></div>
            <div className={classes.description}>
              <div className={classes.rating}>
                {e.rating} &nbsp;
                <Rating
                  name="size-small"
                  defaultValue={e.rating}
                  precision={0.5}
                />
              </div>
              <div className={classes.title}>
                {e.name}
              </div>
              <div className={classes.author}>
                by {e.author} &#8226; {e.type}
              </div>
              <div className={classes.footer}>
                Rp. {(e.price).toLocaleString()}
                <button onClick={() => addCart(e)} className={classes.buttonAdd}>ADD +</button>
              </div>
            </div>
          </div>
        ))
      }
    </Container>
  )
}

const mapState = state => ({
  items: state.items.data
})
const mapDispatch = dispatch => ({
  addCart: payload => dispatch({ type: 'SET_CART', data: payload })
})

export default connect(mapState, mapDispatch)(Items)