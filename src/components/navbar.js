import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import AuthService from "./auth/auth-service";
import BtNavbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
    this.state = {
      onTop: window.scrollY < 50,
      isMenuOpen: false,
    };
    this.onScroll = this.onScroll.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    this.setState({
      onTop: window.scrollY < 50,
    });
  }

  logoutUser() {
    this.service
      .logout()
      .then(() => {
        this.setState({ loggedInUser: null }, () => console.log(this.state.loggedInUser));
        this.props.getUser(null);
      })
      .catch(error => console.log(error));
  }

  onToggle(expanded) {
    this.setState({
      isMenuOpen: expanded,
    });
  }

  render() {
    console.log(this.state.loggedInUser);
    const { isHome, userInSession } = this.props;
    const { onTop, isMenuOpen } = this.state;
    console.log({ isMenuOpen })

    return (
      <div className={`Navbar ${isHome ? 'home' : ''} ${onTop ? 'top' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <BtNavbar onToggle={this.onToggle} fixed="top" expand="lg" className="d-flex flex-row p-3 px-lg-4 mb-3 border-bottom shadow-sm">
          <NavLink className="d-flex align-items-center" to="/">
            <img src="/images/logo.png" alt="Cat and Dog logo" className="logo mr-3" />
            <h5 className="my-0 mr-lg-auto font-weight-normal">I Cat Your Pets</h5>
          </NavLink>

          <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BtNavbar.Collapse onAuxClick={this.menuClick} className="d-lg-flex flex-row justify-content-end" id="basic-navbar-nav">
            <nav className="d-flex flex-column flex-lg-row align-content-center my-2 my-lg-0 mr-lg-3" id="menu">
              {userInSession && (
                <>
                  <NavLink className="p-2 text-dark" activeStyle={{ color: "blue" }} to="/pets" style={{ textDecoration: "none" }}>
                    Pets
                  </NavLink>
                  <NavLink className="p-2 text-dark" activeStyle={{ color: "blue" }} to="/map" style={{ textDecoration: "none" }}>
                    Mapa
                  </NavLink>
                  {/* <NavLink className="p-2 text-dark" to="/signup-found" style={{ textDecoration: "none" }}>
                    Encontrei um pet
                  </NavLink> */}
                  {/* <NavLink className="p-2 text-dark" to="/signup-lost" style={{ textDecoration: "none" }}>
                    Perdi meu pet
                  </NavLink> */}
                </>
              )}
              {!userInSession && (
                <>
                  <HashLink to="/#about" className="p-2 text-dark" activeStyle={{ color: "blue" }} style={{ textDecoration: "none" }}>
                    Sobre
                    </HashLink>
                  <HashLink to="/#howItWorks" className="p-2 text-dark" activeStyle={{ color: "blue" }} style={{ textDecoration: "none" }}>
                    Como funciona
                    </HashLink>
                  <HashLink to="/#instructions" className="p-2 text-dark" activeStyle={{ color: "blue" }} style={{ textDecoration: "none" }}>
                    Instruções
                    </HashLink>
                  <HashLink to="/#depositions" className="p-2 text-dark" activeStyle={{ color: "blue" }} style={{ textDecoration: "none" }}>
                    Depoimentos
                    </HashLink>
                  <HashLink to="/#contact" className="p-2 text-dark" activeStyle={{ color: "blue" }} style={{ textDecoration: "none" }}>
                    Contato
                    </HashLink>
                  {/* <NavLink className="p-2 text-dark" activeStyle={{ color: "blue" }} to="/map" style={{ textDecoration: "none" }}>
                    Mapa
                  </NavLink> */}
                  {/* <NavLink className="p-2 text-dark" to="/signup-found">
                    Encontrei um pet
                  </NavLink>
                  <NavLink className="p-2 text-dark" to="/signup-lost">
                    Perdi meu pet
                  </NavLink> */}
                </>
              )}
            </nav>
            {!userInSession && (
              <NavLink className="btn btn-outline-primary mr-2" to="/login">
                Login
              </NavLink>
            )}
            {userInSession && (
              <NavLink className="btn btn-outline-danger" onClick={() => this.logoutUser()} to="/" exact>
                Logout
              </NavLink>
            )}
          </BtNavbar.Collapse>
        </BtNavbar>
      </div>
    );
  }
}

export default Navbar;
