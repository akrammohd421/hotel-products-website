import React from 'react';

 import slider3 from '../../assets/img/hero/slider-3-shape-1.png';
 import slider2 from '../../assets/img/hero/slider-3-shape-2.png';
import herobg3 from '../../assets/img/hero/hero-bg-3-1.jpg';
import herobg2 from '../../assets/img/hero/hero-bg-3-2.jpg';



const Slider = () => {
  return (
  
    <div className="it-slider-3-wrapp p-relative">
      
      <div className="it-slider-3-big-text">
        <h3 data-text="Lotus" className="it-slider-3-big-title">
          Lotus-Impex
        </h3>
      </div>

      <div className="swiper-container it-slider-3-active">
        <div className="swiper-wrapper">
          {/* ===== Slide 1 ===== */}
          <div className="swiper-slide">
            <div className="it-slider-3-wrapper it-slider-3-overlay it-slider-3-height p-relative z-index">
              <div className="it-slider-3-shape-1 d-none d-xl-block">
                <img src={slider3} alt="" />
              </div>
              <div className="it-slider-3-shape-2 d-none d-xl-block">
                <img src={slider2} alt="" />
              </div>

              <div
                className="it-slider-3-bg"
                data-background={herobg3}
              ></div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9">
                    <div className="it-slider-3-content-wrap z-index-5">
                      <div className="it-slider-3-content-box">
                        <span className="it-hero-subtitle subtitle-yellow">
                          welcome to Lotus Impex
                        </span>
                        <h3 className="it-hero-title text-white">
                          produce energy with <br /> easy and low cost
                        </h3>
                        <div className="it-slider-3-dsc">
                          <p>
                            Efficient, durable, and eco-friendly, our solar
                            panels are designed to power a sustainable future.
                          </p>
                        </div>
                      </div>
                      <div className="it-slider-3-button d-flex align-items-center">
                        <a
                          href="solar-panels.html"
                          className="it-btn-green white-bg mr-30"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Slide 2 ===== */}
          <div className="swiper-slide">
            <div className="it-slider-3-wrapper it-slider-3-overlay it-slider-3-height p-relative z-index">
              <div className="it-slider-3-shape-1 d-none d-xl-block">
                <img src={slider3} alt="" />
              </div>
              <div className="it-slider-3-shape-2 d-none d-xl-block">
                <img src={slider2} alt="" />
              </div>

              <div
                className="it-slider-3-bg"
                data-background={herobg2}
              ></div>

              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-9">
                    <div className="it-slider-3-content-wrap z-index-5">
                      <div className="it-slider-3-content-box">
                        <span className="it-hero-subtitle subtitle-yellow">
                          welcome to Lotus Impex
                        </span>
                        <h3 className="it-hero-title text-white">
                          premium hospitality products
                          <br /> crafted for comfort
                        </h3>
                        <div className="it-slider-3-dsc">
                          <p>
                            Elevate guest experiences with our premium
                            hospitality products, crafted for comfort, quality,
                            and style.
                          </p>
                        </div>
                      </div>
                      <div className="it-slider-3-button d-flex align-items-center">
                        <a
                          href="hotel-products.html"
                          className="it-btn-green white-bg mr-30"
                        >
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Arrows */}
        <div className="it-slider-3-arrow-box d-none d-md-block">
          <button className="slider-3-prev">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="slider-3-next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
