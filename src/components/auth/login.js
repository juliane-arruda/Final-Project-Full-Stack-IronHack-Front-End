import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state
    this.service
      .login(username, password)
      .then(response => {
        const { location } = this.props;
        this.setState({ username: "", password: "" });
        this.props.getUser(response);
        if (location.state) {
          this.props.history.push(location.state.from.pathname);
        } else {
          this.props.history.push("/pets");
        }
      })
      .catch(error => console.log(error));

  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    console.log(this.props);
    return (
      // <di className="Login pt-5 d-flex flex-column justify-content-center h-100" style={{backgroundImage: 'url(/images/cat-login.jpg)'}}>
        //  backgroundImage: 'url(/images/cat-login.jpg): 'url(/images/cat-login.jpg)="login-form">
       <div className="Login pt-5 d-flex flex-column justify-content-center">
         <div>
          <h3 className="card-title">Login</h3>
          <Form onSubmit={this.handleFormSubmit} className="d-flex flex-column align-items-center">
            <Form.Group controlId="username" className="col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="password" className="col-12 col-sm-9 col-md-6 col-lg-4 col-xl-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Form.Group>

            <input type="button" class="btn btn-secondary btn-lg" type="submit" value="Login" />
          </Form>
          {this.state.message && <p>{this.state.message}</p>}
          <p>
            Não tem uma conta?
            <div className="container mt-2">
              <Link type="button" class="btn btn-outline-danger m-1" to="/signup-lost" style={{ textDecoration: "none" }}>
                  Perdido
              </Link>
              <Link type="button" class="btn btn-outline-success m-1" to="/signup-found" style={{ textDecoration: "none" }}>
                  Encontrado
              </Link>
            </div>
          </p>
        </div>
      </div>
    );
  }

}

export default Login;