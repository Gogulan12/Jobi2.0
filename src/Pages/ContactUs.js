import React, { useState } from "react";
import "./ContactUs.css";
import Footer from "../Components/Footer";

import address from "../Assets/Contact/address.svg";
import mail from "../Assets/Contact/mail.svg";
import chat from "../Assets/Contact/chat.svg";

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
            <h2>Get in touch</h2>
            <p>
              Thank you for using Jobi, your go-to job search website. If you
              have any questions, suggestions, or concerns, please feel free to
              contact us using the information below.
            </p>

            {/* <div className="contact-details">
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
            </div> */}
          </div>
        </div>

        <div className="address-containers">
          <div>
            <img src={address} alt="" />
            <h5>Our Address</h5>
            <p>
              555 Richmond St W #711, <br />
              Toronto, ON M5V 3B1
            </p>
          </div>
          <div>
            <img src={mail} alt="" />
            <h5>Contact Info</h5>
            <p>Open a chat or give us call at</p>
            <p>310.841.5500</p>
          </div>
          <div>
            <img src={chat} alt="" />
            <h5>Live support</h5>
            <p>live chat service</p>
            <p>www.jobilivechat.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="nameandemail">
              <label className="form-label nameandemailinner">
                Name*
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Rashed Kabir"
                />
              </label>

              <label className="form-label nameandemailinner">
                Email*
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="kabirr277@gmail.com"
                />
              </label>
            </div>

            <label className="form-label">
              Subject (optional)
              <input
                type="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="Write about the subject here.."
              />
            </label>

            <label className="form-label">
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="8"
                required
                className="form-input"
                placeholder="Your Message"
              />
            </label>

            <button type="submit" className="submit-button">
              send message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
