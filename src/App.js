import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import SignupLost from "./components/auth/signupLost";
import SignupFound from "./components/auth/signupFound";
// import AddPhoto from './components/AddPhoto';
import Login from "./components/auth/login"
import PetList from "./components/pets/petList"


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
              path="/signup-lost"
              user={this.state.loggedInUser}
              render={props => <SignupLost getUser={this.getTheUser} {...props} />}
            />
            <Route
              exact
              path="/"
              user={this.state.loggedInUser}
              render={props => <Login getUser={this.getTheUser} {...props} />}
            />
            <Route
              exact
              path="/signup-found"
              user={this.state.loggedInUser}
              render={props => <SignupFound getUser={this.getTheUser} {...props} />}
            />
            <Route
            exact
            path="/pets"
            // user={this.state.loggedInUser}
            component={PetList}
          />/>

        </Switch>

        {/* <div className="App"> */}
          {/* <AddPhoto /> */}
        {/* </div> */}

      </div>
    )
  }
}

export default App;
