import React from 'react';
import "../styles/FilterButtons.css";
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('mainStore')
@observer
class FilterButtons extends React.Component {

	get availableRocketNames() {

		const rocketNames = ["Falcon 1", "Falcon 9", "Falcon 10", "Falcon Heavy"];

		return rocketNames;
	}

	@action.bound
	handleClick(e) {
		const nameClicked = e.target.value;

		const { isLoaded, isNoResults, error, launches } = this.props.mainStore.listState;

		this.isLoaded = true;

		fetch(`https://api.spacexdata.com/v2/launches?rocket_name=${nameClicked}`)
			.then(response => response.json())
			.then(result => {
				this.isLoaded = false;
				this.launches = result;
				this.launches.length === 0 ? this.isNoResults = true : this.isNoResults = false;
			})
			.catch(error => {
				this.isLoaded = false;
				this.error;
			})
	}

	@action.bound
	handleClickAll() {
		const { isLoaded, isNoResults, error, launches } = this.props.mainStore.listState;

		this.launches = this.props.launches,
		this.isNoResults = false,
		this.isLoaded = false
	}

	render() {
		const listButtons = this.availableRocketNames.map((option) => (
			<input 
				type="button" 
				value={option}
				className="list__button"
				onClick={this.onClick}
			/>))

		return (
			<div className="list__buttons">
				<span className="list__buttons-content">
					<button
						className="list__button-all"
						onClick={this.onClickAll}
					>All rockets</button>
					<span>{listButtons}</span>
				</span>
			</div>
		);
	}
}

export default FilterButtons;