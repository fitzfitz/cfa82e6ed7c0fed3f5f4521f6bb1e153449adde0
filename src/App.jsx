import React from 'react';
import './App.scss';
import Header from './component/layout/Header';
import LocationSearch from './component/layout/LocationSearch';
import Cart from './component/layout/Cart';
import Calendar from './component/layout/Calendar';
import Items from './component/layout/Items';
import Buttons from './component/layout/Buttons';

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      <Items />
      <Cart />
      <LocationSearch />
    </div>
  );
}

export default App;
