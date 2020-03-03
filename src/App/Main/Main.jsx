import React from 'react';
import './Main.scss';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Pages/Welcome/Welcome.jsx';
import Services from '../Pages/Services/Services.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Login from '../Pages/Login/Login.jsx';

const Main = () => {
    return (
        <main className='Main'>
            <Switch>
                <Route path='/services'>
                    <Services />
                </Route>
                <Route path ='/contact'>
                    <Contact />
                </Route>
                <Route path ='/login'>
                    <Login />
                </Route>
                <Route path='/' extact>
                    <Welcome />
                </Route>
            </Switch>
        </main>
    )
};

export default Main;