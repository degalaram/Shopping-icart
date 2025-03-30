// Navbar.js
import React, { useState } from 'react';
import '../styles/navbar.css';
import list from '../data'; 

const Navbar = ({ size, setShow, handleLogout }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = list.filter(item =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    handleLogout();
  };

  return (
    <nav>
      <div className="nav-container">
        <span className="my-shop" onClick={() => setShow(true)}>
          My Shopping
        </span>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for chocolates..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {searchTerm && filteredList.length > 0 && (
            <div className="search-results">
              <ul>
                {filteredList.map(item => (
                  <li key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div>
                      <h4 className="highlight">{item.title}</h4>
                      <p>{item.author}</p>
                      <p>Rs{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="nav-icons">
          {isSignedIn ? (
            <div className="icon" onClick={handleSignOut}>
              <i className="fas fa-sign-out-alt"></i>
              <span>Sign Out</span>
            </div>
          ) : (
            <div className="icon" onClick={handleSignIn}>
              <i className="fas fa-sign-in-alt"></i>
              <span>Sign In</span>
            </div>
          )}
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i className="fas fa-cart-plus"></i>
              <span className="cart-count">{size}</span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
