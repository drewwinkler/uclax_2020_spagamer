import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import { emailCheck } from '..//..//..//common/utilities.js';
import classnames from 'classnames';
import keycode from 'keycode';
import API from '../../../common/API.js'

const ContactForm = () => {

    //KeepTrack of State
    const [emailIsValid,updateEmailIsValid] = useState(true);
    const [formIsValid, updateFormIsValid] = useState(true);
    const [errors, updateErrorsArray] = useState([]);

    //refs  : :  Giving React's Virtual DOM access to the Physical DOM elements on the page
    const emailRef = useRef();
    const messageRef = useRef();

    const HandleFormSubmit = () => {
        console.log('You Clicked Me');

        let errorMessages = [];

        // Validate the user filled in the form
        if (emailRef.current.value.length < 4) {
            errorMessages.push({
                message: 'You forgot to fill out the Email field',
            })
        }
        if (!emailCheck(emailRef.current.value)) {
            errorMessages.push({
                message: 'The email you provided is invaild',
            })
        }
        if(messageRef.current.value.length < 1) {
            errorMessages.push({
                message: 'You forgot to fill out the Message field',
            })
        }

        updateErrorsArray(errorMessages);

        // Keep track of errors - and update the DOM with feedback if there is and error.
        if (errorMessages.length > 0) {
            updateFormIsValid(false);
        } else {
            updateFormIsValid(true);
            // If all is successful -  we want to post th data
            console.log('Post the data');

            const postData = {
                email: emailRef.current.value,
                message: messageRef.current.value,
            }

            API.post('sendmail', postData).then((result) => {
                console.log('Posting the data', result);
            });
        } 
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

    const displayErrors = () => {
        return errors.map((error,idx) =>{
            return (
                <li key={ idx }>{ error.message }</li>
            );
        });
    }

    // Handle keyboard events
    const handleKeyDown = (event) => {
        switch (keycode(event)) {
            case 'space':
            case 'enter':
                HandleFormSubmit();
                break;
            default:
                return true;
        }
    }

    //const theClassname = (formIsValid) ? 'ContactForm form-valid':'ContactForm form-invalid';

    const theClassname = classnames({
        'ContactForm':true,
        'form-valid': formIsValid,
        'form-invalid': !formIsValid,
    });

    return (
        <div className={ theClassname }>
            {
                (errors.length > 0) &&
            <div className="error-message">
                ERROR MESSAGE GOES HERE
                <ul>
                    { displayErrors() }
                </ul>
            </div>
            }


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
                        tab-index={ 0 }
                        onClick={ HandleFormSubmit }
                        onKeyDown={ handleKeyDown }
                    >Send Email</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;