import React, { useEffect } from "react";
import BackgroundImg from "../assets/images/homeIcon.png";

const Home = () => {
  useEffect(() => {
  const typingAnimationElement = document.getElementById("typing-animation");
  if (!typingAnimationElement) return;

  const typingTexts = ["Data Analyst", "Power BI Developer", "AI Engineer"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
      typingAnimationElement.textContent = currentText.substring(0, charIndex);
      charIndex--;
    } else {
      typingAnimationElement.textContent = currentText.substring(0, charIndex);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
      isDeleting = true;
      setTimeout(type, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === -1) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typingTexts.length;
      setTimeout(type, 500); // Pause before typing the next text
    } else {
      setTimeout(type, isDeleting ? 50 : 150); // Typing speed
    }
  }

  type();
}, []);

  return (
    <section id="home-section" className="hero">
      <div className="home-slider owl-carousel">
        <div className="slider-item">
          <div className="overlay"></div>
          <div className="container">
            <div
              className="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                className="one-third js-fullheight order-md-last img"
                style={{
                  backgroundImage: `url(${BackgroundImg})`,
                  backgroundSize: "contain", // Ensures the image fits within the container
                  backgroundPosition: "center", // Centers the image
                  backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  height: "100vh", // Reduces the height to make it smaller
                  marginBottom: "100px", // Removes extra space around the container
                  padding: "0", // Ensures no padding is added
                }}
              >
                {/* <div className="overlay"></div> */}
              </div>
              <div
                className="one-forth d-flex align-items-center ftco-"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <div className="text">
                  <span className="subheading">Hello!</span>
                  <h1 className="mb-4 mt-3">
                    I'm <span>Rohith</span>
                  </h1>

                  {/* Element to contain animated typing */}
                  <span id="typing-animation"></span>

                  <br />
                  <br />
                  <h2 style={{marginBottom: '30px', justifyContent: "center", display: "flex"}}>AI Enthusiast</h2>

                  <div className="container" style={{justifyContent: 'center', display: 'flex'}}>
                      <ul className="ftco-footer-social list-unstyled d-flex justify-content-start align-items-center mb-0" style={{gap: '20px'}}> 
                        <li className="ftco-">
                          <a href="https://www.linkedin.com/in/rohithreddyrudraiahgari/">
                            <span class="fab fa-linkedin"></span>
                          </a>
                        </li>
                        <li className="ftco-">
                          <a href="https://github.com/rohithreddy2001">
                            <span className="fab fa-github"></span>
                          </a>
                        </li>
                        <li className="ftco-">
                          <a href="https://linktr.ee/Rohith2001">
                            <span class="fas fa-link"></span>
                          </a>
                        </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;