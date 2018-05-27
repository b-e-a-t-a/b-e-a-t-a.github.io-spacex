import React from 'react';
import './LaunchesList.css';
import ListHero from '../components/ListHero';
import FilterButtons from '../components/FilterButtons';
import Footer from '../components/Footer';
import ItemList from '../components/ItemList.js';

import mainStore from '../stores/mainStore';
import { Provider } from 'mobx-react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

const Spinner = require('react-spinkit');

@inject('mainStore')
@observer
class LaunchesList extends React.Component {
	constructor(props) {
		super(props);
	}

	//@observable isNoResults = false;

	render() {
		const items = [];
		const launchClick = this.props.onLaunchClick;
		
		const { mainStore } = this.props;
		const { isLoaded, isNoResults, error } = this.props.mainStore.listState;

		this.launches.forEach((launch, index) => {
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
					<Provider mainStore={mainStore}>
						<FilterButtons />
					</Provider>
			        {isNoResults && <h1 className="list__noresults">Sorry, no launches found </h1>}
			        {isLoaded && <div className="spinner-container"><Spinner name="ball-spin-fade-loader" className="spinner" /></div>}
			        {error ? <h2 className="list__error">Sorry! The page you are looking for does not exist or another error occured. </h2> : <div className="list__container">{items}</div>}		
				</div>
			);
		}
}

export default LaunchesList;