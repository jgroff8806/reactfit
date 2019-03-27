import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1 className="page-header">React Fit</h1>
          <p className="lead">Your personal fitness dashboard</p>
        </header>

        <div className="text-center">
          <a href="https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22DLD4&redirect_uri=http%3A%2F%localhost%3A3001%2Ffitbit_auth&scope=activity%20nutrition%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800">
            Log in with FitBit
          </a>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Dashboard />, document.body.appendChild(document.createElement('div')));
});
