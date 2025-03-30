import React from 'react';
import Cards from './Cards';
import data from '../data';

const Amazon = ({ handleClick, selectedFlavours, selectedDiscounts, selectedChips }) => {
  const filteredItems = data.filter((item) =>
    
    (selectedDiscounts.length === 0 || selectedDiscounts.includes(item.discount)) &&
    (selectedFlavours.length === 0 || selectedFlavours.includes(item.flavour)) &&
    (selectedChips.length === 0 || selectedChips.includes(item.flavour))
  );

  return (
    <section>
      {filteredItems.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
