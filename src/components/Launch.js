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
				<div className="date">{result}</div>
				<div className="date">{props.rocket.rocket_name} Launch</div>
				<div>Counter</div>
				<img src={props.links.mission_patch_small}/>
			</div>		
		);
	}
}

export default Launch;