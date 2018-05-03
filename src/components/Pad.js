import React from 'react';
import './Pad.css';

class Pad extends React.Component {
	render() {

		return (
			<div className="container">
				<div className="row">
					<h1>Launch Pad</h1>
				</div>
				<div className="row">
					<div className="col-6">
						<p>NAME: {this.props.launchSite.location.name}</p>
					</div>
					<div className="col-6">
						<p>LOCATION: {this.props.launchSite.location.name}, {this.props.launchSite.location.region}</p>
					</div>
				</div>
				<div className="row">
					<p>{this.props.launchSite.details}</p>
				</div>
			</div>		
		);
	}
}

export default Pad;