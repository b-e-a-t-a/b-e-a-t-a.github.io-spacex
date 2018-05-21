import React from 'react';
import "../styles/FilterButtons.css";

class FilterButtons extends React.Component {

	render() {
		const options = this.props.options;
		const listButtons = options.map((option) => (
			<input 
				type="button" 
				value={option}
				className="list__button"
				onClick={this.props.onClick}
			/>))

		return (
			<div className="list__buttons">
				<span className="list__buttons-content">
					<button
						className="list__button-all"
						onClick={this.props.onClickAll}
					>All rockets</button>
					<span>{listButtons}</span>
				</span>
			</div>
		);
	}
}

export default FilterButtons;