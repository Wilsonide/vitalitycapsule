import './footer.css';
import FacebookIcon from '../assets/facebook-icon.png'
import LinkedinIcon from '../assets/linkedin-icon.png'
import GithubIcon from '../assets/github.png'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="contains">
        <span className='footerText'>
          Copyright &#169; 2024 Wilson Icheku. All rights reserved.
        </span>
        <div className="links">
          <img src={FacebookIcon} alt="facebook" className="link link1" />
          <img src={LinkedinIcon} alt="linkedin" className="link" />
          <img src={GithubIcon} alt="github" className="link" />
        </div>
      </div>
      
    </footer>
  )
}

export default Footer