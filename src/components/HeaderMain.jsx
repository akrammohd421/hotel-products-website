import React from "react";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";



const HeaderMain = () => {
  return (
    <header>
      <div
        id="header-sticky"
        className="it-header-area it-header-3-style z-index-5"
      >
        {/* --- Top Header --- */}
        <div
          className="it-header-top black-bg it-header-space-lr"
          data-background="assets/img/header/header-top-bg.png"
          style={{
            backgroundImage: 'url("assets/img/header/header-top-bg.png")',
          }}
        >
          <div className="container-fluid p-0">
            <div className="row g-0 align-items-center">
              <div className="col-xl-8 col-lg-6 col-md-6 col-7">
                <div className="it-header-top-info">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="flaticon-location"></i>
                        Vasai - Virar, Mumbai - INDIA
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@lotus-impex.in">
                        <i className="flaticon-mail"></i>
                        info@lotus-impex.in
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 col-md-6 col-5">
                <div className="it-header-top-right-wrap d-flex justify-content-end">
                  <div className="it-header-top-right d-inline-flex">
                    <div className="it-header-lang-wrapper d-none d-md-block">
                      <div className="it-header-lang d-flex align-items-center">
                        <span
                          className="it-header-lang-selected-lang it-lang-toggle"
                          id="it-header-lang-toggle"
                        >
                          Get Social :
                        </span>
                      </div>
                    </div>

                    <div className="it-header-top-social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Header Bottom --- */}
        <div className="it-header-3-wrap p-relative">
          <div className="it-main-logo">
            <a href="index.html">
              <img src={logo} alt="Main Logo" />
            </a>
          </div>

          <div className="it-header-pl">
            <div className="it-header-bottom it-header-space-lr it-header-mob-space">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-xxl-7 col-xl-7 d-none d-xl-block">
                    <div className="it-main-menu">
                      <nav className="it-menu-content">
                        <ul>
                          <li>
                               <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About Us</Link>
                           
                          </li>
                          <li>
                            <Link to="/solarpanels">Solar Pannels</Link>
                            
                          </li>
                          <li>
                            <a href="hotel-products.html">Hotel Products</a>
                          </li>
                          <li>
                            <a href="contact-lotus-impex.html">Contact Us</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-xxl-5 col-xl-5">
                    <div className="it-header-right-box pr-65 d-flex align-items-center justify-content-end">
                      <div className="it-header-right-btn d-none d-md-block mr-25">
                        <a
                          href="contact-lotus-impex.html"
                          className="it-btn-green"
                        >
                          Request Quote
                        </a>
                      </div>

                      <div className="it-about-info-content d-flex align-items-center">
                        <div className="it-about-info__icon mr-10">
                          <i className="flaticon-message"></i>
                        </div>
                        <div className="it-about-info__text">
                          <span className="it-about-info__title">
                            Connect With Us
                          </span>
                          <a href="tel:+919821052755">+91 98210 52755</a>
                        </div>
                      </div>

                      <div className="it-header-bar-wrap d-xl-none">
                        <button className="it-header-bar it-menu-bar">
                          <i className="fa-sharp fa-regular fa-bars-staggered"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;
