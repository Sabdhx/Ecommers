import React from "react";
import MainSection from "./MainSection";
import Navbar from "./assets/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StuffDetails from "./StuffDetails";
import Footer from "./Footer";
import Error404 from "./assets/Error";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<MainSection/>}/>
      <Route path="/StuffDetails/:id" element={<StuffDetails/>}/>
      <Route path="/*" element={<Error404/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
  );
}

export default App;
