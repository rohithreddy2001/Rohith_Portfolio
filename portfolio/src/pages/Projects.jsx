// --- Projects.jsx ---
import React from 'react';
import projectsData from '../data/projectsData';
import ExcelImg from '../assets/images/Excel.png';
import PowerBIImg from '../assets/images/powerBi.png';
import MySQLImg from '../assets/images/database.png';
import PythonImg from '../assets/images/python.png';
import LinkedinImg from '../assets/images/linkedin.png';
import GithubImg from '../assets/images/github.png';
import YoutubeImg from '../assets/images/youtube.png';


const Projects = () => {
  const excelCount = projectsData.filter(project => project.skills.includes('Excel')).length;
  const powerBICount = projectsData.filter(project => project.skills.includes('Power BI')).length;
  const mySQLCount = projectsData.filter(project => project.skills.includes('MySQL')).length;
  const pythonCount = projectsData.filter(project => project.skills.includes('Pandas')).length;
  return (
    <section className="ftco-section" id="project-section">
      <div className="container">
        <div className="projects-row justify-content-center mb-5 pb-5" id="projects">
          <div className="col-md-7 heading-section text-center">
            <h1 className="big big-2">Projects</h1>
            <h2 className="mb-4">Projects</h2>
            <p>Below are the Data Analytics projects on Excel, Power BI, MySQL & Python.</p>
          </div>
          <div className="projects-count">
            <img src={ExcelImg} className="project_icon" alt="Skill 1" />
            <p className="Project_No">{excelCount}</p>
            <img src={PowerBIImg} className="project_icon" alt="Skill 2" />
            <p className="Project_No">{powerBICount}</p>
            <img src={MySQLImg} className="project_icon" alt="Skill 3" />
            <p className="Project_No">{mySQLCount}</p>
            <img src={PythonImg} className="project_icon" alt="Skill 4" />
            <p className="Project_No">{pythonCount}</p>
          </div>
        </div>
      </div>

      <div className="projects-row d-flex">
        {projectsData.map((project, index) => (
          <div className="col-md-4 d-flex ftco-" id="My-Projects" key={index}>
            <div className="blog-entry justify-content-end">
              <div className="img project-img">
                <a href={project.links.live_link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} className="img-fluid" alt={project.title} />
                </a>
              </div>
              <div className="text mt-3 float-right d-block">
                <h3 className="heading">
                  <a href={project.links.live_link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                </h3>
                <div className="project-details">
                  <div className="Domain-Div">
                    <div className="row-dir">
                      <h3 className="Domain">Domain:&nbsp;</h3>
                      <h3 className="D_Name">{project.domain}</h3>
                    </div>
                    <div className="row-dir">
                      <h3 className="Skills">Skills:&nbsp;</h3>
                      <div className="Skills-Div">
                        {project.skills.map((skill, i) => (
                          <ul className={`Skill_Name${i + 1}`} key={i}>{skill}</ul>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="social-media">
                    {project.links.linkedin && (
                      <button className="Linkidin-post">
                        <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className="Linkidin-post">
                          LinkedIn Engagement <img src={LinkedinImg} className="button-img" alt="LinkedIn" />
                        </a>
                      </button>
                    )}
                    {project.links.github && (
                      <button className="Github-file">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="Github-file">
                          GitHub <img src={GithubImg} className="button-img" alt="GitHub" />
                        </a>
                      </button>
                    )}
                    {project.links.youtube && (
                      <button className="utube-vedio">
                        <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="utube-vedio">
                          Video Presentation <img src={YoutubeImg} className="button-img" alt="YouTube" />
                        </a>
                      </button>
                    )}
                  </div>
                </div>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
