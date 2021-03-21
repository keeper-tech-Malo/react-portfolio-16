import React, { Fragment } from 'react';
import Navigation from '../component/Navigation.js';
import Mycarousal from '../component/Mycarousal'



function Home() {
    return (
        <Fragment>
            <Navigation/>
            <h1 className="text-center">Home</h1>
            <div className="container">
                <div className="row">
                <Mycarousal/>

                </div>

            </div>
            
        </Fragment>
    );
}

export default Home;