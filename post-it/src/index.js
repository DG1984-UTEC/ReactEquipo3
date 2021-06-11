import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import store from './store'
import reportWebVitals from './reportWebVitals';
import Root from './root/Root'
import {ToastProvider} from 'react-toast-notifications'


ReactDOM.render(
  <ToastProvider placement='bottom-center'>
    <React.StrictMode>
      <Provider store={store}>
        <Root/>
      </Provider>  
    </React.StrictMode>
  </ToastProvider>
, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
