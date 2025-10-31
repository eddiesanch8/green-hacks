import React, { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setMessage("Please fill out both fields.");
      setIsError(true);
      return;
    }

    try {
      const res = await fetch("https://green-hacks-production.up.railway.app/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("Login successful! Welcome back!");
        setIsError(false);
        localStorage.setItem("access_token", result.access_token);
        localStorage.setItem("first_name", result.first_name);
        localStorage.setItem("userID", result.userID);

        setTimeout(() => (window.location.href = "/search"), 2000);
      } else {
        setMessage(result.error || "Invalid credentials");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Try again later.");
      setIsError(true);
    }
  };

  return (
    <main className="main">
      <h1 className="main__title">Welcome Back!</h1>

      <div className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            className="login__input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            className="login__input"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            required
          />

          <button className="login__button" type="submit">
            Log In
          </button>
        </form>

        {message && (
          <p className={`login__message ${isError ? "showerror" : "show"}`}>
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
