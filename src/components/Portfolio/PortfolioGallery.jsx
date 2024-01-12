import React, { useEffect, useState, useRef } from 'react';
import { useGetData } from '../../hooks/useRequestData';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { PiArrowUpRightBold } from 'react-icons/pi';
import { Link } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

const HomeGallery = () => {
    const { error, loading, data, getData } = useGetData();
    const [showAll, setShowAll] = useState(false);
    const newProjectsConRef = useRef(null);

    useEffect(() => {
        getData("https://portfolio-backend-lqpa.onrender.com/gallery");
    }, []);

    useEffect(() => {
        if (data) {
            gsap.to('.homeProjectsCard', {
                scrollTrigger: {
                    trigger: '.homeProjectsCard',
                    start: 'bottom bottom'
                },
                duration: 0.5,
                scale: 1,
                opacity: 1,
                stagger: 0.1
            });
        }
    }, [data]);

    useEffect(() => {
        if (showAll) {
            getData("https://portfolio-backend-lqpa.onrender.com/gallery");
        }
    }, [showAll]);

    const handleShowAll = () => {
        setShowAll(!showAll);
        if (newProjectsConRef.current && !showAll) {
            newProjectsConRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const gridTemplateColumnsValue = showAll ? `repeat(${data.length}, 1fr)` : 'repeat(4, 1fr)';

    return (
        <div className='homeGalleryCon' id='portfolio'>
            <h2>Latest Projects</h2>

            <div ref={newProjectsConRef} className='newProjectsCon' style={{ gridTemplateColumns: gridTemplateColumnsValue }}>
                {data &&
                    data.map((e, index) => (
                        <div
                            key={index}
                            className='homeProjectsCard'
                            style={{ backgroundImage: `url(https://portfolio-backend-lqpa.onrender.com/images/gallery/${e.image})` }}
                        >
                            {/* ... (rest of your code) ... */}
                        </div>
                    ))}
            </div>
            <button className='galleryShowAll' onClick={handleShowAll}>
                {showAll ? 'Show Less' : 'View All'} <PiArrowUpRightBold className='linkIcon' />
            </button>
        </div>
    );
};

export default HomeGallery;
