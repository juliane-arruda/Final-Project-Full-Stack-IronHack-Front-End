import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AuthService from "./auth/auth-service";



class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }
  componentDidUpdate(prevProps) {
    if (this.props.userInSession !== prevProps.userInSession) {
      this.setState({ loggedInUser: this.props.userInSession });
    }
  }
  logoutUser() {
    this.service
      .logout()
      .then(() => {
        this.setState({ loggedInUser: null });
        this.props.getUser(null);
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log(this.state.loggedInUser)

    return (
      <nav className="nav-style">
        {this.state.loggedInUser ? (
          <ul>
            {/* <li>Welcome, {this.state.loggedInUser.user.username}</li> */}
            <li>
              <NavLink
                activeStyle={{ color: "red" }}
                to="/pets"
                style={{ textDecoration: "none" }}
              >
                Pets
              </NavLink>
            </li>
            <li>
              <NavLink
                activeStyle={{ color: "red" }}
                to="/pets/map"
                style={{ textDecoration: "none" }}
              >
                Mapa
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout">
                <button onClick={() => this.logoutUser()}>Logout</button>
              </NavLink>
            </li>
          </ul>
        ) : (
            <ul>
              <li>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  Login
              </NavLink>
              </li>
              <li>
                <NavLink to="/signup-found" style={{ textDecoration: "none" }}>
                  Encontrei um pet!
              </NavLink>
              </li>
              <li>
                <NavLink to="/signup-lost" style={{ textDecoration: "none" }}>
                  Perdi meu pet!
              </NavLink>
              </li>
            </ul>
          )}
      </nav>
    )
  }
}

export default Navbar;
