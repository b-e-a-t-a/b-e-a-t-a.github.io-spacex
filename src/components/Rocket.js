import React from 'react';
import './Rocket.css';

class Rocket extends React.Component {
	render() {
		const props = this.props.rocket;
		var format = require('date-fns/format');
		const result =  format(new Date(props.first_flight), 'DD MMMM YYYY');

		return (
			<div className="container">
				<div className="row">
					<h1>ROCKET</h1>
				</div>
				<div className="row">
					<div className="col-6">
						<p>NAME: {props.name}</p>
						<p>COMPANY: {props.company}</p>
						<p>HEIGHT: {props.height.meters}M / {props.height.feet}FT</p>
						<p>DIAMETER: {props.diameter.meters}M / {props.diameter.feet}FT</p>
						<p>MASS: {props.mass.kg}KG / {props.mass.lb}LB</p>
					</div>
					<div className="col-6">
						<p>FIRST FLIGHT: {result}</p>
						<p>COUNTRY: {props.country}</p>
						<p>SUCCESS RATE: {props.success_rate_pct}%</p>
						<p>COST PER LAUNCH: ${props.cost_per_launch}</p>
					</div>
				</div>
				<div className="row">
					<p>{props.description}</p>
				</div>
			</div>		
		);
	}
}

export default Rocket;