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

import { Home, Login, SignUp, CartPage, ProductsPage, NotFound } from "./pages"

ReactDOM.render(

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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
