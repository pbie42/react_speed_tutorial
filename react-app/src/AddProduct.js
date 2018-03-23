import React, { Component } from 'react'

class AddProduct extends Component {
	constructor(props) {
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit (event) {
		event.preventDefault()
		console.log(`this.nameInput.value`, this.nameInput.value)
		console.log(`this.priceInput.value`, this.priceInput.value)
		this.props.onAdd(this.nameInput.value, this.priceInput.value)

		this.nameInput.value = ''
		this.priceInput.value = ''
	}

	render() {
		return (
			<form onSubmit={ this.onSubmit }>
				<h3>Add Product</h3>
				<input type="text" placeholder="name"
					ref={ nameInput => this.nameInput = nameInput }
				/>
				<input type="text" placeholder="price"
					ref={ priceInput => this.priceInput = priceInput }
				/>
				<button>Add</button>
				<hr/>
			</form>
		)
	}
}

export default AddProduct

