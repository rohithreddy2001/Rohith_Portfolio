// --- Projects.jsx ---
import React from 'react';
import projectsData from '../data/projectsData';
// import ExcelImg from '../assets/images/Excel.png';
import PowerBIImg from '../assets/images/powerBi.png';
// import MySQLImg from '../assets/images/database.png';
// import PythonImg from '../assets/images/python.png';
// import LinkedinImg from '../assets/images/linkedin.png';
// import GithubImg from '../assets/images/github.png';
// import YoutubeImg from '../assets/images/youtube.png';


const Projects = () => {
  const excelCount = projectsData.filter(project => project.skills.includes('Excel')).length;
  const powerBICount = projectsData.filter(project => project.skills.includes('Power BI')).length;
  const mySQLCount = projectsData.filter(project => project.skills.includes('MySQL')).length;
  const pythonCount = projectsData.filter(project => project.skills.includes('Pandas') || project.skills.includes('Flask')).length;
  const reactCount = projectsData.filter(project => project.skills.includes('React')).length;
  return (
    <section className="ftco-section" id="project-section">
      <div className="container">
        <div className="projects-row justify-content-center mb-5 pb-5" id="projects">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Projects</h2>
            <p>Below are the projects on different technologies.</p>
          </div>
          <div className="projects-count">
            <img src="https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg" alt="Excel" width="32" className='project_icon'/>
            <p className="Project_No">{excelCount}</p>
            <img src={PowerBIImg} className="project_icon" alt="Skill 2" />
            <p className="Project_No">{powerBICount}</p>
            <img src="https://www.mysql.com/common/logos/mysql-logo.svg" alt="MySQL" width="32" className='project_icon'/>
            <p className="Project_No">{mySQLCount}</p>
            <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" alt="Python" width="32" className='project_icon'/>
            <p className="Project_No">{pythonCount}</p>
            <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" alt="React" width="32" className='project_icon'/>
            <p className='Project_No'>{reactCount}</p>
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
                          LinkedIn Engagement <span class="fab fa-linkedin"></span>
                        </a>
                      </button>
                    )}
                    {project.links.github && (
                      <button className="Github-file">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="Github-file">
                          GitHub <span className="fab fa-github"></span>
                        </a>
                      </button>
                    )}
                    {project.links.youtube && (
                      <button className="utube-vedio">
                        <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="utube-vedio">
                          Video Presentation <span class="fab fa-youtube"></span>
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
