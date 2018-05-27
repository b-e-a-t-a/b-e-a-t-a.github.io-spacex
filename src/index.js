import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';

ReactDOM.render(<Provider mainStore={mainStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();