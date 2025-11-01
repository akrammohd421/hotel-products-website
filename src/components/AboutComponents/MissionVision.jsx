import React from "react";
import sunshape from "../../assets/img/service/sun-shape-big.png";


const MissionVision = () => {
  return (
    <div className="it-service-area black-bg p-relative pt-120 pb-60">
      <div className="it-service-shape-1">
        <img src={sunshape} alt="Sun Shape" />
      </div>

      <div className="container">
        <div className="row">
          {/* Left Section - Title */}
          <div className="col-xl-4 col-lg-6">
            <div className="it-service-title-wrap mb-50">
              <div className="it-service-title-box mb-35 p-relative">
                <span className="it-subtitle subtitle-yellow">
                  Our Mission & Vision
                </span>
                <h3
                  className="it-section-title text-white"
                  style={{
                    fontSize: "17px",
                    fontWeight: "normal",
                    lineHeight: "1.5",
                  }}
                >
                  Empowering sustainability and redefining comfort through our
                  mission-driven solutions and visionary approach.
                </h3>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="it-service-item wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.3s",
                animationName: "itfadeUp",
              }}
            >
              <div className="it-service-icon-box mb-20 d-flex align-items-center justify-content-between">
                <div className="it-service-icon">
                  <i className="flaticon-technical-support"></i>
                </div>
                <div className="it-service-action">
                  <a href="#">
                    <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>

              <h3 className="it-section-title-sm">
                <a href="service-details.html">Our Mission</a>
              </h3>
              <p>
                Our mission is to bridge innovation and comfort by offering
                advanced solar panel solutions for a greener tomorrow and
                premium hospitality products for an exceptional guest
                experience. We aim to create a lasting impact by building
                sustainable energy solutions while meeting the evolving needs of
                the global hospitality industry.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-xl-4 col-lg-6 col-md-6">
            <div
              className="it-service-item wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
              style={{
                visibility: "visible",
                animationDuration: "0.9s",
                animationDelay: "0.5s",
                animationName: "itfadeUp",
              }}
            >
              <div className="it-service-icon-box mb-20 d-flex align-items-center justify-content-between">
                <div className="it-service-icon">
                  <i className="flaticon-tools"></i>
                </div>
                <div className="it-service-action">
                  <a href="#">
                    <i className="flaticon-right-arrow"></i>
                  </a>
                </div>
              </div>

              <h3 className="it-section-title-sm">
                <a href="service-details.html">Our Vision</a>
              </h3>
              <p>
                To become a globally recognized leader in renewable energy and
                hospitality exports by fostering sustainability, promoting
                innovation, and exceeding customer expectations. We envision a
                world where clean energy solutions power the future, and every
                guest enjoys a luxurious, restful stay with our premium
                products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
