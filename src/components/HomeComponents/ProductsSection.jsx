import React from "react";
import { Link } from "react-router-dom";
import service1 from "../../assets/service-4-1.jpg";
import service2 from "../../assets/service-4-2.jpg";
import service3 from "../../assets/service-4-3.jpg";
import service4 from "../../assets/service-4-4.jpg";
import service5 from "../../assets/img/service/service-4-shape-1.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";





const ProductsSection = () => {
  return (
    <div
      className="it-service-4-area p-relative pt-60"
      data-background="assets/img/service/service-3-1-bg.jpg"
    >
      {/* Decorative shape */}
      <div className="it-service-4-shape d-none d-xl-block">
        <img
          src={service5}
          alt="decorative shape"
        />
      </div>

      <div className="container">
        {/* Section title */}
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="it-service-2-title-box text-center mb-70">
              <span className="it-subtitle">Products</span>
              <h3 className="it-section-title">
                What we’re exporting to our <span>customers.</span>
              </h3>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="row">
          {/* Solar Panel */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div
              className="it-service-2-item fix wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".3s"
            >
              <div className="it-service-2-content z-index-5 p-relative text-center">
                <div className="it-service-4-thumb-box p-relative mb-40">
                  <div className="it-service-4-thumb-shape"></div>
                  <div className="it-service-4-thumb">
                    <img
                      src={service1}
                      alt="Solar Panel"
                    />
                  </div>
                </div>
                <h3 className="it-section-title-sm">
                  <a href="solar-panels.html">Solar Panel</a>
                </h3>
                <p>
                  We provide high-quality solar panels designed for efficient
                  energy generation and sustainability.
                </p>
                <div className="it-service-2-icon mt-25">
                  <a href="solar-panels.html">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mattress */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div
              className="it-service-2-item fix wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-service-2-content z-index-5 p-relative text-center">
                <div className="it-service-4-thumb-box p-relative mb-40">
                  <div className="it-service-4-thumb-shape"></div>
                  <div className="it-service-4-thumb">
                    <img
                      src={service2}
                      alt="Mattress"
                    />
                  </div>
                </div>
                <h3 className="it-section-title-sm">
                  <a href="hotel-products.html">Mattress</a>
                </h3>
                <p>
                  We offer premium-quality mattresses designed for ultimate
                  comfort and durability.
                </p>
                <div className="it-service-2-icon mt-25">
                  <a href="hotel-products.html">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Pillows */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div
              className="it-service-2-item fix wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="it-service-2-content z-index-5 p-relative text-center">
                <div className="it-service-4-thumb-box p-relative mb-40">
                  <div className="it-service-4-thumb-shape"></div>
                  <div className="it-service-4-thumb">
                    <img
                      src={service3}
                      alt="Pillows"
                    />
                  </div>
                </div>
                <h3 className="it-section-title-sm">
                  <a href="hotel-products.html">Pillows</a>
                </h3>
                <p>
                  We offer luxurious pillows crafted for elegance, comfort, and
                  durability — perfect for hotels.
                </p>
                <div className="it-service-2-icon mt-25">
                  <a href="hotel-products.html">
                    <i className="flaticon-right-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bed Sheets */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div
              className="it-service-2-item fix wow itfadeUp"
              data-wow-duration=".9s"
              data-wow-delay=".9s"
            >
              <div className="it-service-2-content z-index-5 p-relative text-center">
                <div className="it-service-4-thumb-box p-relative mb-40">
                  <div className="it-service-4-thumb-shape"></div>
                  <div className="it-service-4-thumb">
                    <img
                      src={service4}
                      alt="Bed Sheets"
                    />
                  </div>
                </div>
                <h3 className="it-section-title-sm">
                  <a href="hotel-products.html">Bed Sheets</a>
                </h3>
                <p>
                  We offer premium bed sheets crafted with high-quality materials
                  for unmatched comfort and elegance.
                </p>
                <div className="it-service-2-icon mt-25">
                  <a href="hotel-products.html">
                    <i className="flaticon-right-up"></i>
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

export default ProductsSection;
