import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import { emailCheck } from '..//..//..//common/utilities.js';

const ContactForm = () => {

    //KeepTrack of State
    const [emailIsValid,updateEmailIsValid] = useState(true)

    //refs  : :  Giving React's Virtual DOM access to the Physical DOM elements on the page
    const emailRef = useRef();
    const messageRef = useRef();

    const HandleClick = () => {
        console.log('You sent an Email');
    }

    const validateEmail = () => {
        const emailValue = emailRef.current.value;
        
        console.log('Validating email',emailValue);

        if (emailValue.length > 3 && !emailCheck(emailValue)) {
            updateEmailIsValid(false);
        } else {
            updateEmailIsValid(true);
        }
    }

    return (
        <div className={ 'ContactForm' }>
            <div className="form-group">
                    <div className="left">
                        <label htmlFor="email">Email</label>
                </div>
                <div className="right">
                    <input 
                    className={ emailIsValid ? '':'invalid'}
                    ref={ emailRef } 
                    name="email" 
                    id="email" 
                    placeholder="email@somedomain.com" 
                    onChange={ validateEmail} 
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="left">
                    <label htmlFor="Message"> Message</label>
                </div>
                <div className="right">
                    <textarea ref={ messageRef } name="message" id="message" placeholder="your message goes here." />
            </div>
        </div>
            <div className="form-group">
                <div className="left"/>
                <div className="right">
                    <button 
                        onClick={ HandleClick }
                    >Send Email</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;