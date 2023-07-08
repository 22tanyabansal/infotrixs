import React from "react";
import "./Project.css";
import IMG1 from "../../assests/IMG1.png";
import IMG2 from "../../assests/IMG2.png";
import IMG3 from "../../assests/IMG3.png";
const Project = () => {
  return (
    <section id="Project">
      <center>
        <h4>My Recent Work</h4>
      </center>
      <h2>Project</h2>
      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Quiz App made in HTML,CSS and Javascript</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/22tanyabansal"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://dusty-quiz.surge.sh/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>
            Weather App made in HTML,CSS and Javascript to showcase weather
            details of different cities
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/22tanyabansal/Weather-App"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="http://free-weatherapp.surge.sh/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>
            A Mobile Shopping app made for buying mobiles
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/22tanyabansal/mobile-shopping.git"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://mobile-shop-psi.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
