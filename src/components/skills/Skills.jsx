import React from "react";
import "./Skills.css";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { AiOutlineBoxPlot } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
const Skills = () => {
  return (
    <section id="skills">
      <center>
        <h3>What Skills I Have</h3>
      </center>
      <h2>Skills</h2>

      <div className="container skills__container">
        <div className="skills_one">
          <h4>
            HTML
            <div>
              <ImHtmlFive size={40} />
            </div>
          </h4>
          <h4>
            CSS
            <div>
              <SiCss3 size={40} />
            </div>
          </h4>
          <h4>
            JAVASCRIPT
            <div>
              <TbBrandJavascript size={40} />
            </div>
          </h4>
          <h4>
            BOOTSTRAP
            <div>
              <BsFillBootstrapFill size={40} />
            </div>
          </h4>
          <h4>
            Python
            <div>
              <SiPython size={40} />
            </div>
          </h4>
          <h4>
            JAVA
            <div>
              <FaJava size={40} />
            </div>
          </h4>
          <h4>
            SQL
            <div>
              <SiMysql size={40} />
            </div>
          </h4>
          <h4>
            REACT JS
            <div>
              <FaReact size={40} />
            </div>
          </h4>

          <h4>
            NODE JS
            <div>
              <FaReact size={40} />
            </div>
          </h4>

          <h4>
            MONGO DB
            <div>
              <FaReact size={40} />
            </div>
          </h4>

          <h4>
            PHP
            <div>
              <FaPhp size={40} />
            </div>
          </h4>

          <h4>
            NUMPY
            <div>
              <SiNumpy size={40} />
            </div>
          </h4>

          <h4>
            PANDAS
            <div>
              <SiPandas size={40} />
            </div>
          </h4>

          <h4>
            MATPLOTLIB
            <div>
              <AiOutlineBoxPlot size={40} />
            </div>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
