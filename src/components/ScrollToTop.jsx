import React, { useState, useEffect } from "react";
import { FiChevronUp } from "react-icons/fi";

const ScrollToTop = () => {
    const [ showTopBtn, setShowTopBtn ] = useState( false );
    useEffect( () => {
        window.addEventListener( "scroll", () => {
            if ( window.scrollY > 400 ) {
                setShowTopBtn( true );
            } else {
                setShowTopBtn( false );
            }
        } );
    }, [] );
    const goToTop = () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth",
        } );
    };
    return (
        <>
            { " " }
            { showTopBtn && (
                <div className="top-to-btm" onClick={ goToTop }>
                    <FiChevronUp
                        className="icon-style"
                    />
                </div>
            ) }{ " " }
        </>
    );
};
export default ScrollToTop;