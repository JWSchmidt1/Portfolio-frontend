import React, { useState } from 'react'

import HomeIntro from '../components/Home/HomeIntro';
import HomeGallery from '../components/Home/HomeGallery';
import HomeAbout from '../components/Home/HomeAbout'
import HomeContact from '../components/Home/HomeContact';

import FAQ from '../components/FAQ';
import Panels from '../components/Panels';
import { BsFillChatQuoteFill } from 'react-icons/bs';

import Divider from '@mui/material/Divider';

const Home = () => {

    return (
        <>
            <div className='homeCon'>
                <HomeIntro />
                <HomeGallery />
                <div className="divider"></div>
                {/* <HomeAbout /> */}
                <FAQ panels={ Panels } />
                <div className="divider"></div>
                <HomeContact />
            </div>
        </>
    )
}

export default Home