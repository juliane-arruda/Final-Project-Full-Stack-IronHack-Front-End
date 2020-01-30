import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Signup from "./components/auth/signup";
import AddThing from './components/AddPhoto';
import AddPhoto from './components/AddPhoto';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };


  }
  render() {

    return (
      <div className="App">
        <h1>I cat your pet</h1>

        <Switch>
          <Route
            exact
            path="/signup"
            user={this.state.loggedInUser}
            render={props => <Signup getUser={this.getTheUser} {...props} />}
          />
        </Switch>

        <div className="App">
          <AddPhoto />
        </div>

      </div>
    )
  }
}

export default App;
