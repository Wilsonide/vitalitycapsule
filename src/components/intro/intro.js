import React from 'react'
import './intro.css'
import Img from "../assets/hireme.png"
import bg from '../assets/profileImage.png'
import { Link } from 'react-scroll'


const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">
                I'm <span className="brand">Wilson</span><br/>A Software Developer
            </span>
            <p className="intropara">
                I am a skilled software developer with experience in <br/>creating and designing applications
            </p>
            <a 
            href='mailto:ichekuwilson538@gmail.com'
            target="_blank"
            >
                <button className="btn">
                    <img src={Img} alt="hire me" />
                    Hire me
                </button>
            </a>
        </div>
        <img src={bg} alt="profileImage" className="bg" />
    </section>
  )
}

export default Intro