import React, { Fragment } from 'react';
import Navigation from '../component/Navigation.js';
import Mycarousal from '../component/Mycarousal'
import Background from '../component/Background'
import Projects from '../component/Projects.js';
import Navbar from '../component/Navbar';



function Home() {
    return (
        <Fragment>
            <Navigation/>
            <Background/>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                <Mycarousal/>
                <Projects/>

                </div>

            </div>
            
        </Fragment>
    );
}

export default Home;