import React, { useEffect, useState } from 'react';
import AboutImg from '../assets/images/about.jpg';
import projectsData from '../data/projectsData';
import certificationsData from '../data/certificationsData';

const About = () => {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    };

    const dob = '2001-06-15'; // Date of Birth
    setAge(calculateAge(dob));
  }, []);

  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container">
        <div className="row">
          <div className="row d-flex align-items-stretch">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay">
                  <div className="row">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img">
                        <img
                          id="about_img"
                          src={AboutImg}
                          className="img-fluid rounded b-shadow-a"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span> <span>Rohith Reddy Rudraiah Gari</span>
                        </p>
                        <p>
                          <span className="title-s">DOB: </span> <span>15/June/2001</span>
                        </p>
                        <p>
                          <span className="title-s">Age: </span> <span>{age}</span>
                        </p>
                        <p>
                          <span className="title-s">Address: </span> <span>Hyderabad, India</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="skill-mf">
                    <p className="title-s">Skills</p>
                    {[
                      { skill: 'MYSQL', percentage: 75 },
                      { skill: 'PYTHON', percentage: 75 },
                      { skill: 'Java', percentage: 65 },
                      { skill: 'Data Visualization', percentage: 80 },
                      { skill: 'Statistical Analysis', percentage: 70 },
                      { skill: 'React.Js', percentage: 75 },
                    ].map(({ skill, percentage }) => (
                      <div key={skill}>
                        <span>{skill}</span> <span className="pull-right">{percentage}%</span>
                        <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: `${percentage}%` }}
                            aria-valuenow={percentage}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p>
                    Recent graduate with a B.Tech. in Computer Science & Engineering from CMR College of
                    Engineering & Technology, seeking to leverage my academic knowledge and project
                    experience in data analysis to contribute to data-driven decisions. I am passionate
                    about turning data into actionable insights and excited to bring my skills in
                    statistical analysis and data visualization.
                  </p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex">
                      <span>Profile:</span> <span>Data Analytics</span>
                    </li>
                    <li className="d-flex">
                      <span>Domain:</span>{' '}
                      <span>
                        Hospitality, Automotive, FMCG, E-commerce, Human Resources &amp; Sports
                      </span>
                    </li>
                    <li className="d-flex">
                      <span>Education:</span> <span>Bachelor of Technology</span>
                    </li>
                    <li className="d-flex">
                      <span>Language:</span> <span>English, Telugu, Hindi</span>
                    </li>
                    <li className="d-flex">
                      <span>BI Tools:</span> <span>Microsoft Power BI, Tableau</span>
                    </li>
                    <li className="d-flex">
                      <span>Other Skills:</span>{' '}
                      <span>Excel, Git, Python (Pandas, NumPy, Matplotlib)</span>
                    </li>
                    <li className="d-flex">
                      <span>Interest:</span> <span>Traveling, Cricket</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="counter-wrap d-flex mt-md-3">
                <div className="text">
                  <p className="mb-4">
                    <span className="number">
                      {projectsData.length}
                    </span>
                    <span>&nbsp; Projects &</span>
                    &nbsp;
                    <span className="number">
                      {certificationsData.length}
                    </span>
                    <span>&nbsp; Certifications completed</span>
                  </p>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/rohithreddyrudraiahgari/"
                      className="btn btn-primary py-3 px-3"
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;