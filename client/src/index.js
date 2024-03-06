import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-dx0uw2agdge8whds.us.auth0.com"
    clientId="WvrLoKIR9bBlG63UXgEZVSIrpddZdMTm"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  </Auth0Provider>,
);

