import React from "react";


import monocrystalline from "../../assets/monocrystalline.jpg";
import polycrystalline from "../../assets/polycrystalline.jpg";
import thinfilm from "../../assets/thinfilm.jpg";
import bifacial from "../../assets/bifacial.jpg";
import perc from "../../assets/perc.jpg";



const ProductsSection = () => {
  return (
    <div className="it-service-3-area portfolio-inner p-relative pt-115 pb-100">
      <div className="container">
        {/* Title Section */}
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

        {/* Product Grid */}
        <div className="row">
          {/* Monocrystalline */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="it-service-3-item p-relative fix">
              <div className="it-service-3-thumb">
                <img src={monocrystalline} alt="Monocrystalline Solar Panels" />
              </div>
              <div className="it-service-3-content">
                <span className="it-service-3-categories">Solar Panels</span>
                <h3 className="it-service-3-item-title">
                  <a href="#">Monocrystalline Solar Panels</a>
                </h3>
              </div>
            </div>
          </div>

          {/* Polycrystalline */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="it-service-3-item p-relative fix">
              <div className="it-service-3-thumb">
                <img src={polycrystalline} alt="Polycrystalline Solar Panels" />
              </div>
              <div className="it-service-3-content">
                <span className="it-service-3-categories">Solar Panels</span>
                <h3 className="it-service-3-item-title">
                  <a href="#">Polycrystalline Solar Panels</a>
                </h3>
              </div>
            </div>
          </div>

          {/* Thin-Film */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="it-service-3-item p-relative fix">
              <div className="it-service-3-thumb">
                <img src={thinfilm} alt="Thin-Film Solar Panels" />
              </div>
              <div className="it-service-3-content">
                <span className="it-service-3-categories">Solar Panels</span>
                <h3 className="it-service-3-item-title">
                  <a href="#">Thin-Film Solar Panels</a>
                </h3>
              </div>
            </div>
          </div>

          {/* Bifacial */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="it-service-3-item p-relative fix">
              <div className="it-service-3-thumb">
                <img src={bifacial} alt="Bifacial Solar Panels" />
              </div>
              <div className="it-service-3-content">
                <span className="it-service-3-categories">Solar Panels</span>
                <h3 className="it-service-3-item-title">
                  <a href="#">Bifacial Solar Panels</a>
                </h3>
              </div>
            </div>
          </div>

          {/* PERC */}
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="it-service-3-item p-relative fix">
              <div className="it-service-3-thumb">
                <img src={perc} alt="PERC Solar Panels" />
              </div>
              <div className="it-service-3-content">
                <span className="it-service-3-categories">Solar Panels</span>
                <h3 className="it-service-3-item-title">
                  <a href="#">PERC Solar Panels</a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
