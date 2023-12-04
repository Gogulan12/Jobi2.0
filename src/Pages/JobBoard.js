import React, { useState } from "react";

import "./JobBoard.css";

import downarrow from "../Assets/dropdownArrow.svg";

import filter from "../Assets/filterGrid.svg";
import TDLogo from "../Assets/tdLogo.svg";
import bookmark from "../Assets/Bookmark.svg";

import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer";

export default function JobBoard() {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

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
        <ul>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
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
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="IndividJob">
              <img src={TDLogo} alt="" className="companyImage" />
              <h3 className="jobTitle">Developer & expert in java c++</h3>
              <div className="contractType">
                <p>Fulltime</p>
                <p>30-50/hour . Intermediate</p>
              </div>
              <div className="jobLocation">
                <p>Spain, Bercelona</p>
                <p>Developer,Coder,Design</p>
              </div>
              <div className="ApplyandBookmark">
                <img src={bookmark} alt="" />
                <a href="/" className="apply">
                  Apply
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
