import React from 'react';
import './Launch.css';

class Launch extends React.Component {
	render() {
		const props = this.props.launch;
		var format = require('date-fns/format');
		//var parse = require('date-fns/parse');

		const result =  format(new Date(props.launch_date_utc), 'DD MMMM YYYY')
		return (
			<div className="container">
				<div className="row">
					<h1 className="header_sml_semibold_cool">{result}</h1>
					<div className="header_big">{props.rocket.rocket_name} Launch</div>
					<div>Counter</div>
					<img src={props.links.mission_patch_small} className="patch"/>
				</div>
			</div>		
		);
	}
}

export default Launch;