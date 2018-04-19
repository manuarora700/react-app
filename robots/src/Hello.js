import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
	render() {
		return (
		<div className='f1 tc'>
			<h1>Hello World</h1>
			<p>{this.props.greeting}</p>
		</div>
		); //this is not HTML, this is JSX -- HTML like syntax to create VirtualDOM
	}
}

export default Hello;