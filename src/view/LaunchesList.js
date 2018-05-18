import React from 'react';
import './LaunchesList.css';
import ListHero from '../components/ListHero';

import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';
import ItemList from '../components/ItemList.js';


class LaunchesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			launches: this.props.launches 
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleClickAll = this.handleClickAll.bind(this);
		//this.handleFilterChange = this.handleFilterChange.bind(this);
		
	}

	get availableRocketNames() {
		const {launches} = this.props;

		const rocketNames = [];
	    
	    launches.map(launch => {
	    	if (rocketNames.indexOf(launch.rocket.rocket_name) === -1) {
	    		rocketNames.push(launch.rocket.rocket_name)
	    	}
	    });

		return rocketNames;
	}

	/*get filteredLaunches() {
		const {rocketNameFilter} = this.state;
		const {launches} = this.props;

		if(!rocketNameFilter) return launches;

		return launches.filter( launch => launch.rocket.rocket_name === rocketNameFilter );
	}

	handleFilterChange(value) {
		this.setState({ 
			rocketNameFilter: value 
		});
		
	}*/
	handleClick(e) {
		e.preventDefault();
		const {launches} = this.props;
		const nameClicked = e.target.value;
		const displayed = launches.filter( launch => launch.rocket.rocket_name === nameClicked );
		console.log(nameClicked);
		console.log(displayed);
		this.setState({
			launches: displayed,
		});
	}
	handleClickAll() {
		this.setState({
			launches: this.props.launches,
		});
	}

	render() {
		const items = [];
		const launchClick = this.props.onLaunchClick;
		this.state.launches.forEach((launch, index) => {
			items.push (
				<ItemList
					launch={launch}
					id={index}
					onClick={launchClick}
				/>
			)
		})

		return (
			<div className="list">
				<ListHero />
				<FilterButtons
		          options={this.availableRocketNames}
		          onClick={this.handleClick}
		          onClickAll={this.handleClickAll}
		        />
				<div className="list__container">{items}</div>
			</div>
		);
	}
}

export default LaunchesList;