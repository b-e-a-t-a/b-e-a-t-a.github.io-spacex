import React, { Component } from 'react';
import './App.css';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import Footer from './components/Footer';

import { Provider } from 'mobx-react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import mainStore from './stores/mainStore';

const Spinner = require('react-spinkit');

@inject ('mainStore')
@observer
class App extends Component {
  constructor(props) {
    super(props);
  }

  get activeViewComponent() {
    const { mainStore } = this.props;
    const { viewName } = mainStore.currentViewName;

    switch (viewName) {
      case 'list':
        return (
          <Provider
            mainStore={mainStore}>
            <LaunchesList />
          </Provider>
        );
      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );
      default:
        return null;
    }
  }

  @action.bound
  handleLaunchClick() {
    this.props.currentViewName = 'details';
  }

  @action.bound
  handleBackClick() {
    this.props.currentViewName = 'list';
  }

  render() {
    const {error, isLoaded} = this.props.mainStore.listState;

    if (error) {
      return <div className="error"><img src="https://cdn.dribbble.com/users/27818/screenshots/985070/404_1x.jpg" /> </div>;
    } else if (!isLoaded) {
      return <div className="spinner-container"><Spinner name="ball-spin-fade-loader" className="spinner" /></div>;
    } else {
    return (
      <main className="page-container">
        <div className="page-content">
          {this.activeViewComponent}
        </div>
        <Footer />
      </main>
    );
    }
  }
}

export default App;