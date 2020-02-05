import React from 'react';
import './Services.scss';
import  { serviceList } from './Services.js'

const ServiceList = () => {
    return serviceList.map((serviceList, idx) => {
        return (
            <div key={ idx } className={ 'ServiceList'}>
                <img src={ serviceList.img} alt={ serviceList.Title} />
                <h3>{ serviceList.Title}</h3>
            </div>
        );
    });
}

const Services = () => {
    return(
        <div className='Services'>
            <h2> Services</h2>
            <ServiceList />
        </div>
    )
}

export default Services;