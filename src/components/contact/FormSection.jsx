import React from "react";
import contactImage from "../../assets/about-1-2.jpg"; // 🟢 Replace this with your actual image

const ContactSection = () => {
  return (
    <section className="it-contact-area pb-60">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Contact Form */}
          <div className="col-xl-6 col-lg-6 col-md-12 mb-4   " >
            <div className="it-contact-wrapp grey-bg p-4 rounded ">
              <div className="it-contact-title-box pb-3 mb-4 text-center text-md-start">
                <h3 className="it-section-title text-uppercase fw-bold">
                  Get In Touch
                </h3>
              </div>

              <form className="it-contact-form">
                <div className="it-contact-input mb-3">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    className="form-control"
                  />
                </div>
                <div className="it-contact-input mb-3">
                  <input
                    type="text"
                    placeholder="Phone *"
                    required
                    className="form-control"
                  />
                </div>
                <div className="it-contact-input mb-3">
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    className="form-control"
                  />
                </div>
                <div className="it-contact-input mb-4">
                  <textarea
                    placeholder="Note"
                    rows="4"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="it-contact-button text-center text-md-start">
                  <button className="it-btn-green px-4 py-2 fw-bold" type="submit">
                    Send A Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: Image */}
        <div className="col-xl-6 col-lg-6 col-md-12">
  <div className="contact-image-wrapper text-center text-md-end">
    <img
      src={contactImage}
      alt="Contact"
      className="img-fluid rounded shadow-sm contact-image-size"
    />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
