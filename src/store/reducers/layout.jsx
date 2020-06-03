const initState = { 
  modalLocation: false,
  deliveryLocation: {
    id: 1,
    name: 'Tokopedia Tower',
    address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta'
  }
}

const layout = (state = initState, action) => {
  switch(action.type){
    case 'OPEN_MODAL_LOCATION':
      return {
        ...state,
        modalLocation: !state.modalLocation,
      }
    case 'SET_LOCATION':
      return {
        ...state,
        deliveryLocation: action.data
      }
    default:
      return state
  }
};

export default layout;