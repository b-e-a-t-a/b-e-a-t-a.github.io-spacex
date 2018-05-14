import React from 'react';
import './Item.css';

class Item extends React.Component {
	render() {
		const launch = this.props.launch;

		var format = require('date-fns/format');
		const result =  format(new Date(launch.launch_date_utc), 'DD MMMM YYYY');

		const side = this.props.id % 2 ? 'right' : 'left';
		const arrowSide = this.props.id % 2 ? '-right' : '-left';

		return (
			<div className="list__body">		
				<li className={"list__body"+side}>
					<h1 className="list__body-header">{result}</h1>
					<div className={"list__body-arrow" + arrowSide}></div>
					<h2 className={"list__body-subheader" + arrowSide}>
						<span className="list__body-label">rocket: </span>
						<span className="list__body-value">{launch.rocket.rocket_name}</span>
						<span className="list__body-separator">|</span>
						<span className="list__body-label">launch site: </span>
						<span className="list__body-value">{launch.launch_site.site_name_long}</span>
					</h2>
				</li>
			</div>
		)
	}
}

export default Item;