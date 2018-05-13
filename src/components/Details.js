import React from 'react';
import '../view/LaunchDetails.css';

const Details = (props) => (
	<div className="container">
		<h1 className="header_sml_semibold">DETAILS</h1>
		<p className="basic">{props.launch.details}</p>
	</div>
);

export default Details;