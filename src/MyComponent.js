import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'

const propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	title: PropTypes.string.isRequired
}

const defaultProps = {
	name: "Default name of app"
}

class MyComponent extends Component {
	componentWillMount() {
		// Good place to make ajax requests 
		console.log(`will mount`)
	}

	componentDidMount() {
		// Good place to focus a field after the component loads
		console.log(`did mount`)
	}

	componentWillUpdate(nextProps, nextState) {
		console.log(`this.props`, this.props)
		console.log(`this.state`, this.state)
		console.log(`nextProps`, nextProps)
		console.log(`nextState`, nextState)
	}

	componentDidUpdate(prevProps, prevState) {
		console.log(`this.props`, this.props)
		console.log(`this.state`, this.state)
		console.log(`prevProps`, prevProps)
		console.log(`prevState`, prevState)
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	render() {
		const { title, name, onClick } = this.props
		return (
			<div className="component">
				<h1>Title: { title }</h1>
				<h1>Name: { name }</h1>
				<div onClick={ onClick }>Click Me</div>
				<h3>This is a component that is dropped into another component</h3>
			</div>
		)
	}
}

MyComponent.propTypes = propTypes
MyComponent.defaultProps = defaultProps

export default MyComponent
