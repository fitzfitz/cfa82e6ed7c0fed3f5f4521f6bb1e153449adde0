const initState = { 
  data: []
}

const cart = (state = initState, action) => {
  switch(action.type){
    case 'SET_CART':
      return {
        data: [...state.data, action.data],
      }
    case 'REMOVE_CART':
      return {
        data: state.data.filter(x => x.id !== action.data.id),
      }
    default:
      return state
  }
};

export default cart;