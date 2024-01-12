import React from 'react'
import { BsArrowLeft } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'
// import gsap from 'gsap'

const Contact = () => {

    // window.addEventListener( "load", () => {

    //     gsap.to( document.getElementsByClassName( "leftOpenCurtain" ), {
    //         duration: 2,
    //         left: "-125%",
    //         onComplete: () => {
    //             gsap.to(document.getElementsByClassName('leftOpenCurtain'), {
    //                 display: 'none'
    //             })
    //         }
    //     } )

    //     gsap.to( document.getElementsByClassName( "rightOpenCurtain" ), {
    //         duration: 2,
    //         right: "-126%",
    //         onComplete: () => {
    //             gsap.to(document.getElementsByClassName('rightOpenCurtain'), {
    //                 display: 'none'
    //             })
    //         }
    //     } )
    // } )

    const navigate = useNavigate()

    return (
        <div className='container'>
            <div className="leftOpenCurtain"></div>
            <div className="pageTransition"></div>
            <BsArrowLeft onClick={ () => navigate( -1 ) } className='backArrow' />
            <h1>Contact me</h1>
            <div className="rightOpenCurtain"></div>
        </div>
    )
}

export default Contact