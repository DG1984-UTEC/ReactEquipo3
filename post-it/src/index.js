import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import reportWebVitals from './reportWebVitals';
import ListPostIt from './list_post_it/ListPostIt'
import TrashCan from './trash_can/TrashCan'

ReactDOM.render(
  <React.StrictMode>
    <div className="trashCanContainer">
      <TrashCan/>
    </div>
    <div className="postItContainer">
      <ListPostIt/>
    </div>
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
