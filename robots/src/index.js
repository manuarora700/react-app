import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Card from './Card.js';
import CardList from './CardList.js';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { robots } from './robots';

ReactDOM.render(
	
	<CardList robots={robots}/>

, document.getElementById('root'));
registerServiceWorker();
