import React from 'react';
import './Details.css';

const Details = (props) => (
	<div className="conatiner">
		<h1>DETAILS</h1>
		<p>{props.launch.details}</p>

	</div>

);

export default Details;