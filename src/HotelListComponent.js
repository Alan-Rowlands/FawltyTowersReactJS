import React, { Component } from 'react';

import './App.css';

let serviceUrl = 'entities.guests/findTop10';
let serviceUrlJsonHeaders = {
	'Content-Type': 'application/json',
	'Accept': 'application/json'
};

class HotelListComponent extends Component {
	constructor(props) {
		super(props);
		this.state =
			{
				hasError: false, // this is incase that we have a connection error
				hasLoaded: false,
				items: []
			};
	}
	componentDidMount() {

		fetch(serviceUrl, {
			headers: serviceUrlJsonHeaders

		})
			.then(result => result.json())
			.then(json => {
				this.setState(
					{
						hasLoaded: true,
						items: json,
						hasError: false
					}
				)
			})
			.catch(json => {
				this.setState(
					{
						hasLoaded: false,
						items: json,
						hasError: true,
					})
			}
			);
	}

	render() {
		var { hasLoaded, items, hasError } = this.state;

		if (hasError) {
			return <div>Error....</div>;
		} else if (!hasLoaded) {
			return <div>Loading....</div>;
		} else {
			return (
				<div className="App">
					<h1>Assignment 2 - React</h1>
					<h2>Find Top 10</h2>
					<ul>
						{items.map(guest => (
							<li key={guest.guestId}>
								{console.log(guest)}
								<h2>Guest ID: {guest.guestId} | Name: {guest.guestFname} {guest.guestLname}  </h2>
							</li>
						))
						}
					</ul>
				</div>
			);
		}
	}
}

export default HotelListComponent;