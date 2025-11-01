// import React from "react";
// import { Link } from "react-router-dom";
// import breadcrumbBg from "../../assets/solar-bg.jpg";


import React from "react";
import { Link } from "react-router-dom";
 import breadcrumbBg from "../../assets/solar-bg.jpg";


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
                <h3 className="it-breadcrumb-title text-white">Solar Panels</h3>
              </div>

            <div class="it-breadcrumb-list-wrap" >
<div class="it-breadcrumb-list z-index-3">
<span>Efficient, durable, and eco-friendly, our solar panels are designed to power a sustainable future.</span>
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
