import React from 'react';
import './Pages.scss';
import Tabbed from '../Tabbed/Tabbed.jsx'

const Welcome = () => {
    return (
        <div className={ 'Pages Welcome' }>
            Welcome
            <Tabbed />

            <div className="columns">
                <div className="col col1">Col1 change</div>
                <div className="col col2">Col2</div>
                <div className="col col3">Col3</div>
                <div className="col col4">Col4</div>
            </div>
        </div>
    );
}

export default Welcome