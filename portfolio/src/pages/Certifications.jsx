import React from "react";
import certificationsData from "../data/certificationsData";

const Certifications = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <div className="col-md-7 heading-section text-center">
            <h2 className="mb-4">Certificates</h2>
            <p>Below are the certifications I have earned in various technologies.</p>
          </div>
        </div>
        <div className="row">
          {certificationsData.map((cert) => (
            console.log(cert),
            <div className="col-md-4 mb-4" key={cert.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={cert.image}
                  className="card-img-top"
                  alt={cert.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{cert.title}</h5>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mt-auto"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;