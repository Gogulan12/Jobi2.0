import React, { useState, useRef } from "react";
import "./Home.css";
import headerimage from "../Assets/jobsearchhome.jpg";
import categoryDesign from "../Assets/categoriesdesignShape.svg";

// category images
import ui from "../Assets/Categorylogos/ui.svg";
import dev from "../Assets/Categorylogos/dev.svg";
import market from "../Assets/Categorylogos/market.svg";
import phone from "../Assets/Categorylogos/phone.svg";
import edit from "../Assets/Categorylogos/edit.svg";
import account from "../Assets/Categorylogos/accounting.svg";

// ///////// Center

import personOne from "../Assets/CenterImages/search-person-one.jpg";
import personTwo from "../Assets/CenterImages/search-person-two.jpg";
import personThree from "../Assets/CenterImages/search-person-three.jpg";
import personFour from "../Assets/CenterImages/search-person-four.jpg";

// //////////how it works

import howitworksbanner from "../Assets/HowItWorksImgs/howitworks.svg";
import create from "../Assets/HowItWorksImgs/CreateIcon.svg";
import profile from "../Assets/HowItWorksImgs/ProfileIcon.svg";
import apply from "../Assets/HowItWorksImgs/ApplyIcon.svg";
import howitworksarrow from "../Assets/HowItWorksImgs/HowitWorksArrow.svg";
import Footer from "../Components/Footer";

// ///////////Collab //////////////
import circles from "../Assets/HomeAssets/jobicircle.svg";
import Collabarrow from "../Assets/HomeAssets/Arrow.svg";

// ////////////Job Guides///////////

import DesignGuide from "../Assets/HomeAssets/Design-Designer.jpg";
import SolutionGuide from "../Assets/HomeAssets/Solution-productive.jpg";
import PrintGuide from "../Assets/HomeAssets/print-Developer.jpg";

// ////////// Resume ////////////
import download from "../Assets/HomeAssets/Download.svg";
import sideimage from "../Assets/HomeAssets/resumeImage.jpg";

export default function Home() {
  const [isActive1, setActive1] = useState("false");
  const [isActive2, setActive2] = useState("false");
  const [isActive3, setActive3] = useState("false");

  let panel = useRef(null);

  const ToggleClass = () => {
    setActive1(!isActive1);
  };

  const ToggleClass2 = () => {
    setActive2(!isActive2);
  };
  const ToggleClass3 = () => {
    setActive3(!isActive3);
  };

  return (
    <div>
      <div className="heroSectionHomecontainer">
        <header className="heroSectionHome">
          <div className="leftHeaderHome">
            <div className="titleContainer">
              <h2 className="title1">Find & Hire</h2>
              <h2 className="title2">Top 3% of experts</h2>
              <h2 className="title3">on jobi.</h2>
            </div>
            <p>
              With the largest professional creative community online, <br />
              simply search through from our website
            </p>
            <form action="" className="HomeSearch">
              <input type="text" placeholder="Seach job, title etc..." />
              <button>Search</button>
            </form>
            <h4>
              <strong>Popular:</strong> Design, Art, Business, Video Editing
            </h4>
          </div>
          <div className="rightHeaderHome">
            <div className="imageContainer">
              <img src={headerimage} alt="person using laptop" />
            </div>
          </div>
        </header>
      </div>
      <div className="categories">
        <div className="categoriesHeader">
          <div className="categoryTitle">
            <h2>
              Most Demanding <br />
              Categories.
            </h2>
            <div className="catImageContainer">
              <img src={categoryDesign} alt="" />
            </div>
          </div>
          <div className="categoryDescription">
            <p>
              Together with userful notifications, collaborationinsights, <br />
              and improvement tip lorem etc.
            </p>
            <p>
              <a href="/">Explore all fields &gt;</a>
            </p>
          </div>
        </div>
        <div className="exploreList">
          <ul>
            <li className="exploreListOne">
              <img src={ui} alt="" />
              <h4>UI/UX Design</h4>
              <p>12k+ Jobs</p>
            </li>
            <li>
              <img src={dev} alt="" />
              <h4>Development</h4>
              <p>8k+ Jobs</p>
            </li>
            <li>
              <img src={market} alt="" />
              <h4>Marketing</h4>
              <p>12k+ Jobs</p>
            </li>
            <li>
              <img src={phone} alt="" />
              <h4>Telemarketing</h4>
              <p>3k+ Jobs</p>
            </li>
            <li>
              <img src={edit} alt="" />
              <h4>Editing</h4>
              <p>12k+ Jobs</p>
            </li>
            <li>
              <img src={account} alt="" />
              <h4>Accounting</h4>
              <p>12k+ Jobs</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="dropdownSection">
        <section className="centerSearch">
          <div className="left">
            <div className="leftContainer">
              <div className="firstSection">
                <div className="firstSearchSection">
                  <h3>Designer, Brand, Logo Designer</h3>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.73122 14.2867L6.21937 15.7684L10.3267 11.6789L14.4538 15.7881L15.9221 14.3262L11.795 10.217L15.8626 6.16699L14.3744 4.68529L10.3068 8.73526L6.17969 4.62603L4.71138 6.08796L8.83851 10.1972L4.73122 14.2867Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <button>
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4035 10.6378C20.4035 16.0366 16.007 20.4187 10.5767 20.4187C5.14651 20.4187 0.75 16.0366 0.75 10.6378C0.75 5.23905 5.14651 0.856934 10.5767 0.856934C16.007 0.856934 20.4035 5.23905 20.4035 10.6378Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M17.3193 17.3511L22.0959 22.7864"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
              <div className="listOfPeople">
                <ul>
                  <li>
                    <div className="listFirstHalf">
                      <img src={personOne} alt="person" />
                      <div>
                        <h4>Antonio Volaska</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="listSecondHalf">
                      <h4>HIRE ME</h4>
                      <h5>
                        <span>From</span> California
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="listFirstHalf">
                      <img src={personTwo} alt="person" />
                      <div>
                        <h4>Rashed ka</h4>
                        <p>Motion Designer</p>
                      </div>
                    </div>
                    <div className="listSecondHalf">
                      <h4>HIRE ME</h4>
                      <h5>
                        <span>From</span> Bangladesh
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="listFirstHalf">
                      <img src={personThree} alt="person" />
                      <div>
                        <h4>Zubayer Al Hasan</h4>
                        <p>Developer</p>
                      </div>
                    </div>
                    <div className="listSecondHalf">
                      <h4>HIRE ME</h4>
                      <h5>
                        <span>From</span> Norway
                      </h5>
                    </div>
                  </li>
                  <li>
                    <div className="listFirstHalf">
                      <img src={personFour} alt="person" />
                      <div>
                        <h4>Jannatul Ferdaus</h4>
                        <p>Youtuber</p>
                      </div>
                    </div>
                    <div className="listSecondHalf">
                      <h4>HIRE ME</h4>
                      <h5>
                        <span>From</span> Turkey
                      </h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <p className="rightQuestion">why choose us?</p>
            <h2>
              World of talent at <br /> your fingertips
            </h2>
            <div className="accordionlist">
              <div className="accord accordOne">
                <button
                  onClick={ToggleClass}
                  className={`accordion ${isActive1 ? null : "active"}`}
                >
                  Seamless Search
                </button>
                <div
                  className="panel"
                  ref={panel}
                  style={{
                    height: isActive1 ? "0px" : "fit-content",
                    // marginBottom: isActive1 ? "0px" : "20px",
                    display: isActive1 ? "none" : "block",
                    paddingBottom: isActive1 ? "0px" : "20px",
                  }}
                >
                  <p>
                    It only takes 5 minutes. Set-up is smooth and simple, with
                    fully customisable page design to reflect your brand.
                  </p>
                </div>
              </div>

              <div className="accord accordTwo">
                <button
                  onClick={ToggleClass2}
                  className={`accordion ${isActive2 ? null : "active"}`}
                >
                  Hire top talents
                </button>
                <div
                  className="panel"
                  ref={panel}
                  style={{
                    height: isActive2 ? "0px" : "fit-content",
                    // marginBottom: isActive2 ? "0px" : "20px",
                    display: isActive2 ? "none" : "block",
                    paddingBottom: isActive2 ? "0px" : "20px",
                  }}
                >
                  <p>
                    Looking to connect the best candidates with the most
                    desirable positions in the market.
                  </p>
                </div>
              </div>

              <div className="accordThree">
                <button
                  onClick={ToggleClass3}
                  className={`accordion ${isActive3 ? null : "active"}`}
                >
                  Protected payments, every time
                </button>
                <div
                  className="panel"
                  ref={panel}
                  style={{
                    height: isActive3 ? "0px" : "fit-content",
                    // marginBottom: isActive3 ? "0px" : "20px",
                    display: isActive3 ? "none" : "block",
                    paddingBottom: isActive3 ? "0px" : "20px",
                  }}
                >
                  <p>
                    Jobi has implemented multiple layers of security measures to
                    protect all payment transactions and ensure the highest
                    level of protection for our clients' financial data.
                  </p>
                </div>
              </div>
            </div>
            <button className="learnMoreButton">Learn More</button>
          </div>
        </section>
        <section className="posterOne">
          <div className="left">
            <h4>Business Solution</h4>
            <h2>
              Get quick <br />
              Solutions for your <br />
              <span>business.</span>
            </h2>
            <p className="posteroneParagraph">
              A full suite of hybrid workforce management tools are yours <br />
              to use, as well as access to our top 1% of talent.
            </p>
            <ul>
              <li>
                <h3>30k+</h3>
                <p>Worldwide Client</p>
              </li>
              <li>
                <h3>3%</h3>
                <p>Top Talents</p>
              </li>
              <li>
                <h3>7mil</h3>
                <p>Doller Payout</p>
              </li>
            </ul>
            <button>Explore Jobi business</button>
          </div>
          <div className="right">{/* <img src={person} alt="" /> */}</div>
        </section>
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
            <img src={howitworksarrow} alt="" />
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
            <img src={howitworksarrow} alt="" />
          </div>
          <div>
            <img src={apply} alt="" />
            <h3>Apply job or hire</h3>
            <p>
              Apply & get your perferable jobs with all the requirements and get
              it.
            </p>
          </div>
        </div>
      </div>

      <div className="collaborationSection">
        <div className="collabImage">
          <img src={circles} alt="" />
        </div>
        <div className="collabContent">
          <p className="topnote">TOP BRAND</p>
          <h2>
            Collaboration with <br />
            Top Brands.
          </h2>
          <p className="collabcontentpara">
            We collaborate with a number of top tier companies on imagining the
            future of work, have a look.
          </p>
          <a href="/" className="collabLink">
            <p>Learn More</p>
            <img src={Collabarrow} alt="" />
          </a>
        </div>
      </div>

      <div className="jobiGuidesSection">
        <div className="GuidesTitle">
          <h2>Jobi Guides</h2>
          <button>Explore More</button>
        </div>
        <div className="GuidesContainer">
          <div className="guidebox">
            <div className="guideboximage">
              <img src={PrintGuide} alt="" />
            </div>
            <p>Developer, Code</p>
            <h5>Print, publishing qui visual layout mockups.</h5>
            <p>
              By
              <span> Rashed Kabir</span>
            </p>
          </div>
          <div className="guidebox">
            <div className="guideboximage">
              <img src={DesignGuide} alt="" />
            </div>
            <p>Design, Art</p>
            <h5>Designer’s checklist for every UX/UI project.</h5>
            <p>
              By
              <span> Julie Margot</span>
            </p>
          </div>
          <div className="guidebox">
            <div className="guideboximage">
              <img src={SolutionGuide} alt="" />
            </div>
            <p>Solution, Work</p>
            <h5>Make more productive work flow in few steps.</h5>
            <p>
              By <span> Jubayer Al Hasan</span>
            </p>
          </div>
        </div>
      </div>

      <div className="resumeContainer">
        <div className="resumeInfoLeft">
          <img src={sideimage} alt="" />
        </div>
        <div className="resumeInfoRight">
          <h3>
            Get your <br />
            <span>Matched Jobs </span>
            in a <br />
            few minutes.
          </h3>
          <p className="resumeInfoRightparagraphtext">
            Find your dream job & earn from world leading brands. <br />
            Upload your CV now.
          </p>
          <button>
            <img src={download} alt="" />
            <p>Upload your CV</p>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
