import React from 'react';
import ReactDOM from 'react-dom';

import HotelListComponent from './HotelListComponent';
import GuestSearchComponent from './GuestSearchComponent';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(<HotelListComponent />, document.getElementById('HotelListPlaceHolder'));
ReactDOM.render(<GuestSearchComponent />, document.getElementById('GuestSearchPlaceHolder'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
