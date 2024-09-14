import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";  // Ensure this is correct
import ProductDetail from  "./pages/ProductsDetails"
import Footer from "./components/Footer"


import Header from "./components/Header";
import "./index.css";  // Your existing CSS files
// import '../src'


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


