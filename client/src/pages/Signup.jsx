import React, { useState } from "react";
import "../styles/Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { first_name, last_name, email, password, confirm_password } =
      formData;

    // ---- Frontend validation ----
    if (!first_name || !last_name || !email || !password || !confirm_password) {
      setMessage("Please fill in all fields.");
      setIsError(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    const passwordPattern = /^.{8,}$/;
    if (!passwordPattern.test(password)) {
      setMessage(
        "Password must be at least 8 characters with uppercase, lowercase, number & special character."
      );
      setIsError(true);
      return;
    }

    if (password !== confirm_password) {
      setMessage("Passwords do not match.");
      setIsError(true);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setMessage("Signup successful! Redirecting...");
        setIsError(false);
        setTimeout(() => (window.location.href = "/"), 2000);
      } else {
        setMessage(result.error || "Signup failed.");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage("Server error. Try again later.");
      setIsError(true);
    }
  };

  return (
    <main className="main-container">
      <h1 className="main__header">Create Your Account</h1>
      <div className="signup-container">
        <form id="signupForm" onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={handleChange}
            value={formData.first_name}
          />

          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={handleChange}
            value={formData.last_name}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
          />

          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={handleChange}
            value={formData.confirm_password}
          />

          <button type="submit">Sign Up</button>
        </form>

        {message && (
          <p className={`signup-message ${isError ? "showerror" : "show"}`}>
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
