import React from "react";

import "./AboutUs.css";
import Footer from "../Components/Footer";

export default function AboutUs() {
  return (
    <div>
      <div className="about-page">
        <div className="AboutHeader">
          <div className="AboutHeadercontent">
            <h2>About jobi</h2>
            <p>
              Jobi is not just a job search website; it's a comprehensive
              platform dedicated to transforming the job hunting experience.
              Founded in 3 years, our mission is to empower individuals by
              connecting them with meaningful employment opportunities.
            </p>
          </div>
        </div>

        <div className="aboutContent">
          <p>
            <strong>Our Vision:</strong> To create a world where every person
            can find a job that aligns with their passions, skills, and career
            aspirations.
          </p>

          <p>
            <strong>Values:</strong> At Jobi, we are committed to integrity,
            innovation, and inclusivity. We believe in fostering a diverse and
            collaborative environment that encourages personal and professional
            growth.
          </p>

          <p>
            <strong>The Jobi Experience:</strong> We understand that job
            searching can be a challenging process. That's why Jobi is designed
            to be user-friendly, with advanced search capabilities, personalized
            job recommendations, and real-time updates. Our commitment to a
            seamless user experience sets us apart.
          </p>

          <p>
            <strong>Meet the Team:</strong> Behind Jobi is a passionate team of
            professionals who bring diverse expertise to the table. From
            software developers to career counselors, we work together to make
            Jobi a trusted resource for job seekers and employers alike.
          </p>

          <p>
            Join Jobi today and embark on a journey towards a fulfilling and
            rewarding career. Whether you're exploring entry-level positions or
            executive roles, Jobi is here to support you in achieving your
            professional goals.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
