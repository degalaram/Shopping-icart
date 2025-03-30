import React, { useState, useEffect } from 'react';
import "../styles/billing.css";
import OrderSummary from '../Components/OrderSummary';

const BillingAddress = ({ setShowBillingForm, cart }) => {
  const [details, setDetails] = useState({
    Firstname: '',
    Lastname: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState({
    items: 0,
    itemPrice: 0,
    promotionalSavings: 0,
    shipping: 0.00,
    deliveryCharges: 0.00,
    tax: 0.00,
    total: 0.00
  });

  useEffect(() => {
    const itemPrice = cart.reduce((acc, item) => acc + (item.price * item.amount), 0);
    const items = cart.reduce((acc, item) => acc + item.amount, 0);
    const promotionalSavings = itemPrice * 0.2; 
    const shipping = calculateShipping(details);
    const deliveryCharges = calculateDeliveryCharges(details);
    const tax = calculateTax(itemPrice, promotionalSavings, shipping, deliveryCharges);
    const total = calculateTotal(itemPrice, promotionalSavings, shipping, deliveryCharges, tax);

    setOrderSummary({
      items,
      itemPrice,
      promotionalSavings,
      shipping,
      deliveryCharges,
      tax,
      total
    });
  }, [cart, details]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const calculateShipping = (details) => {
    return details.country === 'INDIA' ? 5.00 : 15.00;
  };

  const calculateDeliveryCharges = (details) => {
    return details.country === 'INDIA' ? 2.00 : 10.00;
  };

  const calculateTax = (itemPrice, promotionalSavings, shipping, deliveryCharges) => {
    const subtotalAfterDiscounts = itemPrice - promotionalSavings;
    const totalBeforeTax = subtotalAfterDiscounts + shipping + deliveryCharges;
    return totalBeforeTax * 0.05;
  };

  const calculateTotal = (itemPrice, promotionalSavings, shipping, deliveryCharges, tax) => {
    return (itemPrice - promotionalSavings) + shipping + deliveryCharges + tax;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOrderSummary(true);
    setShowConfirmModal(true);
  };

  const handleConfirmOrder = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
  };

  const handleCancelOrder = () => {
    setShowConfirmModal(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setShowBillingForm(false); 
  };

  return (
    <div className="billing-address">
      {!showOrderSummary ? (
        <>
          <h2>Billing Address</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="Firstname" placeholder="First Name" value={details.Firstname} onChange={handleChange} required />
            <input type="text" name="Lastname" placeholder="Last Name" value={details.Lastname} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={details.email} onChange={handleChange} required />
            <input type="text" name="address" placeholder="Address" value={details.address} onChange={handleChange} required />
            <input type="text" name="city" placeholder="City" value={details.city} onChange={handleChange} required />
            <input type="text" name="state" placeholder="State" value={details.state} onChange={handleChange} required />
            <input type="text" name="zip" placeholder="ZIP Code" value={details.zip} onChange={handleChange} required />
            <input type="text" name="country" placeholder="Country" value={details.country} onChange={handleChange} required />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <OrderSummary orderSummary={orderSummary} />
          {showConfirmModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Order Summary</h2>
                <OrderSummary orderSummary={orderSummary} />
                <p>Do you want to place the order?</p>
                <button onClick={handleConfirmOrder}>Place the Order</button>
                <button onClick={handleCancelOrder}>Cancel</button>
              </div>
            </div>
          )}

          {showSuccessModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Order Placed Successfully</h2>
                <button onClick={handleCloseSuccessModal}>Close</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BillingAddress;