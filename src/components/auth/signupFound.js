import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

class SignupFound extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        username: "", 
        password: "", 
        email: "", 
        role: "encontrado",  
        petName: "",
        petDescription: "",
        imageUrl: "",
        petLocation: "",
        petDate: "", };
        this.service = new AuthService();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

handleFormSubmit(event) {
    event.preventDefault();
    const { username, password, email, role, petName, petDescription, imageUrl, petLocation, petDate } = this.state
    this.service
        .signup(username, password, email, role, petName, petDescription, imageUrl, petLocation, petDate)
        .then(user => {
            this.setState({
            username: "",
            password: "", 
            email: "",  
            petName: "",
            petDescription: "",
            imageUrl: "",
            petLocation: "",
            petDate: "",
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

    handleFileUpload = e => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
    
        const uploadData = new FormData();
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("imageUrl", e.target.files[0]);
    
        this.service.handleUpload(uploadData)
          .then(response => {
            console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ imageUrl: response.secure_url });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
      }

    render() {
        console.log(this.props);
        return (
          <div>
            <h1>Achei um pet!</h1>
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

          <label>Nome do pet:</label>
            <input
                type="text"
                name="petName"
                value={this.state.petName} //precisa do nome do pet?
                onChange={e => this.handleChange(e)} />
          <label>Descrição do pet:</label>
            <textarea
                type="text"
                name="petDescription"
                value={this.state.petDescription}
                onChange={e => this.handleChange(e)} />
          <label>Data que o pet foi achado:</label>
            <input
                type="date"
                name="petDate"
                value={this.state.petDate}
                onChange={e => this.handleChange(e)} />
          <label>Endereço onde o pet foi perdido:</label>
            <input
                type="text"
                name="petLocation"
                value={this.state.petLocation}
                onChange={e => this.handleChange(e)} />
          <input
                type="file"
                onChange={(e) => this.handleFileUpload(e)} />

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

export default SignupFound;