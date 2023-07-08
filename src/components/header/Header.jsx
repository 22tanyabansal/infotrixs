import React from "react";
import "./Header.css";
import CTA from "./CTA";

import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1>Tanya Bansal</h1>
        <h3 className="text-light">Full Stack Web Developer</h3>
        <CTA />
        <HeaderSocials />
        <div className="alignIT">
          
          {/* <div className="me">
            <img src={ME} alt="me" />
          </div> */}
        </div>

        <a href="#contact" className="scroll__down"></a>
      </div>
    </header>
  );
};

export default Header;
