import React from 'react';
import './Lightbox.scss';

const Lightbox= (props) => {

    return (
    (props.show === "true") && 
        <div 
        className={ 'Lightbox' }
        onClick={ props.turnLightOff }
        >
            <div className={ 'Light' }>
                <img src={ props.imageURL }  alt={ props.imageALT } />
            </div>
        </div>
    );

}

export default Lightbox;