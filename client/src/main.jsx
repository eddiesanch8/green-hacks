import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchForm } from "./pages/SearchForm";
import NoLogNav from "./components/NoLogNav";
import SignUpNav from "./components/SignUpNav";
import LoginNav from "./components/LoginNav";
import LoggedInNav from "./components/LoggedInNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Saved from "./pages/Saved";
import Results from "./pages/Results";
import Footer from "./components/Footer";
import "materialize-css/dist/css/materialize.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoLogNav />} />
        <Route path="signup" element={<SignUpNav />} />
        <Route path="login" element={<LoginNav />} />
        <Route path="*" element={<LoggedInNav />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favorites" element={<Saved />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
