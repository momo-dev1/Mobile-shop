import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/index"
import { Provider } from "react-redux"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="mobiles" element={<ProductsPage />}>
              {/* <Route path=":mobileId" element={<SingleProduct />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
