import React from 'react';

const Resume = () => {
  return (
    <section className="ftco-section ftco-no-pb" id="resume-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-10 heading-section text-center ftco-">
            <h2 className="mb-4">Resume</h2>
            <p>
              Passionate about turning data into actionable insights and excited to bring my skills in
              statistical analysis and data visualization.
            </p>
          </div>
        </div>

        <div className="row">
          <h1 className="big-1">Education</h1>
          <div className="underline"></div>
        </div>
        <br />

        <div className="row">
          <div className="col-md-6">
            <div className="resume-wrap ftco-">
              <span className="date">August 2019 - April 2023</span>
              <h2>Bachelor of Technology</h2>
              <span className="position">CMR College Of Engineering and Technology</span>
              <p className="mt-4">Grade: First class.</p>
              <p className="mt-4">CGPA: 7.51</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="resume-wrap ftco-">
              <span className="date">May 2017 - April 2019</span>
              <h2>12th Board</h2>
              <span className="position">Sri Chaitanya Junior College</span>
              <p className="mt-4">Grade: First class distinction.</p>
              <p className="mt-4">AGGREGATE: 93.2 %</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-">
            <p>
              <a
                href="https://drive.google.com/file/d/12GKHTPt7RWt3_CprFimWCaJDVIE3QuJB/view?usp=sharing"
                className="btn btn-primary py-4 px-5"
              >
                View Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;