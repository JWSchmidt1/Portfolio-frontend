import React, { useState, useEffect } from 'react';
import '../scss/style.scss';

const LoadingScreen = ( { setIsLoading } ) => {

    // const [ isLoading, setIsLoading ] = useState( true );

    useEffect( () => {

        const timeout = setTimeout( () => {

            setIsLoading( false );
            document.body.classList.remove( 'hide-scrollbars' );

        }, 6500 );

        document.body.classList.add( 'hide-scrollbars' );

        if ( setIsLoading ) {

            return () => clearTimeout( timeout );
        }

    }, [ setIsLoading ] );

    return (
        <div style={ { display: setIsLoading ? 'inline-block' : 'none' } }>
            <div className="glitchCon">
                <div title='LOADING' className='glitchTxt'>
                    LOADING
                    <div className='loadingBar'></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;