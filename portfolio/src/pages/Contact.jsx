import React from 'react';

const Contact = () => {
  return (
    <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ftco-">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>Below are the details to reach out to me!</p>
          </div>
        </div>

        <div className="row d-flex contact-info mb-5">
          <div className="col-md-6 col-lg-3 d-flex ftco-">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span class="fas fa-map-marker-alt"></span>
              </div>
              <h3 className="mb-4">Address</h3>
              <p>Kamareddy, India</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span class="fas fa-phone"></span>
              </div>
              <h3 className="mb-4">Contact Number</h3>
              <p><a href="tel://8500536440">+91 8500536440</a></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span class="fas fa-envelope"></span>
              </div>
              <h3 className="mb-4">Email Address</h3>
              <p><a href="mailto:rohithreddyrudraiahgari@gmail.com">rohithreddyrudraiahgari@gmail.com</a></p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex ftco-">
            <div className="align-self-stretch box p-4 text-center">
              <div className="icon d-flex align-items-center justify-content-center">
                <span class="fas fa-file-download"></span>
              </div>
              <h3 className="mb-4">Resume Template</h3>
              <p>
                <a href="https://docs.google.com/document/d/10nE7UOTyoLfAUoPO8z7_rIUBJT_4G_AD/edit?usp=sharing&ouid=102573090555690618207&rtpof=true&sd=true">
                  Download link 🔗
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <br />
          <br />
          <br />
          <ul className="ftco-footer-social list-unstyled d-flex justify-content-center align-items-center mb-0">
            <li className="ftco- normal-txt">Find me on </li>
            <li className="ftco-">
              <a href="https://www.linkedin.com/in/rohithreddyrudraiahgari/">
                <span class="fab fa-linkedin"></span>
              </a>
            </li>
            <li className="ftco-">
              <a href="http://www.youtube.com/@rohithreddy1795">
                <span class="fab fa-youtube"></span>
              </a>
            </li>
            <li className="ftco-">
              <a href="https://www.instagram.com/rohith.reddy_18/">
                <span class="fab fa-instagram"></span>
              </a>
            </li>
          </ul>
          <br />
        </div>
      </div>
    </section>
  );
};

export default Contact;