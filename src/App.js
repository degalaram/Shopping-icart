import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Amazon from './Components/Amazon';
import Cart from './Components/Cart';
import BillingAddress from './Components/BillingAddress';
import Login from './Components/Login';
import FlavourFilter from './Components/FlavourFilter';
import DiscountFilter from './Components/DiscountFilter';
import ChipsFilter from './Components/ChipsFilter';
import './styles/amazon.css';
import './styles/login.css';
import './styles/flavourFilter.css';
import './styles/discountFilter.css';
import './styles/chipsFilter.css';
import './styles/warning.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState('');
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [selectedFlavours, setSelectedFlavours] = useState([]);

  const [selectedChips, setSelectedChips] = useState([]);

  const handleClick = (item) => {
    const isPresent = cart.some(product => item.id === product.id);
    if (isPresent) {
      setWarning(`"${item.title}" is already in your cart`);
      console.log(warning); 
      setTimeout(() => setWarning(''), 3000);
      return;
    }
    setCart([...cart, { ...item, amount: 1 }]);
  };

  const handleChange = (item, delta) => {
    const updatedCart = cart
      .map(cartItem => {
        if (cartItem.id === item.id) {
          const updatedAmount = cartItem.amount + delta;
          return updatedAmount > 0 ? { ...cartItem, amount: updatedAmount } : null;
        }
        return cartItem;
      })
      .filter(Boolean);
    setCart(updatedCart);
  };

  const handleDiscountChange = (event) => {
    const { value, checked } = event.target;
    setSelectedDiscounts(
      checked ? [...selectedDiscounts, value] : selectedDiscounts.filter(discount => discount !== value)
    );
  };

  const handleFlavourChange = (event) => {
    const { value, checked } = event.target;
    setSelectedFlavours(
      checked ? [...selectedFlavours, value] : selectedFlavours.filter(flavour => flavour !== value)
    );
  };

  const handleChipsChange = (event) => {
    const { value, checked } = event.target;
    setSelectedChips(
      checked ? [...selectedChips, value] : selectedChips.filter(chip => chip !== value)
    );
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <>
      <Navbar
        size={cart.reduce((total, item) => total + item.amount, 0)}
        setShow={setShow}
        handleLogout={handleLogout}
      />
      <div className="filters">
       
        <DiscountFilter
          selectedDiscounts={selectedDiscounts}
          handleDiscountChange={handleDiscountChange}
        />
        <FlavourFilter
          selectedFlavours={selectedFlavours}
          handleFlavourChange={handleFlavourChange}
        />
        <ChipsFilter
          selectedChips={selectedChips}
          handleChipsChange={handleChipsChange}
        />
      </div>
      {show ? (
        <Amazon
          handleClick={handleClick}
          selectedFlavours={selectedFlavours}
          selectedDiscounts={selectedDiscounts}
          selectedChips={selectedChips}
        />
      ) : (
        <Cart
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
          setShowBillingForm={setShowBillingForm}
        />
      )}
      {warning && <div className="warning">{warning}</div>}
      {showBillingForm && (
        <BillingAddress setShowBillingForm={setShowBillingForm} cart={cart} />
      )}
    </>
  );
};

export default App;
