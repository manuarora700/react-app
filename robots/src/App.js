import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

//State is a descirption of your app
//Parent feeds state into a child component
//State >> props

class App extends Component {
	//to add a state
	constructor() {
		//this is a state
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	render() {
		return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots = {robots}/>
		</div>
	);
	}
}
export default App;