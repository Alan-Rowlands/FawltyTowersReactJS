import React, { Component } from 'react';


class GuestSearchResultComponent extends Component {
	render() {
		if (this.props != null && this.props.items != null&& this.props.items.guestId != null) {
			let guest = this.props.items;
			console.log(guest);
			return (
				<p>Guest ID: {guest.guestId} | Name: {guest.guestFname} {guest.guestLname} {guest.guestRoomNum} {guest.guestPhoneNum} {guest.guestDaysStayed} </p>
			);
		}
		else {
			return <p />;
		}
	}
}
;

export default GuestSearchResultComponent;