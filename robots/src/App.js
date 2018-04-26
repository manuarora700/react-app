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

	onSearchChange = (event) => {
		//custom function
		this.setState({ searchfield: event.target.value })
		// console.log(event.target.value);
		
	}
	render() {
		const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		
		})
		return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange} />
			<CardList robots = {filteredRobots}/>
		</div>
	);
	}
}
export default App;