import React, { Fragment } from 'react';
import Carousel from "react-bootstrap/Carousel";
import Slide1 from '../img/slide1-1.webp'
import Slide2 from '../img/slide2.webp'
import Slide3 from '../img/slide3.webp'


function Mycarousal() {
    return (
        <Fragment>
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pause={false}>
                <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide3} alt="Third slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 custom-img" src={Slide1} alt="Third slide" />
            </Carousel.Item>
            </Carousel>
            {/* <ScrollDown /> */}
        </div>
            
        </Fragment>
    );
}

export default Mycarousal;