import React from 'react';
import './Services.scss';
import '../Pages.scss';
import { useEffect, useState } from 'react';
import API from '../../common/API';

const ServiceList = () => {

    //1. Set Up State to keep track of data from server
    const [serviceList, setServiceList] = useState([]);

    //Only do this on mount
    useEffect(() => {
        //2. Retrive data from server
        API.get('services/gallery').then((result) => {
        //3. Update service with data from server
        console.log('Services Server Response', result);
        setServiceList(result.data);
        });
    }, [])

    return serviceList.map((serviceList, idx) => {
        return (
            <div key={ idx } className={ 'ServiceList'}>
                <img src={ serviceList.image} alt={ serviceList.title} />
                <h3>{ serviceList.title}</h3>
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