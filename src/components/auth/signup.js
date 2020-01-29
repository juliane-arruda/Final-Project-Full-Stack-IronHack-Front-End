import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", email: "", role: "LOST", message: "" };
        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

handleFormSubmit(event) {
    event.preventDefault();
    const { username, password, email, role } = this.state

    this.service
        .signup(username, password, email, role)
        .then(user => {
            this.setState({
                username: "",
                password: "", 
                email: "",  
                role: ""
            });
            this.props.getUser(user);
            this.props.history.push("/pets")
        })
        .catch(error => {
            console.log(error)
            // this.setState({
            // message: error.response
            // });
        });
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
    
            <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />



              <input type="submit" value="Signup" />
            </form>
            {this.state.message && <p>{this.state.message}</p>}
            <p>
              Already have account?
              <Link to={"/"}> Login</Link>
            </p>
          </div>
        );
      }

}

export default Signup;