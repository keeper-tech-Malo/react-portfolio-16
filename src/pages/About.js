import React, { Fragment } from 'react';
import Navigation from '../component/Navigation'


import Profile from '../img/44243149_2139095206100797_2424276564897169408_n.jpg'

import layers from "../img/layers.png";
import cogwheel from "../img/cogwheel.png";
import pen from "../img/pen.png";
import browser from "../img/browser.png";
import PropTypes from "prop-types";


export default class About extends React.Component {
	render() {
		return (
            <Fragment>
                <Navigation/>
				<div id="about" className="btn-style nav-item nav-lin">

                <div id="my-background" className="background">
					<div id="stars" />
					<div id="stars2" />
					<div id="stars3" />
				<div
				id="about-container"
				className="content-containers container text-center mt-5">
				<h1 id="about" className={this.props.bounceLeft}  className="text-white">
					About
				</h1>
				<div className="row mt-5">
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={layers} alt=""/>
						<h4 className="text-white">Responsive</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
						}>
						<img src={pen} alt=""/>
						<h4 className="text-white">Design</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={cogwheel} alt=""/>
						<h4 className="text-white">Performance</h4>
					</div>
					<div
						className={
							"col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
						}>
						<img src={browser} alt=""/>
						<h4 className="text-white">Agile</h4>
					</div>
				</div>

				<div className="row" style={{ marginTop: 7 + "rem" }}>
					<div className="col-12 col-lg-6 hidden">
						<img
							className={"img-fluid " + this.props.fadeIn}
							src={Profile}
							alt=""
							style={{
								borderRadius: 50 + "%",
								height: 250 + "px",
								width: 250 + "px"
							}}
						/>
						<p className={"mytext pt-3 " + this.props.fadeIn} className="text-white text-uppercase">
							J'adore transforme les idées en realite. Je suis passioner de code et de musique!
						</p>
					</div>
					<div
						className={
							"col-12 col-sm-12 col-md-12 col-lg-6 " +
							this.props.tada
						}>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								HTML5
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 80 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								CSS3
							</div>
						</div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-90-bar"
								role="progressbar"
								style={{ width: 50 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Javascript
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								ReactJS
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								SASS
							</div>
						</div>
						
						<div className="progress mb-3">
							<div
								className="progress-bar fill-60-bar"
								role="progressbar"
								style={{ width: 60 + "%" }}
								aria-valuemin="0"
								aria-valuemax="100">
								Logic Pro X
							</div>
						</div>
					</div>
				</div>
			</div>
            </div>
				</div>
			
                
                
                
            </Fragment>
		);
	}
}

About.propTypes = {
	bounceLeft: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
