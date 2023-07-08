import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {BsGithub} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/tanya-bansal-4b1b8a200" target="__blank"><ImLinkedin/></a>
        <a href="https://github.com/22tanyabansal" target="__blank"><BsGithub/></a>
        <a href="https://www.instagram.com/_.tanyabansal._/" target="__blank"><FaInstagram/></a> 
    </div>
  )
}


export default HeaderSocials