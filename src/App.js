import React, { Component } from 'react';
import './App.css';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import Footer from './components/Footer';

const Spinner = require('react-spinkit');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'details',
      error: null,
      isLoaded: false,
      launches: []
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }
  componentDidMount() { 
    fetch("https://api.spacexdata.com/v15/launches/all")
        .then(response => response.json())
        .then(
        (result) => {
          this.setState({
            isLoaded: true,
            launches: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={this.state.launches}
            onLaunchClick={this.handleLaunchClick}
          />
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
  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    const { error, isLoaded } = this.state;

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
