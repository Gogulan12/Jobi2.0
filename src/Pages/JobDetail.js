import React, { useEffect, useState } from "react";
import "./JobDetail.css";
import { useParams } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";
import { projectFirestore } from "../firebase/config";

import Footer from "../Components/Footer";

// import td from "../Assets/tdLogo.svg";

export default function JobDetail() {
  const { id } = useParams();
  // const url = "http://localhost:3000/jobsData/" + id;

  // const { error, isPending, data: job } = useFetch(url);

  const [job, setJob] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("jobsData")
      .doc(id)
      .get()
      .then((doc) => {
        // console.log(doc);
        if (doc.exists) {
          setIsPending(false);
          setJob(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that job post");
        }
      });
  }, [id]);

  return (
    <div>
      <div className="jobDetailContainer">
        <div className="JobDetailHeader">
          <h2>Job Details</h2>
          <h4>Here will be your company job details & requirements</h4>
        </div>
      </div>

      <div className="contentContainer">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {job && (
          <>
            <div className="detailLeft">
              <p>
                {job.date} by {job.employer}
              </p>
              <h3>{job.title}</h3>
              <div>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Copy</p>
              </div>
              <h5>Overview</h5>
              <p>{job.overview}</p>
              <h5>Job Description</h5>
              <p>{job.description}</p>
              <h5>Responsibilities</h5>

              <ul>
                {job.responsibilities.map((res) => (
                  <li key={res}>
                    <p>{res}</p>
                  </li>
                ))}
              </ul>
              <h5>Required SKills:</h5>
              <ul>
                {job.requiredSkills.map((reqskill) => (
                  <li key={reqskill}>
                    <p>{reqskill}</p>
                  </li>
                ))}
              </ul>
              <h5>Benefits:</h5>
              <ul>
                {job.benefits.map((ben) => (
                  <li key={ben}>
                    <p>{ben}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="detailRight">
              <div className="detailRightContainer">
                <div className="detailRightInfo">
                  <div className="outerContainerforDetailImage">
                    <div className="containerforDetailImage">
                      <img src={job.image} alt="" />
                    </div>
                  </div>
                  <h5>{job.employer}</h5>
                  <a href="/error" className="VisitButtonLink">
                    <p>Visit Website</p>
                  </a>
                  <hr />
                  <div className="rightMainInfo">
                    <div>
                      <h6>Salary</h6>
                      <p>
                        {job.salary.min}-{job.salary.max}/year
                      </p>
                      <h6>Location</h6>
                      <p>
                        {job.location.city},{job.location.country}
                      </p>
                      <h6>Date</h6>
                      <p>{job.date}</p>
                    </div>
                    <div>
                      <h6>Expertise</h6>
                      <p>{job.expertiseLevel}</p>
                      <h6>Job Type</h6>
                      <p>{job.contractType}</p>
                      <h6>Experience</h6>
                      <p>{job.experienceYears} Years</p>
                    </div>
                  </div>
                  <a href="/register" className="applyButtonForJobPost">
                    <p>Apply Now</p>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
