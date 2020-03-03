import React, { useEffect, useState }  from 'react';
import './Services.scss';
import '../Pages.scss';
import API from '../../common/API';
import Categories from './Categories.jsx'
import ServiceList from './ServiceList.jsx'


const Services = () => {

    const [ serviceList, setServiceList ] = useState([ ]);
    const [ categories, setCategories ] = useState([ ]);
    const [ currCat, setCurrCat ] = useState('All');

    useEffect(() => {
        API.get('services/gallery').then((result) => {
        console.log('Services Server Response', result);
        setServiceList(result.data);
        });


        API.get('services/categories').then((result) => {
            console.log('Categories Server Response', result);
            setCategories(result.data);
        });
    },[] );


    return(
        <div className={ 'Services' }>
            <h2> Services</h2>
            <Categories categories={ categories } currCat={ currCat } 
            setCurrCat={ setCurrCat }
            />
            <div className="container">
            <ServiceList serviceList={ serviceList } currCat={ currCat} />
            </div>
        </div>
    );
}

export default Services;