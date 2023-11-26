import React from "react";

import "./Blog.css";

// blog images

import interview from "../Assets/Blogs/Interview.jpg";
import remote from "../Assets/Blogs/RemoteWork.png";
import skills from "../Assets/Blogs/Skills.jpg";
import networking from "../Assets/Blogs/Networking.png";
import Footer from "../Components/Footer";

export default function Blog() {
  return (
    <div className="blog-page">
      <div className="pageHeaderContainer">
        <header className="page-header">
          <h1>Job Board Blog</h1>
          <p>
            Stay updated with the latest trends and tips in the job industry.
          </p>
        </header>
      </div>

      {/* <div className="blog-posts">
        <div className="blog-post">
          <h2>How to Ace Your Job Interview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="blog-post">
          <h2>The Future of Remote Work</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="blog-post">
          <h2>Top Skills in High Demand for 2023</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
            malesuada magna mollis euismod.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="blog-post">
          <h2>Mastering the Art of Networking</h2>
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere
            consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
            sem lacinia quam venenatis vestibulum.
          </p>
          <a href="/">Read More</a>
        </div>
      </div> */}
      <div className="blog-posts">
        <div className="blog-post">
          <img src={interview} alt="Job Interview" />
          <h2>How to Ace Your Job Interview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="blog-post">
          <img src={remote} alt="Remote Work" />
          <h2>The Future of Remote Work</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="blog-post">
          <img src={skills} alt="Skills in Demand" />
          <h2>Top Skills in High Demand for 2023</h2>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
            malesuada magna mollis euismod.
          </p>
          <a href="/">Read More</a>
        </div>

        <div className="blog-post">
          <img src={networking} alt="Networking" />
          <h2>Mastering the Art of Networking</h2>
          <p>
            Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere
            consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare
            sem lacinia quam venenatis vestibulum.
          </p>
          <a href="/">Read More</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
