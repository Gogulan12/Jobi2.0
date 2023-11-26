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
      <div className="pricingContainer">
        <div className="pricing-plans">
          <div className="plan">
            <h2>Standard Monthly Plan</h2>
            <p className="price">$19.99/month</p>
            <ul>
              <li>Access to basic features</li>
              <li>10 job postings per month</li>
              <li>Email support</li>
            </ul>
            <button className="select-button">Select Plan</button>
          </div>

          <div className="plan premium-plan">
            <h2>Maximum Exposure Annual Plan</h2>
            <p className="price">$199.99/year</p>
            <ul>
              <li>Access to premium features</li>
              <li>Unlimited job postings</li>
              <li>Premium support</li>
              <li>Featured listings</li>
            </ul>
            <button className="select-button">Select Plan</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
