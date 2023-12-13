import { useFetch } from "../hooks/useFetch";

import React, { useState } from "react";

import "./JobBoard.css";

import downarrow from "../Assets/dropdownArrow.svg";

import filter from "../Assets/filterGrid.svg";

import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer";
import JobList from "../Components/JobList";

export default function JobBoard() {
  const { data, isPending, error } = useFetch("http://localhost:3000/jobsData");

  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  // const [isActive, setIsActive] = useState(false);

  // const handleClick = (event) => {
  //   setIsActive((current) => !current);
  // };

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div>
      <div className="JobBoardContainer">
        <div>
          <h2>Job Listing</h2>
          <p>We delivered blazing fast & striking work solution</p>
        </div>
        <div className="JobBoardForm">
          <form onSubmit={handleSubmit}>
            <div className="fullSearchBar">
              <div className="fullInput">
                <label htmlFor="title">What are you looking for? </label>
                <input
                  type="text"
                  placeholder="UI Designer"
                  id="search"
                  onChange={(e) => setTerm(e.target.value)}
                  required
                />
              </div>
              <div className="fullInputCategory">
                <div className="fullInputCategoryContainer">
                  <label htmlFor="category">Category</label>
                  <select name="category" id="category">
                    <option value="#">Web Design</option>
                  </select>
                </div>
              </div>
              <button>SEARCH</button>
            </div>
          </form>
        </div>
      </div>
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={toggleFilter}
          style={{
            borderRadius: isFilterOpen ? "20px 20px 0 0" : "20px",
          }}
        >
          <p>Filter By</p>
          <img src={downarrow} alt="" />
        </button>

        {isFilterOpen && (
          <div className="filter-content">
            <div className="filter-content-info">
              <label>
                Keyword or Title:
                <input type="text" />
              </label>

              <label>
                Categories:
                <select>{/* Add your category options here */}</select>
              </label>

              <label>
                Location:
                <select>{/* Add your location options here */}</select>
              </label>

              <label>
                English Fluency:
                <select>{/* Add your English fluency options here */}</select>
              </label>

              <label>
                Job Type:
                <div>
                  <label>
                    <input type="checkbox" /> Full Time
                  </label>
                  <label>
                    <input type="checkbox" /> Part Time
                  </label>
                  {/* Add more job types as needed */}
                </div>
              </label>

              <label>
                Experience Level:
                <div>
                  <label>
                    <input type="checkbox" /> Entry Level
                  </label>
                  <label>
                    <input type="checkbox" /> Mid Level
                  </label>
                  {/* Add more experience levels as needed */}
                </div>
              </label>

              <label>
                Salary:
                <input type="range" min="0" max="100000" />
                <input type="text" placeholder="Enter Salary" />
              </label>
            </div>
          </div>
        )}
      </div>

      <div className="filterJobView">
        <p>
          All <strong>7096</strong> jobs found
        </p>
        <div className="filterOption">
          <label for="displayfilter">Select:</label>

          <select
            name="displayfilter"
            id="displayfilter"
            className="displayfilter"
          >
            <option value="Latest">Latest</option>
            <option value="Oldest">Oldest</option>
            <option value="Relevant">Relevant</option>
          </select>
          <img src={filter} alt="" />
        </div>
      </div>

      <div className="jobPostings">
        <div>
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}
          {data && <JobList jobs={data} />}
        </div>

        {/* <ul>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p className="job-Type">Fulltime</p>
                <div>
                  <strong className="salary">$30-50/hour</strong> .{" "}
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">Spain, Bercelona</p>
                <p className="skills">Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Frontend Developer</h3>
              <div className="contractType">
                <p className="job-Type">Fulltime</p>
                <div>
                  <strong className="salary">$40-60k/year</strong> .{" "}
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">San Francisco, CA</p>
                <p className="skills">React, JavaScript, CSS</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Data Scientist</h3>
              <div className="contractType">
                <p className="job-Type">Part-time</p>
                <div>
                  <strong className="salary">$50-80/hour</strong> .{" "}
                  <span className="skill-level">Expert</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">New York, NY</p>
                <p className="skills">
                  Python, Machine Learning, Data Analysis
                </p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">UX/UI Designer</h3>
              <div className="contractType">
                <p className="job-Type">Contract</p>
                <div>
                  <strong className="salary">$35-50/hour</strong> .{" "}
                  <span className="skill-level">Advanced</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">London, UK</p>
                <p className="skills">UI/UX Design, Sketch, Figma</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Backend Developer</h3>
              <div className="contractType">
                <p className="job-Type">Fulltime</p>
                <div>
                  <strong className="salary">$60-80k/year</strong> .{" "}
                  <span className="skill-level">Expert</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">Berlin, Germany</p>
                <p className="skills">Node.js, MongoDB, REST API</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Marketing Specialist</h3>
              <div className="contractType">
                <p className="job-Type">Freelance</p>
                <div>
                  <strong className="salary">$25-40/hour</strong> .{" "}
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">Paris, France</p>
                <p className="skills">Digital Marketing, Social Media, SEO</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Product Manager</h3>
              <div className="contractType">
                <p className="job-Type">Fulltime</p>
                <div>
                  <strong className="salary">$80-100k/year</strong> .{" "}
                  <span className="skill-level">Expert</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">New Delhi, India</p>
                <p className="skills">Product Management, Agile, Scrum</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Network Engineer</h3>
              <div className="contractType">
                <p className="job-Type">Contract</p>
                <div>
                  <strong className="salary">$50-70/hour</strong> .{" "}
                  <span className="skill-level">Advanced</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">Tokyo, Japan</p>
                <p className="skills">Cisco, Routing, Switching</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Content Writer</h3>
              <div className="contractType">
                <p className="job-Type">Part-time</p>
                <div>
                  <strong className="salary">$20-30/hour</strong> .{" "}
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">Sydney, Australia</p>
                <p className="skills">Content Writing, SEO, Blogging</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Graphic Designer</h3>
              <div className="contractType">
                <p className="job-Type">Freelance</p>
                <div>
                  <strong className="salary">$30-50/hour</strong> .{" "}
                  <span className="skill-level">Intermediate</span>
                </div>
              </div>
              <div className="jobLocation">
                <p className="location">Toronto, Canada</p>
                <p className="skills">
                  Adobe Creative Suite, Illustration, Typography
                </p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/jobboard/jobdetail" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
        </ul> */}
      </div>
      <Footer />
    </div>
  );
}
