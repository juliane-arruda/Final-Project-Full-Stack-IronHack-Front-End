import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import SignupLost from "./components/auth/signupLost";
import SignupFound from "./components/auth/signupFound";
import Login from "./components/auth/login";
import PetList from "./components/pets/petList";
import Home from "./components/home/index";
import Navbar from './components/navbar';
import Footer from './components/footer';
import PetDetails from './components/pets/petDetails'
import AuthService from "./components/auth/auth-service";
import EditPet from "./components/pets/editPet";
import PetListMap from './components/pets/map';
import Search from './components/search';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loggedInUser: null,
      newPet: null,
      pets: null, 
    };
    this.service = new AuthService();
    this.getTheUser = this.getTheUser.bind(this);
    this.getMatch = this.getMatch.bind(this);
    this.getNewPet = this.getNewPet.bind(this);
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

  getNewPet(newPet) {
    this.setState({
      newPet
    },
    () => console.log(this.state.newPet)
   )
  }

  getMatch(pets) {
    this.setState({
      pets
    })
  }

  render() {
    // this.fetchUser(); 
    return (
      <div className="App d-flex conteiner-fluid flex-column h-100 pt-5">
        <main className="flex-shrink-0">
          <Navbar/>


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
                render={props => <PetDetails
                  user={this.state.loggedInUser}
                  newPet={this.state.newPet}
                  pets={this.state.pets}
                  {...props}
                  />}
                  />
              <Route
                  exact
                  path="/pets/:id/edit"
                  component={EditPet}
                  user={this.state.loggedInUser}
                />
              <Route
                exact
                path="/pet/search"
                render={props => <Search 
                  user={this.state.loggedInUser}
                  newPet={this.state.newPet}
                  pets={this.state.pets}
                  {...props}
                />}
                />
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
                  render={props => <SignupFound getUser={this.getTheUser} {...props} getMatch={this.getMatch} getNewPet={this.getNewPet} />}
                />

                <Route
                  exact
                  path="/signup-lost"
                  user={this.state.loggedInUser}
                  render={props => <SignupLost getUser={this.getTheUser} {...props} getMatch={this.getMatch} getNewPet={this.getNewPet} />}
                />


              </Switch>

            

        
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
