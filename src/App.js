import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";
import Login from "./pages/Login";
import ProductContext from "./Components/ProductContext";
import { useState } from "react";

function App() {
  const [viewproduct, setViewproduct] = useState([]);

  return (
    <>
      <BrowserRouter>
        <ProductContext.Provider value={viewproduct}>
          <Routes>
            <Route
              path="/home"
              element={<Home setViewproduct={setViewproduct} />}
            />
            <Route path="/product-view" element={<ViewProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" replace />} />
          </Routes>
        </ProductContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
