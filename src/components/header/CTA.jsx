import React from "react";
import CV from "../../assests/Tanya's Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-primary">
        Download Resume
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        style={{ marginLeft: "5%" }}
      >
        'Let's Talk'
      </a>
    </div>
  );
};

export default CTA;
