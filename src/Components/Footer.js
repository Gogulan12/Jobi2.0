import React from "react";
import "./Footer.css";
import footerlogo from "../Assets/FooterLogo.svg";

export default function Footer() {
  return (
    <div>
      <div className="topSection">
        <main className="topFooter">
          <div className="left">
            <h2>Most Complete job portal.</h2>
            <p>Sign up and start find you job or talents.</p>
          </div>
          <div className="right">
            <a href="/" className="look">
              Looking for job?
            </a>
            <a href="/" className="post">
              Post a Job
            </a>
          </div>
        </main>

        <section className="lists">
          <div className="footerLogo">
            <img src={footerlogo} alt="" />
          </div>
          <div className="Products">
            <h4>Products</h4>
            <ul className="footerLists">
              <li>Take the tour</li>
              <li>Live chat</li>
              <li>Self-service</li>
              <li>Mobile</li>
              <li>Collaboration</li>
              <li>Review</li>
            </ul>
          </div>
          <div className="Links">
            <h4>Links</h4>
            <ul className="footerLists">
              <li>Pricing</li>
              <li>About us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="Legal">
            <h4>Legal</h4>
            <ul className="footerLists">
              <li>Terms of use</li>
              <li>Terms & conditions</li>
              <li>Privacy</li>
              <li>Cookie policy</li>
            </ul>
          </div>
          <div className="newsletter">
            <h4>Newsletter</h4>
            <p className="joinLabel">Join & get important new regularly</p>
            <div className="newsletterWrapper">
              <input type="text" placeholder="Enter your email" />
              <button>Send</button>
            </div>
            <p className="newsletterEmailMessage">
              We only send interesting and relevant emails.
            </p>
          </div>
        </section>
      </div>

      <footer>
        <div className="bottomLinks">
          <p>Privacy & Terms.</p>
          <p>Contact us</p>
        </div>
        <div className="copyright">
          <p>Copyright @2022 jobi inc.</p>
        </div>
        <div className="icons">
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.45748 17.75V9.7625H9.04416L9.46667 6.2125H6.45748V4.48365C6.45748 3.56953 6.48239 2.6625 7.84492 2.6625H9.22497V0.12425C9.22497 0.0860875 8.03956 0 6.84032 0C4.33574 0 2.76749 1.47059 2.76749 4.17125V6.2125H0V9.7625H2.76749V17.75H6.45748Z"
              fill="black"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.96724 0H13.0325C15.7717 0 18.0001 2.22841 18 4.96735V13.0327C18 15.7716 15.7717 18 13.0325 18H4.96724C2.22831 18 0 15.7717 0 13.0327V4.96735C0 2.22841 2.22831 0 4.96724 0ZM13.0326 16.403C14.8911 16.403 16.4031 14.8911 16.4031 13.0326H16.403V4.96735C16.403 3.10903 14.891 1.59705 13.0325 1.59705H4.96724C3.10892 1.59705 1.59705 3.10903 1.59705 4.96735V13.0326C1.59705 14.8911 3.10892 16.4031 4.96724 16.403H13.0326Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.5 9.0001C4.5 6.51871 6.51866 4.5 9 4.5C11.4813 4.5 13.5 6.51871 13.5 9.0001C13.5 11.4814 11.4813 13.5 9 13.5C6.51866 13.5 4.5 11.4814 4.5 9.0001ZM6.04948 9C6.04948 10.6269 7.37315 11.9504 9 11.9504C10.6269 11.9504 11.9505 10.6269 11.9505 9C11.9505 7.37301 10.627 6.04941 9 6.04941C7.37305 6.04941 6.04948 7.37301 6.04948 9Z"
              fill="black"
            />
            <path
              d="M13.5 3.375C13.2044 3.375 12.9141 3.49466 12.7053 3.70432C12.4956 3.91295 12.375 4.20341 12.375 4.5C12.375 4.79567 12.4957 5.08602 12.7053 5.29568C12.914 5.50432 13.2044 5.625 13.5 5.625C13.7966 5.625 14.086 5.50432 14.2957 5.29568C14.5053 5.08602 14.625 4.79557 14.625 4.5C14.625 4.20341 14.5053 3.91295 14.2957 3.70432C14.087 3.49466 13.7966 3.375 13.5 3.375Z"
              fill="black"
            />
          </svg>
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.75098 0C2.69098 0 0 3.45862 0 7.22987C0 8.97887 0.916224 11.1599 2.38288 11.8516C2.60559 11.9587 2.72675 11.9132 2.77637 11.6928C2.82022 11.5254 3.01292 10.7193 3.10639 10.3389C3.13524 10.2171 3.12024 10.1112 3.02793 9.99676C2.54096 9.39612 2.1544 8.30191 2.1544 7.27541C2.1544 4.64513 4.11493 2.09117 7.45096 2.09117C10.3358 2.09117 12.354 4.09003 12.354 6.94924C12.354 10.1802 10.7512 12.4153 8.66836 12.4153C7.51558 12.4153 6.65705 11.4504 6.92938 10.2565C7.25825 8.83486 7.9033 7.30618 7.9033 6.2809C7.9033 5.36147 7.41634 4.60082 6.42165 4.60082C5.2481 4.60082 4.2961 5.84026 4.2961 7.50434C4.2961 8.56162 4.6469 9.2755 4.6469 9.2755C4.6469 9.2755 3.48604 14.2776 3.27025 15.2118C2.90561 16.7934 3.31987 19.3547 3.35564 19.575C3.37757 19.6969 3.50565 19.735 3.5772 19.6354C3.69144 19.4753 5.09462 17.3399 5.48811 15.7964C5.6312 15.2339 6.21856 12.9532 6.21856 12.9532C6.60512 13.6979 7.72098 14.3219 8.90953 14.3219C12.4452 14.3219 15 11.0073 15 6.89385C14.9873 2.95029 11.8232 0 7.75098 0Z"
              fill="black"
            />
          </svg>
        </div>
      </footer>
    </div>
  );
}
