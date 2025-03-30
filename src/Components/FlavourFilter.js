// src/Components/FlavourFilter.js
import React from 'react';
import '../styles/flavourFilter.css';

const FlavourFilter = ({ selectedFlavours, handleFlavourChange }) => {
  return (
    <div className="flavour-filter">
      <h2>Flavour</h2>
      <label>
        <input
          type="checkbox"
          value="Almond"
          checked={selectedFlavours.includes('Almond')}
          onChange={handleFlavourChange}
        />
        Almond
      </label>
      <label>
        <input
          type="checkbox"
          value="Chocolate"
          checked={selectedFlavours.includes('Chocolate')}
          onChange={handleFlavourChange}
        />
        Chocolate
      </label>
      <label>
        <input
          type="checkbox"
          value="Butterscotch"
          checked={selectedFlavours.includes('Butterscotch')}
          onChange={handleFlavourChange}
        />
        Butterscotch
      </label>
      <label>
        <input
          type="checkbox"
          value="Cashew"
          checked={selectedFlavours.includes('Cashew')}
          onChange={handleFlavourChange}
        />
        Cashew
      </label>
    </div>
  );
};

export default FlavourFilter;
