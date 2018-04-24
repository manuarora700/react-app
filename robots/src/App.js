import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
// import { robots } from './robots';
import './App.css';

//State is a descirption of your app
//Parent feeds state into a child component
//State >> props

class App extends Component {
	//to add a state
	constructor() {
		//this is a state
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			return response.json();
		})
		.then(users => {
					this.setState({ robots: users})

		});
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
		if( this.state.robots.length === 0) {
			return <h1>Loading...</h1>
		}
		else {
				return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange} />
					<Scroll>
						<CardList robots = {filteredRobots}/>
					</Scroll>
				</div>
			);
			}
	}
}
export default App;