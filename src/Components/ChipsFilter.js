import React from 'react';
import '../styles/chipsFilter.css';

const ChipsFilter = ({ selectedChips, handleChipsChange }) => {
  return (
    <div className="chips-filter">
      <h2>Chips</h2>
      <label>
        <input
          type="checkbox"
          value="Lays"
          checked={selectedChips.includes('Lays')}
          onChange={handleChipsChange}
        />
        Lays
      </label>
      <label>
        <input
          type="checkbox"
          value="Kurkure"
          checked={selectedChips.includes('Kurkure')}
          onChange={handleChipsChange}
        />
        Kurkure
      </label>
      <label>
        <input
          type="checkbox"
          value="Haldiram"
          checked={selectedChips.includes('Haldiram')}
          onChange={handleChipsChange}
        />
        Haldiram
      </label>
    </div>
  );
};

export default ChipsFilter;
