import React from "react";
import "./JobList.css";
import { Link } from "react-router-dom";

import filter from "../Assets/filterGrid.svg";
import TDLogo from "../Assets/tdLogo.svg";
import bookmark from "../Assets/Bookmark.svg";

export default function JobList({ jobs }) {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };

  if (jobs.length === 0) {
    return <div className="error">No Jobs to Load...</div>;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job.id} className="IndividJob">
          <img src={job.image} alt="" className="companyImage" />
          <h3 className="jobTitle">{job.title}</h3>
          <div className="contractType">
            <p className="job-Type">{job.contractType}</p>
            <div>
              <strong className="salary">
                ${job.salary.min}-{job.salary.max}/year
              </strong>{" "}
              . <span className="skill-level">{job.expertiseLevel}</span>
            </div>
          </div>
          <div className="jobLocation">
            <p className="location">
              {job.location.city}, {job.location.country}
            </p>
            <p className="skills">
              {job.keywords[3]}, {job.keywords[4]},{job.keywords[5]}
            </p>
          </div>
          <div className="ApplyandBookmark">
            <img src={bookmark} alt="" />
            <Link
              to={`/jobData/${job.id}`}
              onClick={handleClick}
              className="apply"
            >
              Apply
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
