import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: ""};
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
          <div>
            <form onSubmit={this.handleFormSubmit}>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
    
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />

              <input type="submit" value="Login" />
            </form>
            {this.state.message && <p>{this.state.message}</p>}
            <p>
                Don't have account?
              <Link to={"/signup"}> Signup</Link>
            </p>
          </div>
        );
      }

}

export default Login;