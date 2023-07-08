import React from "react";
import "./Nav.css";
import { HiHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { FaRProject } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <div className="makeItCenter">
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <HiHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#" ? "active" : ""}
        >
          <GiSkills />
        </a>
        <a
          href="#Project"
          onClick={() => setActiveNav("#Project")}
          className={activeNav === "#" ? "active" : ""}
        >
          <FaRProject />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#" ? "active" : ""}
        >
          <MdContactPhone />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
