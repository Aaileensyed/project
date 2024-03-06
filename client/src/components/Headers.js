import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

const Headers = () => {
  const { carts } = useSelector((state) => state.allCart);
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'SaddleBrown' }}>
        <div className="container">
          <NavLink to="/" className="navbar-brand text-light">
            <h3 className="text-light">Food Hub</h3>
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto align-items-center">
              
              {isAuthenticated ? (
                <li>
                <li className="nav-item">
                <NavLink to="/cart" className="nav-link text-light">
                  <div id="ex4">
                    <span className="p1 fa-stack fa-2x has-badge" data-count={carts.length}>
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                  </div>
                </NavLink>
              </li>

                <li className="logoutbutton">
                  <span className="text-white">{user.name}</span> <button className="btn" style={{ fontSize: '16px', fontWeight: 'bold', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#bb6528', color: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                </li>
                </li>
              ) : (
                <li className="loginbutton">
                  <button className="btn" style={{ fontSize: '16px', fontWeight: 'bold', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#bb6528', color: 'white', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }} onClick={() => loginWithRedirect()}>Log In</button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Headers;
