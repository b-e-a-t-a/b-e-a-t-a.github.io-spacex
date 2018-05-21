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
			launches: this.props.launches,
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleClickAll = this.handleClickAll.bind(this);
		//this.handleFilterChange = this.handleFilterChange.bind(this);
		
	}

	//1. if rockets from API list:
	/*
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
	*/

	// 2. if rockets specified in the task description:
	get availableRocketNames() {

		const rocketNames = ["Falcon 1", "Falcon 9", "Falcon 10", "Falcon Heavy"];

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
		const nameClicked = e.target.value;

		fetch(`https://api.spacexdata.com/v2/launches?rocket_name=${nameClicked}`)
	        .then(response => response.json())
	        .then(result => {
	          this.setState({
	            launches: result,
	          });
	        })
	        .catch(error => {
	          this.setState({
	            error
	          });
	        })
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
		const { error } = this.state;
	    if (error) {
	      return <h1>Sorry, no launches found </h1>;
	    } else {

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
}

export default LaunchesList;