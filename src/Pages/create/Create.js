// import { useState } from "react";
import React from "react";

// styles
import "./Create.css";

// Icons
import jobdetailicon from "../../Assets/Create/jobdetailsicon.svg";
import paymenticon from "../../Assets/Create/PaymentInfoicon.svg";
import confirmationicon from "../../Assets/Create/confirmationicon.svg";

// project1 imports

import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
import Footer from "../../Components/Footer";

// import { projectFirestore } from "../../firebase/config";

export default function Create() {
  // ////////////////////////////////////////
  // Lists States
  const [employer, setEmployer] = useState("");
  const [title, setTitle] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const [maxSalary, setMaxSalary] = useState("");
  const [overview, setOverview] = useState("");
  const [description, setDesciption] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [responsibilities, setResponsibilities] = useState([]);
  const [requiredSkill, setRequredSkill] = useState("");
  const [requiredSkills, setRequiredSkills] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [benefit, setBenefit] = useState("");
  const [benefits, setBenefits] = useState([]);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  ////////////////////////////////////////////////
  // Lists of useRefs
  const responsInput = useRef(null);
  const requiredInput = useRef(null);
  const keywordInput = useRef(null);
  const benefitInput = useRef(null);
  ////////////////////////////////////////////////
  const history = useHistory();

  // const { postData, data, error } = useFetch(
  const { postData, data } = useFetch("http://localhost:3000/jobsData", "POST");

  let today = new Date().toISOString().slice(0, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   employer,
    //   title,
    //   minSalary,
    //   maxSalary,
    //   overview,
    //   description,
    //   responsibility,
    //   requiredSkill,
    //   keyword,
    //   benefit,
    //   city,
    //   country,
    //   responsibilities,
    //   requiredSkills,
    //   keywords,
    //   benefits
    // );
    // const doc = {
    //   employer,
    //   salary: [{ min: minSalary, max: maxSalary }],
    //   overview,
    //   responsibilities,
    //   keywords,
    //   requiredSkills,
    //   date: today,
    //   title,
    //   image:
    //     "https://t3.ftcdn.net/jpg/05/27/49/44/360_F_527494416_7PWpMBqkWQarxhOgD1vIDzhDxizP1cQd.jpg",
    //   contractType: "Fulltime",
    //   description,
    //   benefits,
    //   location: [{ city: city, country: country }],
    // };
    // try {
    //   await projectFirestore.collection("jobsData").add(doc);
    //   history.push("/listing");
    // } catch (err) {
    //   console.log(err);
    // }
    postData({
      employer,
      salary: { min: minSalary, max: maxSalary },
      overview,
      responsibilities,
      keywords,
      requiredSkills,
      date: today,
      title,
      image:
        "https://t3.ftcdn.net/jpg/05/27/49/44/360_F_527494416_7PWpMBqkWQarxhOgD1vIDzhDxizP1cQd.jpg",
      contractType: "Fulltime",
      description,
      benefits,
      location: { city: city, country: country },
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const respons = responsibility.trim();

    if (respons && !responsibilities.includes(respons)) {
      setResponsibilities((prevResponsibilities) => [
        ...prevResponsibilities,
        respons,
      ]);
    }
    setResponsibility("");
    responsInput.current.focus();
  };

  const handleAdd2 = (e) => {
    e.preventDefault();
    const skill = requiredSkill.trim();

    if (skill && !requiredSkills.includes(skill)) {
      setRequiredSkills((prevRequriedSkills) => [...prevRequriedSkills, skill]);
    }
    setRequredSkill("");
    requiredInput.current.focus();
  };

  const handleAdd3 = (e) => {
    e.preventDefault();
    const keyw = keyword.trim();

    if (keyw && !keywords.includes(keyw)) {
      setKeywords((prevKeywords) => [...prevKeywords, keyw]);
    }
    setKeyword("");
    keywordInput.current.focus();
  };

  const handleAdd4 = (e) => {
    e.preventDefault();
    const ben = benefit.trim();

    if (ben && !benefits.includes(ben)) {
      setBenefits((prevBenefits) => [...prevBenefits, ben]);
    }
    setBenefit("");
    benefitInput.current.focus();
  };

  // redirect the user when we get data response
  useEffect(() => {
    if (data) {
      history.push("/jobboard");
    }
  }, [data, history]);

  // ////////////////////////////////////////

  return (
    <div>
      <div className="CreatPostHeaderContainer">
        <div className="CreatPostHeader">
          <h2>Post Job</h2>
          <p>Create an account & Start posting or hiring talents</p>
        </div>
      </div>
      <div className="jobposticonOuterContainer">
        <div className="jobposticonInnerContainer">
          <div className="progressbar"></div>
          <div className="createIcons">
            <img src={jobdetailicon} alt="" />
            <p>Job Details</p>
          </div>
          <div className="createIcons">
            <img src={paymenticon} alt="" />
            <p>Payment Info</p>
          </div>
          <div className="createIcons">
            <img src={confirmationicon} alt="" />
            <p>Confirmation</p>
          </div>
        </div>
      </div>

      <div className="jobinfoOuter">
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <h3>Job Details</h3>
            <div className="jobdetailpostcontainer">
              <label className="postlabelsTitles">
                <span>Company Title*</span>
                <input
                  type="text"
                  onChange={(e) => setEmployer(e.target.value)}
                  value={employer}
                  required
                  placeholder="Ex: Mircosoft Corporation"
                />
              </label>

              <label className="postlabelsTitles">
                <span>Job Title*</span>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  required
                  placeholder="Ex: Product Designer"
                />
              </label>
            </div>

            <label className="overviewlabel">
              <span>Overview*</span>
              <input
                type="text"
                onChange={(e) => setOverview(e.target.value)}
                value={overview}
                required
                placeholder="Write a brief overview about the company..."
              />
            </label>

            <label className="postjobdescriplabel">
              <span>Description*</span>
              <textarea
                onChange={(e) => setDesciption(e.target.value)}
                value={description}
                required
                placeholder="Write about the job in details..."
              ></textarea>
            </label>
            <p className="salarytitle">Salary (Annual)*</p>
            <div className="salarypostContainer">
              <label className="postlabels">
                <span>Min Salary:</span>
                <input
                  type="number"
                  onChange={(e) => setMinSalary(e.target.value)}
                  value={minSalary}
                  required
                  min="1000"
                  placeholder="Min"
                />
              </label>

              <label className="postlabels">
                <span>Max Salary:</span>
                <input
                  type="number"
                  onChange={(e) => setMaxSalary(e.target.value)}
                  value={maxSalary}
                  required
                  min="1000"
                  placeholder="Max"
                />
              </label>
            </div>

            <h3>Skills & Experience</h3>
            <label className="listsforjobpostlabel">
              <span>List of Responsibilities*</span>
              <div className="responsibilities">
                <input
                  type="text"
                  onChange={(e) => setResponsibility(e.target.value)}
                  value={responsibility}
                  ref={responsInput}
                  placeholder="Ex: Maintain and improve existing code..."
                />
                <button onClick={handleAdd} className="btn">
                  Add
                </button>
              </div>
            </label>
            <p>
              Current Responsibilities:
              {responsibilities.map((i) => (
                <em key={i}>{i}, </em>
              ))}
            </p>

            <label className="listsforjobpostlabel">
              <span>List of Required Skills*</span>
              <div className="postskills">
                <input
                  type="text"
                  onChange={(e) => setRequredSkill(e.target.value)}
                  value={requiredSkill}
                  ref={requiredInput}
                  placeholder="Ex: Experience with Git and version control..."
                />
                <button onClick={handleAdd2} className="btn">
                  Add
                </button>
              </div>
            </label>
            <p>
              Current Skills:
              {requiredSkills.map((i) => (
                <em key={i}>{i}, </em>
              ))}
            </p>

            <label className="listsforjobpostlabel">
              <span>List of Keywords*</span>
              <div className="postkeywords">
                <input
                  type="text"
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                  ref={keywordInput}
                  placeholder="Ex: version control..."
                />
                <button onClick={handleAdd3} className="btn">
                  Add
                </button>
              </div>
            </label>
            <p>
              Current Keywords:
              {keywords.map((i) => (
                <em key={i}>{i}, </em>
              ))}
            </p>

            <label className="listsforjobpostlabel">
              <span>List of Benefits*</span>
              <div className="postBenefits">
                <input
                  type="text"
                  onChange={(e) => setBenefit(e.target.value)}
                  value={benefit}
                  ref={benefitInput}
                  placeholder="Ex: Friendly and supportive work environment..."
                />
                <button onClick={handleAdd4} className="btn">
                  Add
                </button>
              </div>
            </label>
            <p>
              Current Benefits:
              {benefits.map((i) => (
                <em key={i}>{i}, </em>
              ))}
            </p>

            <h3>Address & Location</h3>
            <div className="postaddresscontainer">
              <label className="postlabels">
                <span>Country*</span>
                <input
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                  value={country}
                  required
                  placeholder="Ex: Canada"
                />
              </label>
              <label className="postlabels">
                <span>City*</span>
                <input
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  required
                  placeholder="Ex: Toronto"
                />
              </label>
            </div>
            <button className="btn postSubmit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
