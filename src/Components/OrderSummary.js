import React from 'react';

const OrderSummary = ({ orderSummary }) => {
  return (
    <div className="order-summary">
    
      <p>Items: {orderSummary.items}</p>
      <p>Item Price: Rs{orderSummary.itemPrice.toFixed(2)}</p>
      <p>Promotional Savings: -Rs{orderSummary.promotionalSavings.toFixed(2)}</p>
      <p>Shipping: Rs{orderSummary.shipping.toFixed(2)}</p>
      <p>Delivery Charges: Rs{orderSummary.deliveryCharges.toFixed(2)}</p>
      <p>Tax: Rs{orderSummary.tax.toFixed(2)}</p>
      <p>Total: Rs{orderSummary.total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;