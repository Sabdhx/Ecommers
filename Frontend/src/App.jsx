import React from "react";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import CheckOutPage from "./pages/CheckOutPage";
import LoginPage from "./pages/LoginPage";
import axios from  'axios'

axios.defaults.withCredentials=true;


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct/>} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/CheckOutPage" element={<CheckOutPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
      </Routes>
      <Footers />
    </BrowserRouter>
  )
}

export default App;
