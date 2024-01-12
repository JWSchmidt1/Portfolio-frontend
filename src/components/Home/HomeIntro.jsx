import React, { useEffect } from 'react'
import Navbar from '../Navbar'
import logoblack from '../../assets/images/logo/logo-black.png'
import video from '../../assets/videos/1074225410-preview.mp4'

const HomeIntro = () => {

  return (
    <div className='homeIntroCon'>
      <p className='homeIntroText'>JWSchmidt</p>
      <p className='homeIntroText red'><span>W</span>eb <span>D</span>evelopment</p>
      {/* <img src={ logoblack } alt={ logoblack } /> */}
    </div>
  )
}

export default HomeIntro