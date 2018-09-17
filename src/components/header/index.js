import React from 'react';

export default ({image, heading, subtext, imagePosition}) => {
    return <div
        className="uk-flex-center uk-background-blend-multiply uk-background-cover uk-background-primary uk-flex uk-flex-middle uk-height-medium uk-light uk-overflow-hidden"
        style={{backgroundImage:`url(${image})`, backgroundPosition:imagePosition}}>
    <div className="uk-text-center uk-width-1-2@m">
        <div className="uk-flex-center uk-overlay"><br/>
            <h1 className='uk-heading-line'>{heading}</h1>
            <p uk-parallax="opacity: 0,1; scale: 0.5,1; viewport: 0.5;">{subtext}</p></div>
    </div>
</div>
};