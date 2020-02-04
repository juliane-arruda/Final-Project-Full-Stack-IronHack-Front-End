import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from "react-router-dom";
import SignupLost from "./components/auth/signupLost";
import SignupFound from "./components/auth/signupFound";
// import AddPhoto from './components/AddPhoto';
import Login from "./components/auth/login";
import PetList from "./components/pets/petList";
import Home from "./components/home";
import Navbar from './components/navbar';
import Footer from './components/footer';
import PetDetails from './components/pets/petDetails'
import AuthService from "./components/auth/auth-service";
import EditPet from "./components/pets/editPet";
import PetListMap from './components/pets/map';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
  }

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  getTheUser(userObj) {
    this.setState({
      loggedInUser: userObj
    });
  }

  render() {

    return (
      <div className="App d-flex conteiner-fluid flex-column h-100 p-5">
        <main className="flex-shrink-0">
          <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser} />

          {this.state.loggedInUser ? (
            <Switch>
              <Route
                exact
                path="/"
                user={this.state.loggedInUser}
                render={props => <Home getUser={this.getTheUser} {...props} />}
              />
              <Route
                exact
                path="/pets"
                user={this.state.loggedInUser}
                component={PetList}
              />
              <Route
                exact
                path="/map"
                component={PetListMap}
                user={this.state.loggedInUser}
              />
              <Route
                exact
                path="/pets/:id"
                user={this.state.loggedInUser}
                component={PetDetails}
                {...this.props}
              />
            </Switch>

          ) : (
              <Switch>
                <Route
                  exact
                  path="/login"
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
                  path="/signup-lost"
                  user={this.state.loggedInUser}
                  render={props => <SignupLost getUser={this.getTheUser} {...props} />}
                />
                <Route
                  exact
                  path="/pets/:id"
                  user={this.state.loggedInUser}
                  component={PetDetails}
                  {...this.props}
                />
                <Route
                  exact
                  path="/pets"
                  user={this.state.loggedInUser}
                  component={PetList}
                />
                <Route
                  exact
                  path="/map"
                  component={PetListMap}
                  user={this.state.loggedInUser}
                />
                <Route
                  exact
                  path="/pets/:id/edit"
                  component={EditPet}
                  user={this.state.loggedInUser}
                />
              </Switch>
            )}

          {/* <div className="App"> */}
          {/* <AddPhoto /> */}
          {/* </div> */}
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
