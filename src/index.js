import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HotelListComponent from './HotelListComponent';

import * as serviceWorker from './serviceWorker';


class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      let header = '';
      if (this.state.username)  {
        header = <h1>Hello {this.state.username}</h1>;
      } else {
        header = '';
      }
      return (
        <form>
        {header}
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }




ReactDOM.render(<HotelListComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
