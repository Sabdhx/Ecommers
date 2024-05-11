import React from "react";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footers />
    </BrowserRouter>
  );
}

export default App;
