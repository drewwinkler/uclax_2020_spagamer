import React, { useState, useEffect } from 'react';
import './Staff.scss';
//import { staffMembers } from './Staff.js';
import API from '../../../common/API.js';

const StaffMembers = () => {    


    //1. Set Up State to keep track of  data from server
    const [staffMembers, setStaffMembers] = useState([])

    //Only  do this on mount
    useEffect(() => {
    //2. Retrive the data from server
    API.get('staff').then((result) => {
    //3. Update staffMembers with data from server
    console.log('Staff Server Response', result);
    setStaffMembers(result.data);
    });
    }, [ ])

    return staffMembers.map((staffMember, idx) => {
        return ( 
            <div key={ idx } className={ 'StaffMember' }>
                <img src={ staffMember.image} alt={ staffMember.name} />
                <h3>{ staffMember.name }</h3>
            </div>
        );
    });
}

const Staff = () => {
    return (
        <div className={ 'Staff' }>
            <h2>Staff</h2>
            <div className="container">
            <StaffMembers />
            </div>
        </div>
    )
}

export default Staff;