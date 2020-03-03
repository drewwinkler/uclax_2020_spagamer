import React, { useState } from 'react';

import Lightbox from '../../Lightbox/Lightbox.jsx';

const Service = (props) => {

    const [ showLightbox, setShowLightbox ] = useState('false');

    const turnLightOn = () => {
        setShowLightbox('true')
    }
    const turnLightOff = () => {
        setShowLightbox('false')
    }

    return (
        <div className='Service'>
                <img 
                onClick={ turnLightOn }
                src={ props.singleService.image } 
                alt={ props.singleService.title } 
                />
                <h3>{ props.singleService.title}: Category: { props.singleService.category }</h3>
                <Lightbox 
                show={ showLightbox } 
                turnLightOff={turnLightOff}
                imageURL={ props.singleService.image }
                imageALT={ props.singleService.title }
            />
            </div>
    )
}

export default Service;

