import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import { useGetData } from '../hooks/useRequestData';

const Panel = ( { label, content, activeTab, index, activateTab } ) => {
  const [ height, setHeight ] = useState( 0 );

  useEffect( () => {
    const timer = setTimeout( () => {
      const el = document.querySelector( `.panel-${ index } .panel__inner` );
      const newHeight = el.scrollHeight;
      setHeight( newHeight );
    }, 333 );

    return () => clearTimeout( timer );
  }, [ index ] );

  const isActive = activeTab === index;
  const innerStyle = {
    height: `${ isActive ? height : 0 }px`,
  };

  return (
    <div className={ `panel panel-${ index }` } role="tabpanel" aria-expanded={ isActive }>
      <button className="panel__label" role="tab" onClick={ activateTab }>
        { label }
      </button>
      <div className="panel__inner" style={ innerStyle } aria-hidden={ !isActive }>
        <p className="panel__content">{ content }</p>
      </div>
    </div>
  );
};

const FAQ = ( { panels } ) => {

  const { error, loading, data, getData } = useGetData();

  const [ activeTab, setActiveTab ] = useState( -1 );

  const activateTab = ( index ) => {
    setActiveTab( ( prev ) => ( prev === index ? -1 : index ) );
  };

  return (
    <div className="accordion" role="tablist" id='FAQ'>

      { error && <ErrorMessage /> }
      { loading && <Loader /> }

      <h2>FAQ.</h2>

      { panels.map( ( panel, index ) => (
        <Panel
          key={ index }
          activeTab={ activeTab }
          index={ index }
          { ...panel }
          activateTab={ () => activateTab( index ) }
        />
      ) ) }
    </div>
  );
};

export default FAQ;
