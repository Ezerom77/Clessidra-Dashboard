import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";
import ProdXCat from "./pages/ProdXCat";
import ProductList from "./pages/ProductList";

import "./App.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/ProdXCat" element={<ProdXCat/>} />
            <Route path="/productList" element={<ProductList/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
