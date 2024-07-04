import './skills.css'
import React from 'react'
import backend from '../assets/backEnd.jpg' 
import DataAnalyst from '../assets/dataAnalyst.png'
import webDesign from '../assets/website-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">I am a skilled software developer with experience in creating and designing applications</span>
        <div className="skillbars">
            <div className="skillbar">
                <img src={backend} alt="backend" className="skillBarImg" />
                <div className="skillbarText">
                    <h2>API and backend services</h2>
                    <p>This is a demo for now</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={webDesign} alt="webdesign" className="skillBarImg" />
                <div className="skillbarText">
                    <h2>Website Design</h2>
                    <p>This is a demo for now</p>
                </div>
            </div>

            <div className="skillbar">
                <img src={DataAnalyst} alt="data-analysis" className="skillBarImg" />
                <div className="skillbarText">
                    <h2>Data Analysis with sql and powerBi</h2>
                    <p>This is also another demo</p>
                </div>
            </div>


        </div>
    </section>
  )
}

export default Skills