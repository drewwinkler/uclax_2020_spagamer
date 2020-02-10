import React from 'react';
import '../Pages.scss';
import './Contact.scss';

import Address from './Address/Address.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
import GoogleMap from './GoogleMap/GoogleMap.jsx';

const Contact = () => {
    return (
        <div className={ 'Pages Contact' }>
            <div className="row row1">
                <div className="column column1">
                    <Address/>
            </div>
            <div className="column column1">
                    <ContactForm/>
                    </div>
            </div>
            <div className="row row2">
                    <GoogleMap />
            </div>
        </div>
    );
}

export default Contact;