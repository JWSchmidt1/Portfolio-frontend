import React from 'react'
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

const HomeAbout = () => {
    return (
        <div className='container homeAboutCon' id='about'>
            <div className='homeAboutText'>
                <BiSolidQuoteAltLeft className='aboutQuoteIcon' />
                <p>
                I'm Jannick, a web developer based in Denmark, specializing in React JS. Graduated from Viden Djurs College in 2023, my passion lies in bringing people's ideas to life through functional and innovative web solutions.
                </p>
            </div>
        </div>
    )
}

export default HomeAbout