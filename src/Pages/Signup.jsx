import React, { useState } from "react";
import "./Signup.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    remark: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for signing up!");
    setFormData({ name: "", email: "", remark: "" });
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label>Remark:</label>
        <textarea
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          placeholder="Your remarks"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;