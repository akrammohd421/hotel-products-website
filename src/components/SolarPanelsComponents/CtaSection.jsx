import React from "react";

import ctaImage from "../../assets/cta-2-img.png"; // update the path as needed


const CtaSection = () => {
  return (
    <div className="it-cta-2-area p-relative theme-bg fix pt-60 pb-60">
      {/* Shape Image */}
      <div className="it-cta-2-shape d-none d-xl-block">
        <img src={ctaImage}  alt="CTA Decorative" />
      </div>

      {/* Container */}
      <div className="it-container-fluid">
        <div className="row">
          <div className="offset-xl-4 col-xl-8">
            <div className="row align-items-center">
              
              {/* CTA Text */}
              <div className="col-xl-9 col-lg-9">
                <div className="it-cta-2-content">
                  <h4 className="it-cta-2-title">
                    Ready to elevate your business with our premium products? Contact us today to explore how we can meet your needs and build a brighter, more sustainable future together!
                  </h4>
                </div>
              </div>

              {/* CTA Button */}
              <div className="col-xl-3 col-lg-3">
                <div className="it-cta-2-button">
                  <a href="contact.html" className="it-btn-green yellow-bg white-bg">
                    Request a Quote
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

export default CtaSection;
