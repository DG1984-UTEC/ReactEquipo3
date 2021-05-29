import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import store from './store'
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';
import Root from './root/Root'
import {ToastProvider} from 'react-toast-notifications'
/*<React.StrictMode> se saca scrict mode ya que libreria de toast tiene un warning, falta averiguar causa*/

ReactDOM.render(
  
    <ToastProvider>
      <Provider store={store}>
      
          <Root/>
        
      </Provider>  
    </ToastProvider> 
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
