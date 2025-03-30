import React, { useState, useEffect } from 'react';
import BillingAddress from './BillingAddress';
import '../styles/cart.css';

const Cart = ({ cart, setCart, handleChange, setShowBillingForm }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    const totalPrice = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
    setPrice(totalPrice);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    setShowBillingForm(true);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <article>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
            <div>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
      {cart.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
      )}
      
    </article>
  );
};

export default Cart;
