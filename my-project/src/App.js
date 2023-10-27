import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Header";
import Home from "./Components/Home";
import { About } from "./Components/About";
import { Pricing } from "./Components/Pricing";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
