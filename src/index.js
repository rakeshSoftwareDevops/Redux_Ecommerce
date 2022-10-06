import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import prodStore from './redux/Product-store';
import {Provider} from 'react-redux'; // Provider is needed to connect with our app to redux
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={prodStore}>
      <App />
    </Provider>
  </React.StrictMode>
);

