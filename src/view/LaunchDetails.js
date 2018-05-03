import React from 'react';
import './LaunchDetails.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Launch from '../components/Launch';
import Details from '../components/Details';
import Rocket from '../components/Rocket';
import Pad from '../components/Pad';

const LaunchDetails = (props) => (
	<div className="app">
		<Header className="header" />
                <section className="launch-details">
                	<div className="container">
                		<div className="row">
                			<div className="col-6">
                                                <Launch launch={props.launch}/>
                                        </div>

                			<div className="col-6">
                                                <div className="row">
                                                        <Details launch={props.launch}/>
                                                </div>
                				<div className="row">
                                                        <Rocket rocket={props.rocket}/>
                                                </div>
                				<div className="row">
                                                        <Pad launchSite={props.launchSite}/>
                                                </div>
                			</div>

                		</div>
                	</div>
                </section>
                <Hero/>
                <Footer />
	</div>

);

export default LaunchDetails;