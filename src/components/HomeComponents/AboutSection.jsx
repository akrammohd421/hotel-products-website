import React from "react";
import about1 from "../../assets/about-1-1.jpg";
import about2 from "../../assets/about-1-2.jpg";
import about3 from "../../assets/about-1-3.jpg";
import about4 from "../../assets/about-1-4.jpg";
import sunshape from "../../assets/sun-shape.png";
import aboutbg from "../../assets/about-1-bg.png";
import { Icon } from '@iconify/react';



const AboutSection = () => {
  return (
    <div className="it-about-area fix p-relative pt-120 pb-60">
      {/* Background shapes */}
      <div className="it-about-shape-1">
        <img src={sunshape} alt="sun-shape" />
      </div>
      <div className="it-about-shape-2">
        <img src={aboutbg} alt="about-bg" />
      </div>

      {/* Container */}
      <div className="container">
        <div className="row align-items-center">
          {/* Left side images */}
          <div
            className="col-xl-6 col-lg-6 wow itfadeLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-about-thumb-box p-relative">
              <div className="it-about-thumb-text d-none d-md-block">
                <h3 data-text="10+yearsexperience">10+yearsexperience</h3>
              </div>

              <div className="row gx-10">
                <div className="col-xl-7 col-lg-7 col-md-6">
                  <div className="it-about-thumb-1 mb-10 text-end">
                    <img
                      src={about1}
                      alt="about-thumb-1"
                    />
                  </div>
                  <div className="it-about-thumb-2">
                    <img
                      className="w-100"
                      src={about2}
                      alt="about-thumb-2"
                    />
                  </div>
                </div>

                <div className="col-xl-5 col-lg-5 col-md-6">
                  <div className="it-about-thumb-3 mt-40">
                    <img
                      src={about3}
                      alt="about-thumb-3"
                    />
                  </div>
                  <div className="it-about-thumb-4 mt-20">
                    <img
                      src={about4}
                      alt="about-thumb-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side content */}
          <div
            className="col-xl-6 col-lg-6 wow itfadeRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-content-wrapp pl-20">
              <div className="it-about-title-box mb-20">
                <span className="it-subtitle">about us</span>
                <h3 className="it-section-title">
                  Powering a better tomorrow and redefine luxury{" "}
                  <span>experiences</span>
                </h3>
              </div>

              <div className="it-about-dsc mb-25">
                <p>
                  At Lotus Impex, we are dedicated to delivering excellence in
                  two unique sectors: renewable energy and premium hospitality
                  supplies. As a trusted exporter, we specialize in providing
                  top-tier solar panels to power a sustainable future and
                  luxurious hotel pillows and mattresses to ensure unparalleled
                  comfort for your guests. With a focus on quality, innovation,
                  and customer satisfaction, we are committed to meeting global
                  standards in every product we deliver.
                </p>
              </div>

              {/* Feature 1 */}
              <div className="it-about-item d-flex mb-10">
                <div className="it-about-item-icon">
                  <i className="flaticon-renewable-energy"></i>
                </div>
                <div className="it-about-item-text">
                  <h3 className="it-section-title-sm mb-10">
                    Professional Solar Experts
                  </h3>
                  <p>
                    Solar panels exported are designed to meet the highest
                    international standards, providing reliable and efficient
                    energy for businesses.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="it-about-item d-flex mb-15">
                <div className="it-about-item-icon">
                  <i className="flaticon-light-bulb"></i>
                </div>
                <div className="it-about-item-text">
                  <h3 className="it-section-title-sm mb-10">
                    Premium Hospitality essentials
                  </h3>
                  <p>
                    Our premium pillows and mattresses are crafted to deliver
                    unparalleled comfort, ensuring every guest enjoys a truly
                    restful experience.
                  </p>
                </div>
              </div>

              {/* Contact info */}
              <div className="it-about-info d-flex align-items-center">
                <div className="it-about-btn mr-30">
                  <a
                    href="about-lotus-impex.html"
                    className="it-btn-green yellow-bg"
                  >
                    Read more...
                  </a>
                </div>

                <div className="it-about-info-content d-flex align-items-center">
                  <div className="it-about-info__icon mr-10">
                    <i className="flaticon-message"></i>
                  </div>
                  <div className="it-about-info__text">
                    <span className="it-about-info__title">
                      Connect with us
                    </span>
                    <a href="tel:+919821052755">+91 98210 52755</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
