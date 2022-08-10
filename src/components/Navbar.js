import React from 'react';
import './style/Navbar.scss';
const Navbar = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="navbar">
          <div className="title">
            <h2>Bet App</h2>
          </div>
          <div className="amount">
            <div className="amount-wallet">
              <input type="text" value='$100' readOnly />
              <button className='withdraw'>Withdraw</button>
            </div>
          </div>
          <div className="user-container">
            <div className="user">
              <img src="allu-vai.jpg" alt="" />
            </div>
            <h4>Allu Arjun</h4>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;