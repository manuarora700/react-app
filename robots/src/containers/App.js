import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
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
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		
		})
		if( !robots.length ) {
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