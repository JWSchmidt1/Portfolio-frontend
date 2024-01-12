import React from 'react'
import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className="pageTransition"></div>
            <BsArrowLeft onClick={() => navigate(-1)} className='backArrow' />
            <h1>About me</h1>
        </div>
    )
}

export default About