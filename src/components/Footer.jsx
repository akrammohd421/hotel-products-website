// src/components/Footer/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import footerBg from "../assets/footer-bg.jpg";
import logo from "../assets/footer-logo.png";                               
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";




const Footer = () => {
  return (
    <footer>
      <div
        className="it-footer-2-area p-relative"
        data-background={footerBg}
        style={{ backgroundImage: {footerBg} }}
      >
        <div className="it-footer-2-border">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div
                  className="it-footer-2-top-wrap d-flex align-items-center wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  {/* Location */}
                  <div className="it-footer-2-top-item">
                    <div className="it-footer-2-top-content d-flex align-items-center justify-content-start justify-content-lg-center">
                      <div className="it-footer-2-top-icon">
                        <a href="#">
                        <i className="fa-solid fa-location-dot"></i>


                        </a>
                      </div>
                      <div className="it-footer-2-top-text">
                        <span>Location</span>
                        <h3 className="it-section-title-sm">
                          <a href="#">Vasai - Virar, Mumbai - INDIA</a>
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="it-footer-2-top-item">
                    <div className="it-footer-2-top-content d-flex align-items-center justify-content-start justify-content-lg-center">
                      <div className="it-footer-2-top-icon">
                        <a href="#">
                          <i className="fa-solid fa-phone"></i>
                        </a>
                      </div>
                      <div className="it-footer-2-top-text">
                        <span>Phone:</span>
                        <h3 className="it-section-title-sm">
                          <a href="tel:875784568">+91 98210 52755</a>
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="it-footer-2-top-item">
                    <div className="it-footer-2-top-content d-flex align-items-center justify-content-start justify-content-lg-center">
                      <div className="it-footer-2-top-icon">
                        <a href="#">
                          <i className="fa-regular fa-envelope"></i>
                        </a>
                      </div>
                      <div className="it-footer-2-top-text">
                        <span>Email:</span>
                        <h3 className="it-section-title-sm">
                          <a href="mailto:info@lotus-impex.in">
                            info@lotus-impex.in
                          </a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="it-footer-2-bottom pt-60 pb-10">
          <div className="container">
            <div className="row">
              {/* Column 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="it-footer-widget footer-2-col-1 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <div className="it-footer-logo mb-10">
                    <a href="index.html">
                      <img
                        src={logo}
                        alt="Lotus Impex Logo"
                      />
                    </a>
                  </div>
                  <div className="it-footer-content">
                    <p style={{ fontSize: "15px" }}>
                      Trusted partner in renewable energy solutions and premium
                      hospitality essentials.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="it-footer-widget footer-2-col-2 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                >
                  <h3 className="it-footer-widget-title mb-35">Quick Links!</h3>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <a href="about-lotus-impex.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-lotus-impex.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="it-footer-widget footer-2-col-3 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".8s"
                >
                  <h3 className="it-footer-widget-title mb-35">
                    What We Export?
                  </h3>
                  <div className="it-footer-list">
                    <ul>
                      <li>
                        <a href="solar-panel.html">Solar Panel</a>
                      </li>
                      <li>
                        <a href="hotel-products.html">Hotel Products</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Column 4 */}
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="it-footer-widget p-relative footer-2-col-4 wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <h3 className="it-footer-widget-title mb-45">Get Social</h3>
                  <div className="it-footer-2-contact">
                    <div className="it-footer-social footer-social-2">
                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="flaticon-twitter-1"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="it-copyright-2-area pt-20 pb-20">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div
                  className="it-copyright-content text-center text-lg-start wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  <p style={{ fontSize: "15px" }}>
                    Copyright © 2024{" "}
                    <span>
                      <a href="index.html">LOTUS IMPEX</a>
                    </span>
                    . All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div
                  className="it-copyright-privacy text-center text-lg-end wow itfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".7s"
                  style={{ fontSize: "15px" }}
                >
                  Design & Developed by{" "}
                  <a href="https://saraswebtech.com" target="_blank">
                    Saras Webtech
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
