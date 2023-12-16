// import { useFetch } from "../../hooks/useFetch";

import React, { useState, useEffect } from "react";
import { projectFirestore } from "../../firebase/config";

import downarrow from "../../Assets/dropdownArrow.svg";

// import filter from "../../Assets/filterGrid.svg";

import { useHistory, useLocation } from "react-router-dom";
import search from "../../Assets/SearchIcon.svg";

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

  // const url = "http://localhost:3000/jobsData?q=" + query;
  // const { data, isPending, error } = useFetch(url);

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("jobsData")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("There are no such job post");
          setIsPending(false);
        } else {
          let searchResults = [];
          snapshot.docs.forEach((doc) => {
            if (doc.data().title.toLowerCase().includes(query.toLowerCase())) {
              searchResults.push({ id: doc.id, ...doc.data() });
            }
          });
          setData(searchResults);
          setIsPending(false);
        }
      });
    return () => unsub();
  }, [query]);

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
          <div className="linkContainer">
            <a href="/create" className="linktoPost">
              Click Here to Post a Job
            </a>
          </div>
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
              <div className="dropdownandsearchFilters">
                <label>
                  <p>Keyword or Title:</p>
                  <div className="search-container">
                    <input type="text" placeholder="Search by Keywords" />
                    <img src={search} alt="" className="search-icon" />
                  </div>
                </label>

                <label>
                  <p>Categories:</p>
                  <select placeholder="Development">
                    {/* Add your category options here */}
                    <option value="Developement">Development</option>
                  </select>
                </label>

                <label>
                  <p>Location:</p>
                  <select placeholder="Washington DC">
                    <option disabled="" selected="" hidden>
                      Select Option
                    </option>
                    <option value="Beginner">Miami, Florida</option>
                    <option value="Intermediate">Dallas, Texas</option>
                    <option value="Advanced">Denver, Colorado</option>
                    <option value="Proficient">Boston, Massachusetts</option>
                    <option value="Proficient">Tucson, Arizona</option>
                  </select>
                </label>

                <label>
                  <p>English Fluency:</p>
                  <select>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Proficient">Proficient</option>
                  </select>
                </label>
              </div>

              <div className="selectorfilters">
                <div className="selectorfiltersinnerContainer">
                  <label className="jobType">
                    <p>Job Type:</p>
                    <div className="jobTypeoption">
                      <label>
                        <input type="checkbox" /> Fulltime
                      </label>
                      <label>
                        <input type="checkbox" /> Hourly-Contract
                      </label>
                      <label>
                        <input type="checkbox" /> Part-time (20hr/week)
                      </label>
                      <label>
                        <input type="checkbox" /> Fixed-Price
                      </label>
                      {/* Add more job types as needed */}
                    </div>
                  </label>

                  <label className="ExpLevel">
                    <p>Experience Level:</p>
                    <div className="ExpLeveloption">
                      <label>
                        <input type="checkbox" /> Beginner (1-3yrs)
                      </label>
                      <label>
                        <input type="checkbox" /> Intermediate (3-5yrs)
                      </label>
                      <label>
                        <input type="checkbox" /> Expert (5-10yrs)
                      </label>
                      {/* Add more experience levels as needed */}
                    </div>
                  </label>

                  <label className="salaryrangecontainer">
                    <p>Salary Range:</p>
                    <div className="Salaryinputscontainer">
                      <div className="salaryminmaxcontainer">
                        <input type="number" placeholder="min" />
                        <p> - </p>
                        <input type="number" placeholder="max" />
                        <p>USD</p>
                      </div>
                      <input
                        className="slider"
                        type="range"
                        min="0"
                        max="100"
                      />
                    </div>
                  </label>
                </div>
              </div>
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
