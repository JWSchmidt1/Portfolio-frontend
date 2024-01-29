import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import logoblack from '../../assets/header/intro-header-bg.jpg'
// import logoblack from '../../assets/portfolio-header-bg/Slide24.JPG'
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-scroll';

const HomeIntro = () => {

  return (
    <div className='homeIntroCon'>
      <p className='homeIntroText'>Hi, I'm Jannick W. Schmidt.</p>
      <br />
      <div className='homeIntroSubText'>
        |
        <p>Frontend</p>
        |
        <p>Web developer</p>
        |     
      </div>
      {/* <p className='homeIntroText sub'><span>W</span>eb <span>D</span>evelopment</p> */ }
      <img className='headerBG' src={ logoblack } alt={ logoblack } />

      <Link className="homeIntroDownArrowCon bounce" to='portfolio'>
        <BsArrowDown className='homeIntroDownArrow' />
      </Link>
    </div>
  )
}

export default HomeIntro