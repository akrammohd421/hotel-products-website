import React from "react";

const TopHeader = () => {
  return (
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
  );
};

export default TopHeader;
