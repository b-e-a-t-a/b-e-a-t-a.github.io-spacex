import React from 'react';
import '../view/LaunchDetails.css';

class Pad extends React.Component {
	render() {

		return (
			<div className="container">
				<div className="row">
					<h1 className="header_sml_semibold">Launch Pad</h1>
				</div>
				<div className="row">
					<div className="col-6 col-m-12 col-s-12 rocket-border">
						<p><span className="header_sml_cool">NAME: </span>
						<span className="header_sml_dark">{this.props.launchSite.location.name}</span></p>
					</div>
					<div className="col-6 col-m-12 col-s-12 rocket-border">
						<p><span className="header_sml_cool">LOCATION: </span>
						<span className="header_sml_dark">{this.props.launchSite.location.name}, {this.props.launchSite.location.region}</span></p>
					</div>
				</div>
				<div className="row">
					<p className="basic">{this.props.launchSite.details}</p>
				</div>
			</div>		
		);
	}
}

export default Pad;