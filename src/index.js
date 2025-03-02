import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './header/header'
import Main from './main/main';
import Footer from "./footer/footer"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
);


