import React from "react";
import { Link } from "react-router-dom";
import breadcrumbBg from "../../assets/about-bg.jpg";


const Breadcrumb = () => {
  return (
    <div
      className="it-breadcrumb-area fix p-relative"
      data-background={breadcrumbBg}
      style={{ backgroundImage:  `url(${breadcrumbBg})` }}
    >
      <div className="it-breadcrumb-shape-1">
        <img src="assets/img/breadcrumb/breadcrumb-shape.png" alt="breadcrumb shape" />
      </div>

      <div className="it-breadcrumb-transparent-text">
        <h3 className="it-breadcrumb-transparent-title">Lotus</h3>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="it-breadcrumb-content">
              <div className="it-breadcrumb-title-box mb-25 z-index-3">
                <h3 className="it-breadcrumb-title text-white">About Us</h3>
              </div>

              <div className="it-breadcrumb-list-wrap">
                <div className="it-breadcrumb-list z-index-3">
                  <span>
                    <a href="index.html">Home</a>
                  </span>
                  <span className="dvdr">//</span>
                  <span>
                    <b>About Us</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
