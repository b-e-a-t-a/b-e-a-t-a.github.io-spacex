import React from 'react';
import './Launch.css';
import Counter from './Counter';

class Launch extends React.Component {
	render() {
		const props = this.props.launch;
		var format = require('date-fns/format');
		//var parse = require('date-fns/parse');
		//var differenceInMinutes = require('date-fns/difference_in_minutes')
		var differenceInSeconds = require('date-fns/difference_in_seconds')

		const result =  format(new Date(props.launch_date_unix), 'DD MMMM YYYY');

		//calculate time to start
		//var currentMin = differenceInMinutes(new Date(props.launch_date_utc), new Date());
		var currentSec = differenceInSeconds(new Date(props.launch_date_utc),new Date());

		var secCount = parseInt(currentSec, 10);

		var daysCount = Math.floor(secCount / (3600*24));
		secCount  -= daysCount*3600*24;
		var hoursCount   = Math.floor(secCount / 3600);
		secCount  -= hoursCount*3600;
		var minCount = Math.floor(secCount / 60);
		secCount  -= minCount*60;

		return (
			<div className="container">
				<div className="row">
					<h1 className="header_sml_semibold_cool">{result}</h1>
					<div className="header_big">{props.rocket.rocket_name} Launch</div>
					<Counter secCount={secCount} 
							minCount={minCount}
							daysCount={daysCount}
							hoursCount={hoursCount}
					/>
					<img src={props.links.mission_patch_small} className="patch" alt="" />
				</div>
			</div>		
		);
	}
}

export default Launch;