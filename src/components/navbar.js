import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar'
import AuthService from "./auth/auth-service";
// import Boostrap from 'bootstrap';
import BtNavbar from 'react-bootstrap/Navbar';

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
      <BtNavbar fixed="top" expand="lg" className="d-flex flex-row p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">I Cat Your Pets</h5>
        <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BtNavbar.Collapse className="d-lg-flex flex-row justify-content-end" id="basic-navbar-nav">
          <nav className="d-flex flex-column flex-lg-row align-content-center my-2 my-md-0 mr-md-3" id="menu">
            <NavLink className="p-2 text-dark" activeStyle={{ color: "red" }} to="/pets">
              Pets
            </NavLink>
            <NavLink className="p-2 text-dark" to="/signup-found" style={{ textDecoration: "none" }}>
              Encontrei um pet
            </NavLink>
            <NavLink className="p-2 text-dark" to="/signup-lost" style={{ textDecoration: "none" }}>
              Perdi meu pet
            </NavLink>
            <NavLink className="p-2 text-dark" activeStyle={{ color: "yellow" }} to="/map" style={{ textDecoration: "none" }}>
              Mapa
            </NavLink>
          </nav>
          <NavLink className="btn btn-outline-primary" to="/login">
              Login
          </NavLink>
            <NavLink className="btn btn-outline-primary" onClick={() => this.logoutUser()} to="/logout">
              Logout
          </NavLink>
        </BtNavbar.Collapse>
      </BtNavbar>
    );

  }
}

export default Navbar;
