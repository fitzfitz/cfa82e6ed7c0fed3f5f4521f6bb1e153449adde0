const initState = { 
  loading: false,
  data: [
    {id: 1, name: 'Tokopedia Tower', address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta'},
    {id: 2, name: 'Kulina', address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta'},
    {id: 3, name: 'Pancoran Riverside Apartment', address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta'},
    {id: 4, name: 'Jalan Tulodong Atas 28', address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta'},
    {id: 5, name: 'Block71 Jakarta', address: 'Jalan Tulodong Atas 28, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta'},
  ]
}

const locations = (state = initState, action) => {
  switch(action.type){
    case 'SET_LOCATION_DATA':
      return {
        loading: false,
        data: action.data,
      }
    default:
      return state
  }
};

export default locations;