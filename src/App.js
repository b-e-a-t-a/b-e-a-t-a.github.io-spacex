import React, { Component } from 'react';
import './App.css';
import launch from './assets/launch.json';
import launchSite from './assets/launch_site.json';
import rocket from './assets/rocket.json';
import LaunchDetails from './view/LaunchDetails';

class App extends Component {
  render() {
    return (
      <main>
        <LaunchDetails
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default App;
