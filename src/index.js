import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routing from './Routing';
import './index.css';

ReactDOM.render(
	<Routing />,
	document.getElementById('root')
);

registerServiceWorker();
