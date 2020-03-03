import React from 'react';

import Service from './Service.jsx';

const ServiceList = ({serviceList, currCat}) => {
    return serviceList.map((singleService, idx) => {

        if (currCat === 'All' || currCat === singleService.category){
        return (
                <Service key={idx} singleService={ singleService } />
            );
        }
        return false;
    });
}

export default ServiceList;