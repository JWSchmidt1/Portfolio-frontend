import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { useGetData } from '../../hooks/useRequestData';

import { PiArrowUpRightBold, PiArrowDownRightBold } from 'react-icons/pi';
import { RxEnterFullScreen, RxExitFullScreen } from 'react-icons/rx'

import { gsap } from 'gsap';
import ReactImageGallery from 'react-image-gallery';

import ErrorMessage from '../ErrorMessage';
import Loader from '../Loader';

const HomeGallery = () => {

    // http://localhost:5333/images/gallery

    const { error, loading, data, getData } = useGetData();

    const [ showAll, setShowAll ] = useState( false );
    const [ visibleItems, setVisibleItems ] = useState( 4 );

    const [ lightbox, setLightbox ] = useState( false )
    const [ lightboxImages, setLightboxImages ] = useState( [] );

    useEffect( () => {
        getData( `${process.env.REACT_APP_APIKey}/gallery` );
        // getData( 'http://localhost:5333/gallery' );
    }, [] );

    useEffect( () => {
        if ( data ) {
            const container = document.querySelector( '.newProjectsCon' );
            container.style.maxHeight = showAll ? `${ container.scrollHeight }px` : `${ visibleItems * 150 }px`; // Assuming each project card has a height of 150px
        }
    }, [ data, showAll, visibleItems ] );


    const openLightbox = ( gallery ) => {
        setLightboxImages( gallery );
        setLightbox( true );
        console.log( "lightboxImages:", gallery ); // Add this line

    };

    const toggleShowAll = () => {
        setShowAll( !showAll );
        setVisibleItems( showAll ? 4 : data.length );
    };


    const closeLightbox = () => {
        gsap.to( 'body', { overflowY: 'scroll' } )
        gsap.to( '.fullscreenSlider', {
            duration: 0.5,
            width: '0%',
            onComplete: () => {
                setLightbox( false );
            }
        } )
    };

    useEffect( () => {
        if ( lightbox ) {
            gsap.to( 'body', { overflowY: 'hidden' } )
            gsap.to( '.fullscreenSlider', {
                duration: 0.5,
                width: '100%',
            } );
        }
    }, [ lightbox ] );

    const image = lightboxImages.map( ( galleryImage, galleryIndex ) => ( {
        original: `${ process.env.REACT_APP_APIKey }/images/gallery/${ galleryImage }`,
        thumbnail: `${ process.env.REACT_APP_APIKey }/images/gallery/${ galleryImage }`,
        originalHeight: '700',
        disableSwipe: false
    } ) );

    return (
        <div className='homeGalleryCon' id='portfolio'>

            { error && <ErrorMessage /> }
            { loading && <Loader /> }

            <h2>PROJECTS.</h2>

            <div className={ `newProjectsCon ${ showAll ? 'expanded' : '' }` }>
                { data &&
                    data.slice( 0, visibleItems ).map( ( e, index ) => (
                        <div
                            key={ index }
                            className='homeProjectsCard'
                            // style={ { backgroundImage: `url(https://portfolio-backend-lqpa.onrender.com/images/gallery/${ e.image })` } }
                            style={ { fontWeight: 'bold', backgroundImage: `url(${ process.env.REACT_APP_APIKey }/images/gallery/${ e.image })` } }

                        >
                            <RxEnterFullScreen className='openFullscreen' onClick={ () => openLightbox( e.gallery ) } />
                            <div className='homeProjectsContent info'>
                                <p className='homeProjectsTitle'>{ e.title }</p>
                                <p className='homeProjectsText'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                                    praesentium laborum non quod iste aut dolores reprehenderit harum repellat
                                    architecto.
                                </p>
                                <button className='btn'>TESTER</button>
                            </div>
                        </div>

                    ) ) }
            </div>

            { lightbox && (
                <div className='fullscreenSlider'>
                    <RxExitFullScreen
                        className='closeFullscreen'
                        onClick={ closeLightbox }
                    />
                    {/* { lightboxImages.map( ( galleryImage, galleryIndex ) => (
                        <img
                            key={ galleryIndex }
                            src={ `http://localhost:5333/images/gallery/${ galleryImage }` }
                            alt={ `Gallery Image ${ galleryIndex + 1 }` }
                        />
                    ) ) } */}
                    <ReactImageGallery showIndex={ true } showPlayButton={ false } showFullscreenButton={ false } items={ image } />
                </div>
            ) }

            { !showAll && (
                <button className='galleryShowAll' onClick={ toggleShowAll }>
                    View All <PiArrowDownRightBold className='linkIcon' />
                </button>
            ) }
            { showAll && (
                <Link
                    to='portfolio'
                    spy={ true }
                    smooth={ true }
                    duration={ 1 }
                    onClick={ toggleShowAll }
                    className="galleryShowAll"
                >
                    Show Less <PiArrowUpRightBold className='linkIcon' />
                </Link>
            ) }
        </div>
    );
};

export default HomeGallery;
