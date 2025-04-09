import React, { useState } from 'react';
import '../styles/login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "ram" && password === "12345") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid login details");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="https://ik.imagekit.io/uko16m2rv/StockCake-Joyful%20Shopping%20Experience_1743318480.jpg" alt="Shopping Illustration" />
      </div>

      <div className="login-right">
        <h2>Welcome Back Please Log In To Your Account.</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="ram"
          />
          
          {/* Password Field with Toggle */}
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="12345"
            />
            <label className="switch">
              <input type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
              <span className="slider round"></span>
            </label>
          </div>

          <div className="login-options">
            
            <span>Remember Password</span>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">Login</button>
          {error && <div className="error-message">{error}</div>}
        </form>

        <button className="create-account-btn">Create Account</button>
      </div>
    </div>
  );
};

export default Login;
