import React, { useEffect, useState, useRef } from 'react'
import img from '../../assets/images/programming-background.jpg'
import { usePostData } from '../../hooks/useRequestData'
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'

const HomeContact = () => {

    const { data, loading, error, postData } = usePostData()

    const [ name, setName ] = useState()
    const [ email, setEmail ] = useState()
    const [ subject, setSubject ] = useState()
    const [ message, setMessage ] = useState()

    const refForm = useRef()

    useEffect( () => {

        if ( data ) {

            // tøm formularen
            // document.forms[0].reset()
            refForm.current.reset()

        }

    }, [ data ] )

    const handleSubmit = ( e ) => {

        e.preventDefault()

        const fd = new FormData()
        fd.append( "name", name )
        fd.append( "email", email )
        fd.append( "subject", subject )
        fd.append( "message", message )

        // postData( "https://portfolio-backend-lqpa.onrender.com/contact", fd )
        postData( process.env.REACT_APP_APIKey+'/contact', fd )

        console.log( fd )

        // e.target.reset()

    }

    return (
        <div className='homeContact' id='contact'>

            <div className='contactInfo'>
                <h2>Contact me</h2>
                <p><AiOutlinePhone className='contactIcon' /><a href='tel:+45 53 55 13 09' target='_blank'>+45 53 55 13 09</a></p>
                <p><AiOutlineMail className='contactIcon' /><a href='mailto:jannickws@hotmail.com' target='_blank'>Jannickws@hotmail.com</a></p>
            </div>
            <div className="homeFormCon">

                {/* <h2>Contact me</h2>
                <p>Phone: <a href='tel:+45 53 55 13 09' target='_blank'>+45 53 55 13 09</a></p>
            <p>Mail: <a href='mailto:jannickws@hotmail.com' target='_blank'>Jannickws@hotmail.com</a></p> */}
                {/* <p className='mt-2'>Or use the form below</p> */ }

                <form onSubmit={ handleSubmit } ref={ refForm }>
                    <input onInput={ e => setName( e.target.value ) } type="text" name='name' placeholder='Your Name *' required />

                    <input onInput={ e => setEmail( e.target.value ) } type="email" name='email' placeholder='Your Email *' required />

                    <input onInput={ e => setSubject( e.target.value ) } type="text" name='subject' placeholder='Your Subject' />

                    <textarea onInput={ e => setMessage( e.target.value ) } type="text" name='message' placeholder='Your Message *' required />

                    <button>Send</button>
                </form>

            </div>


            {/* <div className="contactImgCon">
                <img src={ img } alt="" />
                Image by <a href="https://www.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_38669459.htm#query=web%20develop&position=1&from_view=search&track=ais">Freepik</a>
            </div> */}

        </div>
    )
}

export default HomeContact