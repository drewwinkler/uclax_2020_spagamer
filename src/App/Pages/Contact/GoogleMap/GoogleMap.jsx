import React from 'react';
import './GoogleMap.scss';

import GoogleMapReact from 'google-map-react';
const googleApiKey = 'AIzaSyBJptE3Te02Kozh8bqpBwaeA7hc3onQmBY';
const googleCoords = {
    lat: 34.134617,
    lng: -118.019816,
}


const GoogleMap = () => {
    return (
        <div className={ "GoogleMap" }>
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleApiKey }}
                defaultCenter={googleCoords}
                defaultZoom={ 14 }
                initialCenter
            />
        </div>
    );
}

export default GoogleMap;