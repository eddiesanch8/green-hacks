import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import new pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Hello } from "./app"; // keep your demo component if you want

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Example routes */}
        <Route path="/" element={<Hello />} /> {/* Temporary home page */}
        <Route path="/login" element={<Login />} /> {/* Login page */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
