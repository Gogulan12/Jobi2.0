import { useFetch } from "../../hooks/useFetch";

import React, { useState } from "react";

import downarrow from "../../Assets/dropdownArrow.svg";

// import filter from "../../Assets/filterGrid.svg";

import { useHistory, useLocation } from "react-router-dom";

// styles

import "./Search.css";

// components
import JobList from "../../Components/JobList";
import Footer from "../../Components/Footer";

export default function Search() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/jobsData");

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

  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/jobsData?q=" + query;
  const { data, isPending, error } = useFetch(url);
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
                    <option value="#">IT</option>
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
      <div>
        <h2>Jobs including "{query}"</h2>
        <div className="searchedJobs">
          {error && <p className="error">{error}</p>}
          {isPending && <p className="loading">Loading...</p>}
          {data && <JobList jobs={data} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
