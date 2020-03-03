import React, { useRef, useState } from 'react';
import './LoginForm.scss';
import { emailCheck } from '../../../common/utilities.js';
import classnames from 'classnames';
import keycode from 'keycode';
import API from '../../../common/API.js'

const LoginForm = () => {

    //KeepTrack of State
    const [usernameIsValid,updateUsernameIsValid] = useState(true);
    const [formIsValid, updateFormIsValid] = useState(true);
    const [passwordIsValid, updatePasswordIsValid] = useState(true);
    const [errors, updateErrorsArray] = useState([]);

    //refs  : :  Giving React's Virtual DOM access to the Physical DOM elements on the page
    const usernameRef = useRef();
    const passwordRef = useRef();

    const HandleFormSubmit = () => {
        console.log('You Clicked Me');

        let errorMessages = [];

        // Validate the user filled in the form
        if (usernameRef.current.value.length < 3 || !emailCheck(usernameRef.current.value) ) {
            updateUsernameIsValid(false);
            errorMessages.push({
                message: 'The email does not appear to be valid',
            })
        } else {
            updateUsernameIsValid(true);
        }
        if(passwordRef.current.value.length < 1) {
            updatePasswordIsValid(false);
            errorMessages.push({
                message: 'Your Password is Incorrect',
            })
        } else {
            updatePasswordIsValid(true);
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
                username: usernameRef.current.value,
                password: passwordRef.current.value,
            }

            API.post('login/valid', postData).then((result) => {
                console.log('Posting the data', result);
            });
        } 
    }

    const validateUsername = () => {
        const usernameValue = usernameRef.current.value;
        
        console.log('Validating Username',usernameValue);

        if (usernameValue.length > 3 && !emailCheck(usernameValue)) {
            updateUsernameIsValid(false);
        } else {
            updateUsernameIsValid(true);
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
        'LoginForm':true,
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
                        className={ usernameIsValid ? '':'invalid'}
                        ref={ usernameRef } 
                        name="email" 
                        id="email" 
                        placeholder="email@somedomain.com" 
                        onChange={ validateUsername } 
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="left">
                    <label htmlFor="password">Password</label>
                </div>
                <div className="right">
                    <input 
                        className={ passwordIsValid ? '':'invalid'}
                        ref={ passwordRef } 
                        name="password" 
                        id="password"  
                        type="password"  
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="left"/>
                <div className="right">
                    <button 
                        tab-index={ 0 }
                        onClick={ HandleFormSubmit }
                        onKeyDown={ handleKeyDown }
                    >Log In</button>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;