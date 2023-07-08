import React from "react";
import "./About.css";
import CHIKU from "../../assests/Chiku.jpeg";
import { RiAwardFill } from "react-icons/ri";
import { GoProject } from "react-icons/go";
const About = () => {
  return (
    <section id="about">
      <h1>About Me</h1>

      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={CHIKU} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <RiAwardFill className="about__icon" />
              <h4>Experience</h4>
              <h5>
                Pursuing Btech in Computer Engineering From <b>BVDUCOEP</b>
              </h5>
            </div>

            <div className="about__card">
              <GoProject className="about__icon" />
              <h4>Projects</h4>
              <h5>10+ Completed</h5>
            </div>
          </div>
          <p>
          Hi, I am Full Stack Web Developer with acquaintance in creating websites through various Web technologies. 
          I create beautiful & functional websites for small businesses. My expertise is in the area of responsive design. With every line of code, I strive to make the web a beautiful place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
