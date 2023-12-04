import React from "react";
import "./JobDetail.css";

import Footer from "../Components/Footer";

import td from "../Assets/tdLogo.svg";

export default function JobDetail() {
  return (
    <div>
      <div className="jobDetailContainer">
        <div className="JobDetailHeader">
          <h2>Job Details</h2>
          <h4>Here will be your company job details & requirements</h4>
        </div>
      </div>

      <div className="contentContainer">
        <div className="detailLeft">
          <p>18 Jul 2022 by Adobe</p>
          <h3>Senior Product & Brand Design</h3>
          <div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Copy</p>
          </div>
          <h5>Overview</h5>
          <p>
            When team members told us they needed more flexibility around where
            and how they worked, we acted, creating two options to accommodate
            two different styles of work. One non-negotiable principle along the
            way? We had to retain our deep culture of collaboration, both among
            ourselves and with our clients. Introducing Work From Near and Work
            From Anywhere at WillowTree. Learn more here. Please indicate which
            location(s) you're interested.
          </p>
          <h5>Job Description</h5>
          <p>
            As a Product Designer at WillowTree, you’ll give form to ideas by
            being the voice and owner of product decisions. You’ll drive the
            design direction, and then make it happen!
          </p>
          <p>
            We understand our responsibility to create a diverse, equitable, and
            inclusive place within the tech industry, while pushing to make our
            industry more representative.
          </p>
          <h5>Responsibilities</h5>
          <ul>
            <li>
              <p>
                Collaborate daily with a multidisciplinary team of Software
                Engineers, Researchers, Strategists, and Project Managers.
              </p>
            </li>
            <li>
              <p>
                Co-lead ideation sessions, workshops, demos, and presentations
                with clients on-site
              </p>
            </li>
            <li>
              <p>Push for and create inclusive, accessible design for all</p>
            </li>
            <li>
              <p>
                Maintain quality of the design process and ensure that when
                designs are translated into code they accurately reflect the
                design specifications.
              </p>
            </li>
            <li>
              <p>
                Sketch, wireframe, build IA, motion design, and run usability
                tests
              </p>
            </li>
            <li>
              <p>
                Design pixel perfect responsive UI’s and understand that
                adopting common interface pattern is better for UX than
                reinventing the wheel
              </p>
            </li>
            <li>
              <p>Ensure content strategy and design are perfectly in-sync</p>
            </li>
            <li>
              <p>
                Give and receive design critique to help constantly refine and
                push our work
              </p>
            </li>
          </ul>
          <h5>Required SKills:</h5>
          <ul>
            <li>
              <p>You’ve been designing digital products for 2+ years.</p>
            </li>
            <li>
              <p>
                A portfolio that exemplifies strong visual design and a focus on
                defining the user experience.
              </p>
            </li>
            <li>
              <p>You’ve proudly shipped and launched several products.</p>
            </li>
            <li>
              <p>
                You have some past experience working in an agile environment –
                Think two-week sprints.
              </p>
            </li>
            <li>
              <p>
                Experience effectively presenting and communicating your design
                decisions to clients and team members
              </p>
            </li>
            <li>
              <p>
                Up-to-date knowledge of design software like Figma, Sketch etc.
              </p>
            </li>
          </ul>
          <h5>Benefits:</h5>
          <ul>
            <li>
              <p>We are a remote-first company.</p>
            </li>
            <li>
              <p>
                100% company-paid health insurance premiums for you & your
                dependents
              </p>
            </li>
            <li>
              <p>Vacation stipend</p>
            </li>
            <li>
              <p>Unlimited paid vacation and paid company holidays</p>
            </li>
            <li>
              <p>Monthly wellness/gym stipend</p>
            </li>
          </ul>
        </div>
        <div className="detailRight">
          <div className="detailRightContainer">
            <div className="detailRightInfo">
              <div className="outerContainerforDetailImage">
                <div className="containerforDetailImage">
                  <img src={td} alt="" />
                </div>
              </div>
              <h5>Toronto-Dominion Bank</h5>
              <a href="/" className="VisitButtonLink">
                <p>Visit Website</p>
              </a>
              <hr />
              <div className="rightMainInfo">
                <div>
                  <h6>Salary</h6>
                  <p>50-60k/year</p>
                  <h6>Location</h6>
                  <p>Spain,Barcelona</p>
                  <h6>Date</h6>
                  <p>12 jun, 2022</p>
                </div>
                <div>
                  <h6>Expertise</h6>
                  <p>Intermediate</p>
                  <h6>Job Type</h6>
                  <p>Fulltime</p>
                  <h6>Experience</h6>
                  <p>2 Years</p>
                </div>
              </div>
              <a href="/" className="applyButtonForJobPost">
                <p>Apply Now</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
