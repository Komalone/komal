import React, { Fragment, useState } from 'react';
import {} from 'react-router-dom';
import MedForm from './Component/MedForm';
import AvailableMedList from './Component/AvailableMedList';
import Header from './Component/Header';
import Cart from './Component/Cart/Cart';

function App() {
  const [showCart, setShowCart]=useState(false);
  
  const openCart=()=>{
    setShowCart(true);
  }
  const closeCart=()=>{
    setShowCart(false);
  }
  return (
    <Fragment>
      {showCart && <Cart onClose={closeCart}/>}
      <Header onShowCart={openCart}/>
      <main>
      <MedForm />
      <AvailableMedList/>
      </main>
    </Fragment>
  );
}

export default App;
