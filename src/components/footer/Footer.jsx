import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">PORTFOLIO</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#Project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer