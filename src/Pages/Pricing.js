import React from "react";

import "./Pricing.css";
import Footer from "../Components/Footer";
export default function Pricing() {
  return (
    <div>
      <div className="pricingHeaderContainer">
        <div className="pricingHeader">
          <h2>Pricing Plans</h2>
          <h4>Choose the Right Plan for Your Hiring Needs</h4>
          <p>
            Find the perfect plan for your company and start hiring the best
            talent today.
          </p>
        </div>
      </div>

      <div className="pricing-container">
        <div className="pricing-column">
          <h2>Free</h2>
          <p className="description">
            Basic features for individuals starting their job search. Access to
            job listings, email notifications, and essential tools like resume
            building.
          </p>
          <p className="price">
            <strong>$0</strong> / month
          </p>
          <button className="get-started-button">Get Started</button>
          <ul>
            <li>Access to basic job listings</li>
            <li>Email notifications for new job postings</li>
            <li>Limited customer support</li>
            <li>Resume building tools</li>
            <li>Basic job application tracking</li>
          </ul>
        </div>

        <div className="pricing-column pricing-column-two">
          <div className="popularLabel">
            <span>🌟</span> most popular
          </div>
          <h2>Pro</h2>
          <p className="description">
            Enhanced features for a more advanced job search experience. Access
            to premium job listings, advanced application tracking, and priority
            support.
          </p>
          <p className="price">
            <strong>$19.99</strong> / month
          </p>
          <button className="get-started-button">Get Started</button>
          <ul>
            <li>Access to premium job listings</li>
            <li>Email and SMS notifications for new job postings</li>
            <li>Resume review and optimization tools</li>
            <li>Advanced job application tracking</li>
            <li>Priority customer support</li>
            <li>Featured profile for increased visibility</li>
            <li>Exclusive webinars and career resources</li>
          </ul>
        </div>

        <div className="pricing-column">
          <h2>Enterprise</h2>
          <p className="description">
            Tailored for businesses looking to elevate their recruitment
            process. Access to all job listings, premium support, and advanced
            analytics and reporting.
          </p>
          <p className="price">
            <strong>Let's talk</strong>
          </p>
          <button className="get-started-button">Contact Us</button>
          <ul>
            <li>
              Access to all job listings, including exclusive partnerships
            </li>
            <li>Premium customer support with dedicated account manager</li>
            <li>Advanced analytics and reporting</li>
            <li>Custom branding and integration options</li>
            <li>Unlimited job postings</li>
            <li>Customized onboarding and training</li>
            <li>Enterprise-grade security features</li>
            <li>Integration with HR systems</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
