import React, { useState } from "react";
import "./ContactUs.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    // You can also make an API request to send the form data to your server
  };

  return (
    <div>
      <div className="contact-page">
        <div className="outer-contact-container">
          <div className="contact-container">
            <h2>Contact jobi</h2>
            <p>
              Thank you for using Jobi, your go-to job search website. If you
              have any questions, suggestions, or concerns, please feel free to
              contact us using the information below.
            </p>

            <div className="contact-details">
              <div className="contact-info">
                <h3>General Inquiries</h3>
                <p>Email: info@jobi.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>

              <div className="contact-info">
                <h3>Technical Support</h3>
                <p>Email: support@jobi.com</p>
                <p>Phone: (987) 654-3210</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send us a Message</h3>
          {/* Your contact form code goes here */}
          {/* You can use controlled components for form handling */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-label">
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>

            <label className="form-label">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </label>

            <label className="form-label">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="form-input"
              />
            </label>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
