import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'
import allReducers from "./reducers"
import {createStore} from "redux"
import {Provider} from "react-redux"

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >

    
        <Auth0Provider
          domain="dev-h14-cvnr.us.auth0.com"
          clientId="7UDcnZrjRq67CACULOy03RKGrvAEEsaL"
          redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
