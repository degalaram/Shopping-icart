import React from 'react';
import '../styles/discountFilter.css';

const DiscountFilter = ({ selectedDiscounts, handleDiscountChange }) => {
  return (
    <div className="discount-filter">
      <h2>Discount</h2>
      <label>
        <input
          type="checkbox"
          value="10% Off"
          checked={selectedDiscounts.includes('10% Off')}
          onChange={handleDiscountChange}
        />
        10% Off
      </label>
      <label>
        <input
          type="checkbox"
          
          value="15% Off"
          checked={selectedDiscounts.includes('15% Off')}
          onChange={handleDiscountChange}
        />
        15% Off
      </label>
      <label>
        <input
          type="checkbox"
          value="20% Off"
          checked={selectedDiscounts.includes('20% Off')}
          onChange={handleDiscountChange}
        />
        20% Off
      </label>
      <label>
        <input
          type="checkbox"
          value="25% Off"
          checked={selectedDiscounts.includes('25% Off')}
          onChange={handleDiscountChange}
        />
        25% Off
      </label>
      <label>
        <input
          type="checkbox"
          value="30% Off"
          checked={selectedDiscounts.includes('30% Off')}
          onChange={handleDiscountChange}
        />
        30% Off
      </label>
    </div>
  );
};

export default DiscountFilter;
