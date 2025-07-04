import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from './Component/Context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <AppProvider>
    <App/>
  </AppProvider>
);

reportWebVitals();
