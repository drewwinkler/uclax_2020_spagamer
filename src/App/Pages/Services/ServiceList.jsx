import React from 'react';

import ServiceList from './ServiceList.jsx'

const ServiceList = ({serviceList, currCat}) => {
    return serviceList.map((singleService, idx) => {

        if (currCat === 'All' || currCat === singleService.category){
        return (
                <Service key={idx} singleService={ singleService } />
            );
        }
    });
}