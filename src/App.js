import React, { Component } from 'react'
import MyComponent from './MyComponent'
import './App.css'

class App extends Component {

	constructor (props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
		this.onClick = this.onClick.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateChecked = this.updateChecked.bind(this)

		this.state = {
			title: "Initial Title",
			name: "Initial Name",
			checked: true,
			shouldRenderTitle: true
		}
	}

	onClick () {
		this.setState({
			title: 'New app title',
			name: 'New app name',
		})
	}

	onChange (event) {
		console.log(event.target.value)
	}

	onSubmit (event) {
		event.preventDefault()
		console.log(`this.input.value`, this.input.value)
	}

	updateName (event) {
		this.setState({
			name: event.target.value
		})
	}
	
	updateChecked () {
		this.setState({
			checked: !this.state.checked
		})
	}

	renderTitle () {
		if (!this.state.shouldRenderTitle) return null
		return <h1>Title Rendered</h1>
	}

	render() {
		const list = [ 'item1', 'item2', 'item3' ]
		return (
			<div className="App">
				<input
					type="text"
					onChange={ this.updateName }
					value={ this.state.name }
				/>
				<input type="checkbox"
					onChange={ this.updateChecked }
					checked={ this.state.checked }
				/>
				<h1>{ this.renderTitle() }</h1>
				<div onClick={this.onClick}>Click here!</div>
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
				<MyComponent
					title={ this.state.title }
					name={ this.state.name }
					onClick={ this.onClick }
				/>
			</div>
		)
	}
}

export default App;
