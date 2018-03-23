import React, { Component } from 'react';
import './App.css';

class App extends Component {

	constructor (props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
		this.onClick = this.onClick.bind(this)

		this.state = {
			title: 'App Title'
		}
	}

	onClick () {
		this.setState({
			title: 'New app title'
		})
	}

	onChange (event) {
		console.log(event.target.value)
	}

	onSubmit (event) {
		event.preventDefault()
		console.log(`this.input.value`, this.input.value)
	}

	render() {
		const list = [ 'item1', 'item2', 'item3' ]
		return (
			<div className="App">
				<h1>{ this.state.title }</h1>
				<div onClick={this.onClick}></div>
				<h1>
					{
						list.map((item, index) => {
							return (
								<div onClick={ this.onClick } key={ index }>{ item }</div>
							)
						})
					}
				</h1>
				<form onSubmit={ this.onSubmit } action="">
					<input type="text" onChange={ this.onChange } ref={ input => this.input = input } />
				</form>
			</div>
		)
	}
}

export default App;
