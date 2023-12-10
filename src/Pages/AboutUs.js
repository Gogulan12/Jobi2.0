// import React from "react";

import React, { useState } from "react";
import "./AboutUs.css";
import Footer from "../Components/Footer";

import videobutton from "../Assets/VideoButton.svg";

// ///////////Why Choose us /////////
import chooseleft from "../Assets/AboutUs/Left.svg";
import checkmark from "../Assets/AboutUs/checkmark.svg";

// //////////how it works

import howitworksbanner from "../Assets/HowItWorksImgs/howitworks.svg";
import create from "../Assets/HowItWorksImgs/CreateIcon.svg";
import profile from "../Assets/HowItWorksImgs/ProfileIcon.svg";
import apply from "../Assets/HowItWorksImgs/ApplyIcon.svg";
import howitworksarrow from "../Assets/HowItWorksImgs/HowitWorksArrow.svg";

// ///////// leading startups

import prev from "../Assets/AboutUs/Pre.svg";
import next from "../Assets/AboutUs/Next.svg";
import monday from "../Assets/AboutUs/monday.svg";
import shipbob from "../Assets/AboutUs/shipbob.svg";
import stars from "../Assets/AboutUs/Star.svg";
import stars2 from "../Assets/AboutUs/Star2.svg";

// logos
import logo1 from "../Assets/AboutUs/Logo1.svg";
import logo2 from "../Assets/AboutUs/Logo2.svg";
import logo3 from "../Assets/AboutUs/Logo3.svg";
import logo4 from "../Assets/AboutUs/Logo4.svg";
import logo5 from "../Assets/AboutUs/Logo5.svg";
import logo6 from "../Assets/AboutUs/Logo6.svg";

export default function AboutUs() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  const playVideo = () => {
    setVideoPlaying(true);
  };

  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const renderAccordionHeader = (index, title) => (
    <div
      className={`accordion-header ${activeSection === index ? "active" : ""}`}
      onClick={() => toggleSection(index)}
    >
      <p>{title}</p>{" "}
      <p className="plusminus">{activeSection === index ? " -" : " +"}</p>
    </div>
  );
  return (
    <div>
      <div className="about-page">
        <div className="AboutHeader">
          <div className="AboutHeadercontent">
            <h2>About Us</h2>
            <p>Home &nbsp; &gt; &nbsp; About</p>
          </div>
        </div>

        <div className="AboutInfoSection">
          <div className="AboutInfoSectionLeft">
            <h2>
              We've been <br /> helping customer <br />
              globally.
            </h2>
          </div>
          <div className="AboutInfoSectionRight">
            <div className="accordionContainer">
              <div className="accordion-section">
                {renderAccordionHeader(0, "Who we are?")}
                {activeSection === 0 && (
                  <div className="accordion-content">
                    Jobi is not just a job search website; it's a comprehensive
                    platform dedicated to transforming the job hunting
                    experience. Founded in 3 years, our mission is to empower
                    individuals by connecting them with meaningful employment
                    opportunities.
                  </div>
                )}
              </div>

              <div className="accordion-section">
                {renderAccordionHeader(1, "What are our goals?")}
                {activeSection === 1 && (
                  <div className="accordion-content">
                    We understand that job searching can be a challenging
                    process. That's why Jobi is designed to be user-friendly,
                    with advanced search capabilities, personalized job
                    recommendations, and real-time updates. Our commitment to a
                    seamless user experience sets us apart.
                  </div>
                )}
              </div>

              <div className="accordion-section">
                {renderAccordionHeader(2, "Our vision")}
                {activeSection === 2 && (
                  <div className="accordion-content">
                    To create a world where every person can find a job that
                    aligns with their passions, skills, and career aspirations.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="video-container">
          {!isVideoPlaying && (
            <div className="video-cover" onClick={playVideo}>
              <img src={videobutton} alt="" />
            </div>
          )}
          <iframe
            width="1200px"
            height="712.6px"
            src={`https://www.youtube.com/embed/JF0IukoW8to${
              isVideoPlaying ? "?autoplay=1" : ""
            }`}
            title="5 Indeed Job Search Tips"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ display: isVideoPlaying ? "block" : "none" }}
          ></iframe>
        </div>

        <div className="statsContainer">
          <div className="jobiStats">
            <div className="jobistat">
              <h3>7million</h3>
              <p>Completed Jobs</p>
            </div>
            <div className="jobistat">
              <h3>30k+</h3>
              <p>Worldwide Client</p>
            </div>
            <div className="jobistat">
              <h3>13billion</h3>
              <p>Dollar Payout</p>
            </div>
          </div>
        </div>

        <div className="postAJobContainer">
          <div className="postAJobLeft">
            <img src={chooseleft} alt="" />
          </div>
          <div className="postAJobRight">
            <p className="postjobtopnote">why choose us</p>
            <h3>
              Get over 50,000+ <br /> talented experts <br />
              in jobi.
            </h3>
            <p className="postAJobRightPara">
              A full hybrid workforce management tools are yours to use, as well
              as access to our top 1% of talent.{" "}
            </p>
            <ul>
              <li>
                <img src={checkmark} alt="" />
                <p>Seamless searching</p>
              </li>
              <li>
                <img src={checkmark} alt="" />
                <p>Get top 3% experts for your project</p>
              </li>
              <li>
                <img src={checkmark} alt="" />
                <p>Protected payments system</p>
              </li>
            </ul>
            <button className="postJobbutton">Post a Job</button>
          </div>
        </div>

        <div className="HowitworksSection">
          <div className="HowitworksTitle">
            <h2>How it works?</h2>
            <img src={howitworksbanner} alt="" />
          </div>
          <div className="Howitworkssteps">
            <div>
              <img src={create} alt="" />
              <h3>Create Account</h3>
              <p>It's very easy to open an account and start your journey.</p>
            </div>
            <div>
              <img src={howitworksarrow} alt="" className="howitworksarrow" />
            </div>
            <div>
              <img src={profile} alt="" />
              <h3>Complete your profile</h3>
              <p>
                Complete your profile with all the info to get attention of
                client.
              </p>
            </div>
            <div>
              <img src={howitworksarrow} alt="" className="howitworksarrow" />
            </div>
            <div>
              <img src={apply} alt="" />
              <h3>Apply job or hire</h3>
              <p>
                Apply & get your perferable jobs with all the requirements and
                get it.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="aboutContent">
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
        </div> */}

        <div className="LeadingStartups">
          <div className="LeadingHeaderSection">
            <div className="leadHeader">
              <h3>
                Trusted by Leading <br />
                starups.
              </h3>
            </div>
            <div className="leadButtons">
              <img src={prev} alt="" />
              <img src={next} alt="" />
            </div>
          </div>

          <div className="leadingstatupcaroselContainer">
            <div className="startup">
              <img src={monday} alt="" />
              <div className="startupText">
                <h3>
                  “Seattle opera simplifies Performance planning with deski
                  eSignature.”
                </h3>
                <p>Rashed kabir, Lead Designer</p>
              </div>

              <div className="ratingContainer">
                <p>4.5 Excellent</p>
                <img src={stars} alt="" />
              </div>
            </div>
            <div className="startup startup2">
              <img src={shipbob} alt="" />
              <div className="startupText">
                <h3>
                  “How DocuSign CLM helps Celonis scale its global business.”
                </h3>
                <p>Mark Joge, Marketing Chief</p>
              </div>

              <div className="ratingContainer">
                <p>4.8 Awesome</p>
                <img src={stars2} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="companyLogos">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
