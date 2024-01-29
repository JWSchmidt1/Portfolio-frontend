import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import logowhite from '../assets/images/logo/logo-white-short.png'
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'

import { useGetData } from '../hooks/useRequestData'

const Footer = () => {

  const { error, loading, data, getData } = useGetData();

  useEffect( () => {

    getData( "http://localhost:5333/navigation/admin" );

  }, [] );

  return (
    <div className='footerCon'>
      {/* <Link className='footerLogo' to=''>jws.</Link> */ }
      <Link to='' className='footerLogo'><img src={ logowhite } alt="" /></Link>
      <div className='footerLinks'>
        <nav>
          <ul>
            {
              data && data.map( ( e ) =>
                <li>
                  <Link to={ e.path }>{ e.name }</Link>
                </li>
              ) }
          </ul>
        </nav>
      </div>
      <div className="footerSocial">
            <FaLinkedin className='footerSocialIcon' />
            <FaGithubSquare className='footerSocialIcon' />
      </div>
      <div className='footerCopyright'>
        <p className='footerCopyrightText'>© 2023 JWSchmidt.com, all rights reserved</p>
      </div>
    </div>
  )
}

export default Footer