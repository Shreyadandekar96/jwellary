import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have questions or want to place a custom order? Reach out to us and we’ll get back to you as soon as possible.
      </p>

      <div className="contact-content">
        {/* Contact Details */}
        <div className="contact-details">
          <h2 className="our">Our Contact</h2>
          <p><strong>Phone:</strong> +91 1234567890</p>
          <p><strong>Email:</strong> info@ratnashree.com</p>
          <p><strong>Address:</strong> Mumbai, Maharashtra, India</p>
        </div>

       
      </div>
    </div>
  );
};

export default Contact;