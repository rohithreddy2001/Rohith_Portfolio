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
                          <span className="title-s">DOB: </span> <span>15 June 2001</span>
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
                      { skill: 'MySQL', percentage: 80 },
                      { skill: 'Python', percentage: 75 },
                      { skill: 'Java', percentage: 65 },
                      { skill: 'Data Visualization', percentage: 80 },
                      { skill: 'Statistical Analysis', percentage: 70 },
                      { skill: 'React.Js', percentage: 75 },
                      { skill: 'Flask', percentage: 70 },
                      
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
                  <h2 className="mb-4">About Me</h2>
                  <p style={{textAlign: 'left', padding: 0, margin: 0}}>
                    Recent B.Tech. graduate in Computer Science & Engineering from CMR College of Engineering & Technology, 
                    eager to apply my expertise in software development, artificial intelligence, and data analysis to drive innovative solutions. 
                    Proficient in programming, machine learning, and statistical modeling, I am passionate about building scalable software, 
                    developing intelligent systems, and transforming data into actionable insights. 
                    With hands-on project experience in coding, AI model development, and data visualization, 
                    I am excited to contribute to technology-driven decision-making and business success.
                  </p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex">
                      <span>Profile:</span> <span>Data Analytics, Software Engineering, and AI Engineering</span>
                    </li>
                    <li className="d-flex">
                      <span>Domain:</span>{' '}
                      <span>
                        Retail Technology, FinTech, FMCG, E-commerce, Human Resources &amp; Sports
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
                      <span>Excel, Git, Fast API, Spring Boot, Machine Learning</span>
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
                      <span>Projects: </span>{projectsData.length} <span>| Certifications: </span>{certificationsData.length}
                    </span>
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