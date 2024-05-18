import React from "react";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import Footers from "./components/Footers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
import CheckOutPage from "./pages/CheckOutPage";
=======
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/*" element={<NotFound />} />
<<<<<<< HEAD
        <Route path="/CheckOutPage" element={<CheckOutPage/>}/>
      </Routes>
      <Footers />
    </BrowserRouter>
  )
=======
      </Routes>
      <Footers />
    </BrowserRouter>
  );
>>>>>>> 3fe3898711fcbec4c1b856119796b61aa5457a82
}

export default App;
