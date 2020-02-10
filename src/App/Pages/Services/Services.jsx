import React from 'react';
import './Services.scss';
import '../Pages.scss';
import  { serviceList } from './servicesArray.js'

const ServiceList = () => {
    console.log('serviceList', serviceList);
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
        <div className={ 'Services' }>
            <h2> Services</h2>
            <div className="container">
            <ServiceList />
            </div>
        </div>
    )
}

export default Services;