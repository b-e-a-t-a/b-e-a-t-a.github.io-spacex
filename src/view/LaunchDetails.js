import React from 'react';
import './LaunchDetails.css';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const LaunchDetails = (props) => (
	<div className="App">
		<Header />
        <section className="launch-details">
        	<div className="container">
        		<div className="row">
        			<div className="col-md-6">
        				<div className=""></div>
        			</div>
        			<div className="col-md-6">
        				<div className="row">props.launch</div>
        				<div className="row">props.launchRocket</div>
        				<div className="row">props.launchSite</div>
        			</div>

        		</div>
        	</div>
        </section>
        <Hero/>
        <Footer />

	</div>

);

export default LaunchDetails;