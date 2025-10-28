import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import new pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Hello } from "./app"; // keep your demo component if you want

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
