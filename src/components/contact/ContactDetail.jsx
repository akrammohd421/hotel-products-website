import React from "react";


const coreValuesData = [
  {
    number: "01",
    title: "Office Address",
    description:
      "House No. 628, Nagzari, Panvel, Navi Mumbai , Raigad, MH, 410 208",
  },
  {
    number: "02",
    title: "Phone Number",
    description:
      "+91 98210 5275 +91 98210 52755",
  },
  {
    number: "03",
    title: "Email Address",
    description:
      "info@lotus-impex.in sales@lotus-impex.in",
  },
];

const ContactDetail = () => {
  return (
    <div className="it-work-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="it-work-title-box text-center mb-70">
            <h3
  className="it-subtitle mb-30 core-title fs-5"
  style={{ color: "#1d9637ff" }}
>
  OUR CONTACT DETAILS
</h3>
              <h3 className="it-section-title">
                Get in touch with us for premium solar panels, mattresses, 
                bed sheets, and pillows—let’s create comfort and sustainability together!

              </h3>
            </div>
          </div>
        </div>

        <div className="it-work-wrapper">
          <div className="row">
            {coreValuesData.map((item) => (
              <div key={item.number} className="col-lg-4 col-md-6 mb-30">
                <div className="it-work-item">
                  <div className="it-work-icon-box">
                    <span className="it-work-main-number   ">{item.number}</span>
                    
                      <span className="download-icon"></span>
                    
                  </div>
                  <div className="it-work-content">
                    <h3 className="it-section-title-sm">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
