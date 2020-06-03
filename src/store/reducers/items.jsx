const initState = {
  loading: false, 
  data: [
    {
      id: 1,
      date: '2019-03-13',
      name: 'Roasted Chicken with Scrambled Egg',
      author: 'Kulina',
      type: 'Uptown Lunch',
      price: 35000,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80'
    }, {
      id: 2,
      date: '2019-03-13',
      name: 'Roasted Chicken with Scrambled Egg',
      author: 'Kulina',
      type: 'Uptown Lunch',
      price: 35000,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
    }, {
      id: 3,
      date: '2019-03-13',
      name: 'Roasted Chicken with Scrambled Egg',
      author: 'Kulina',
      type: 'Uptown Lunch',
      price: 35000,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80'
    }, {
      id: 4,
      date: '2019-03-13',
      name: 'Roasted Chicken with Scrambled Egg',
      author: 'Kulina',
      type: 'Uptown Lunch',
      price: 35000,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80'
    }, {
      id: 5,
      date: '2019-03-13',
      name: 'Roasted Chicken with Scrambled Egg',
      author: 'Kulina',
      type: 'Uptown Lunch',
      price: 35000,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
    }, {
      id: 6,
      date: '2019-03-13',
      name: 'Roasted Chicken with Scrambled Egg',
      author: 'Kulina',
      type: 'Uptown Lunch',
      price: 35000,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1568158958563-c13c713d69f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1533&q=80'
    }
  ]
}

const items = (state = initState, action) => {
  switch(action.type){
    case 'ITEMS_LOADED':
      return {
        loading: false,
        data: action.data,
      }
    default:
      return state
  }
};

export default items;