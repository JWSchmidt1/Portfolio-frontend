import React, { useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'

import HomeIntro from '../components/Home/HomeIntro';
import HomeGallery from '../components/Home/HomeGallery';
import HomeAbout from '../components/Home/HomeAbout'
import HomeContact from '../components/Home/HomeContact';

import ThemeToggle from '../components/ThemeToggle';

const Home = () => {

    const [ isLoading, setIsLoading ] = useState( true );

    return (
        <>
            <div className='homeCon'>
                {/* { isLoading ? (
                    <LoadingScreen setIsLoading={ setIsLoading } />
                ) : (
                    <Intro />
                ) } */}
                <HomeIntro />
                <HomeGallery />
                <HomeAbout />
                <HomeContact />
            </div>
        </>
    )
}

export default Home