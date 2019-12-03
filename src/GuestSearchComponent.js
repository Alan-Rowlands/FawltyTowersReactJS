import React, { Component } from 'react';
import GuestSearchResultComponent from './GuestSearchResultComponent';

let serviceUrl = 'entities.guests/';
let serviceUrlJsonHeaders = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

class GuestSearchComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { items: [], text: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<div>
				<h3>Search Hotel Guests</h3>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="new-todo">
						Enter Guest ID:
						</label>
					<input
						id="new-todo"
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<button>
						Search
						</button>
				</form>
				<GuestSearchResultComponent items={this.state.items} />
			</div>
		);
	}

	handleChange(e) {
		this.setState({ text: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.text.length)// if input is blank
		{
			return;
		}
		let guestId = this.state.text;
		let url = `${serviceUrl}${guestId}?timestamp=${Date.now()}`;

		fetch(url, {
			headers: serviceUrlJsonHeaders

		})
			.then(result => result.json())
			.then(json => {
				this.setState(
					{
						items: json,
						text: this.state.text
					}
				);
			})
			.catch(() => {
				this.setState(
					{
						items: [],
						text: "Failed"//being economic with limited time, if nothing exists or a connection error, printing failure message to the text box. Didn't habe time to make a proper GUI 
					}
				);
			})
			;
	}
}

export default GuestSearchComponent;