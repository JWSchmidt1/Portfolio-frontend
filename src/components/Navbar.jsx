import React from 'react';
import { Link } from 'react-scroll';
import "../scss/navbar.scss";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className='navigation'>
      <ul>
        <li className='navList'>
          <NavLink
            to='/'
            className="navLink"
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li className='navList'>
          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={100}
            className="navLink"
          >
            <span>About</span>
          </Link>
        </li>
        <li className='navList'>
          <Link
            to='portfolio'
            spy={true}
            smooth={true}
            duration={100}
            className="navLink"
          >
            <span>Portfolio</span>
          </Link>
        </li>
        <li className='navList'>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={100}
            className="navLink"
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect, useState } from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import "../scss/navbar.scss"

// import { useGetData } from '../hooks/useRequestData'

// import gsap from 'gsap'

// const Navbar = () => {

//     const { error, loading, data, getData } = useGetData();

//     useEffect( () => {

//         getData( "http://localhost:5333/navigation/admin" );

//     }, [] );

//     return (
//         <nav className='navigation'>
//             <ul>
//                 { data && data.map( ( e, index ) =>
//                     <li className='navList' key={ 'navList' + index }>
//                         <NavLink
//                             to={ e.path }
//                             className="navLink" >
//                             <span>{ e.name }</span>
//                         </NavLink>
//                     </li>
//                 )
//                 }
//                 <li className='navList'>
//                     <NavLink
//                         to='/'
//                         className="navLink" >
//                         <span>Home</span>
//                     </NavLink>
//                 </li>
//                 <li className='navList'>
//                     <NavLink
//                         to='#about'
//                         className="navLink" >
//                         <span>About</span>
//                     </NavLink>
//                 </li>
//                 <li className='navList'>
//                     <NavLink
//                         to='#portfolio'
//                         className="navLink" >
//                         <span>Portfolio</span>
//                     </NavLink>
//                 </li>
//                 <li className='navList'>
//                     <NavLink
//                         to='#contact'
//                         className="navLink" >
//                         <span>Contact</span>
//                     </NavLink>
//                 </li>
//             </ul>
//         </nav>
//     )
// }

// export default Navbar
