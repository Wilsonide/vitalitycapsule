import React from 'react'
import './navbar.css'
import Logo from "../assets/logos.png"
import Img from "../assets/contact.png"
import menu from "../assets/menu.png"
import { Link } from 'react-scroll'
import { useState } from 'react'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={Logo} alt="Logo" className='logo'/>
        <div className='deskstopMenu'>
            <Link activeClass='active' to='intro' spy={true} offset={-50} smooth={true}duration={500} className='deskstopMenuListItem'>
              Home
            </Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500} className='deskstopMenuListItem'>
              About
            </Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} smooth={true} duration={500} className='deskstopMenuListItem'>
              Portfolio
            </Link>
        </div>
        <button className='deskstopMenuButton' 
          onClick={
           () => document.getElementById('contacts').scrollIntoView({behavior: 'smooth'})
          }
        >
            <img src={Img} alt="contact me" />
            <span className='contactText'>Contact Me</span>
        </button>

        <img src={menu} alt="menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} offset={-50} smooth={true}duration={500} className='navMenuListItem' onClick={() => setShowMenu(false)}>
              Home
            </Link>
            <Link activeClass='active' to='skills' spy={true} offset={-50} smooth={true} duration={500} className='navMenuListItem' onClick={() => setShowMenu(false)}>
              About
            </Link>
            <Link activeClass='active' to='works' spy={true} offset={-50} smooth={true} duration={500} className='navMenuListItem' onClick={() => setShowMenu(false)}>
              Portfolio
            </Link>
            <Link activeClass='active' to='contacts' spy={true} offset={-50} smooth={true} duration={500} className='navMenuListItem' onClick={() => setShowMenu(false)}>
              Contact
            </Link>
        </div>

    </nav>
  )
}

export default Navbar