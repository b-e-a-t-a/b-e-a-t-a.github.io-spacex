import React from 'react';
import '../view/LaunchDetails.css';

class Rocket extends React.Component {
	render() {
		const props = this.props.rocket;
		var format = require('date-fns/format');
		const result =  format(new Date(props.first_flight), 'DD MMMM YYYY');

		return (
			<div className="container">
				<div className="row">
					<h1 className="header_sml_semibold">ROCKET</h1>
				</div>
				<div className="row">
					<div className="col-6 col-m-12 col-s-12 rocket-border">
						<p><span className="header_sml_cool">NAME: </span>
						<span className="header_sml_dark"> {props.name}</span></p>

						<p><span className="header_sml_cool">COMPANY: </span>
						<span className="header_sml_dark">{props.company}</span></p>

						<p><span className="header_sml_cool">HEIGHT: </span>
						<span className="header_sml_dark"> {props.height.meters}M / {props.height.feet}FT</span></p>

						<p><span className="header_sml_cool">DIAMETER: </span>
						<span className="header_sml_dark"> {props.diameter.meters}M / {props.diameter.feet}FT</span></p>

						<p><span className="header_sml_cool">MASS: </span> 
						<span className="header_sml_dark">{props.mass.kg}KG / {props.mass.lb}LB</span></p>
					</div>
					<div className="col-6 col-m-12 col-s-12 rocket-border">
						<p><span className="header_sml_cool">FIRST FLIGHT: </span>
						<span className="header_sml_dark"> {result}</span></p>
						<p><span className="header_sml_cool">COUNTRY: </span>
						<span className="header_sml_dark">{props.country}</span></p>
						<p><span className="header_sml_cool">SUCCESS RATE: </span>
						<span className="header_sml_dark"> {props.success_rate_pct}%</span></p>
						<p><span className="header_sml_cool">COST PER LAUNCH: </span>
						<span className="header_sml_dark"> ${props.cost_per_launch}</span></p>
					</div>
				</div>
				<div className="row">
					<p className="basic">{props.description}</p>
				</div>
			</div>		
		);
	}
}

export default Rocket;