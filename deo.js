import './works.css';
import { Link } from 'react-scroll';
import React from 'react'
import portfolio1 from '../assets/portfolio-1.png';
import portfolio2 from '../assets/portfolio-2.png';
import portfolio3 from '../assets/portfolio-3.png';
import portfolio4 from '../assets/portfolio-4.png';
import portfolio5 from '../assets/portfolio-5.png';
import portfolio6 from '../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Porfolio</h2>
        <span className="worksDesc">I take pride in paying attention to very little details and yea.</span>
        <div className="worksImgs">
            <div className="container">
                <img src={portfolio1} alt="portfolioImg" className="worksImg" />
                <h3 className="projectTitle">Project A</h3>
                <p className="projectDesc"></p>
                <div className="pskills">
                    <li className='pskill'>React</li>
                    <li className='pskill'>Node</li>
                    <li className='pskill'>Mongodb</li>
                </div>
                <div className="plinks">
                    <a href="#" className="plink">Demo</a>
                    <a href="#" className="plink">Source</a>
                </div>
            </div>
            
            <img src={portfolio2} alt="portfolioImg" className="worksImg" />
            <img src={portfolio3} alt="portfolioImg" className="worksImg" />
            <img src={portfolio4} alt="portfolioImg" className="worksImg" />
            <img src={portfolio5} alt="portfolioImg" className="worksImg" />
            <img src={portfolio6} alt="portfolioImg" className="worksImg" />
        </div>
        <Link>
            <button className="workbtn">
                See more
            </button>
        </Link>
    </section>
  )
}

export default Works