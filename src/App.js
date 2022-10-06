import './App.css';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom';
import Allproducts from './components/Allproducts';
import Footer from './components/Footer';
import PageNOTFound from './components/PageNOTFound';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import React, { useState, useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import { useSelector } from "react-redux";
import UncontrolledExample from './components/carouselImage';
function App() {
  const authenticationFlag = useSelector((state) => state.productReducer.authenticatedFlag);
  return (
    <div className="App">
      {authenticationFlag && <NavbarComponent/>}
      <Router>
          <Routes>
                  <Route exact path="/" element={<Login/>} />
                  <Route exact path="/products" element={<Allproducts/>} />
                  <Route exact path="/new" element={<UncontrolledExample/>} />
                  <Route exact path="/products/:productId" element={<ProductDetail/>} />
                  <Route path="*" element={<PageNOTFound/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
