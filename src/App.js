import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Users from "./pages/Users";

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
