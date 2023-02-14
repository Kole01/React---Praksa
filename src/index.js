import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import LoginForm from './Login';
import Clock from "./time";
import UpdateDelete from './components.js/userUpdateDelete';
import reportWebVitals from './reportWebVitals';
import AddCustomer from './components.js/userRegister';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Clock />
    <AddCustomer />
    <LoginForm />
    <UpdateDelete/>
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
