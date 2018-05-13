import React from 'react';

class Item extends React.Component {
	render() {
		const launch = this.props.launch;
		return (
			<ul>
				<li>
					<p>{launch.rocket.rocket_name}</p>
				</li>
			</ul>
		)
	}
}

export default Item;