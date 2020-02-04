import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import Forms from './form';
class SignupFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      message: '',
      imageUrl: '',
      loading: false,
    };
    this.service = new AuthService();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
  }

  // componentDidMount() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     this.setState({
  //       petLocation: {
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       }
  //     });
  //   });
  // }

  updatePosition(position) {
    this.setState({
      petLocation: {
        latitude: position.lat,
        longitude: position.lng,
      }
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.setState({message: '', loading: true,});

    const {
      username,
      password,
      email,
      role,
      petName,
      petDescription,
      petLocation,
      petDate,
    } = this.state.model;

    const {imageUrl} = this.state;

    console.log(this.state.model);
    this.service
      .signup(username,
        password,
        email,
        role,
        petName,
        petDescription,
        imageUrl,
        petLocation,
        petDate)
      .then(user => {
        this.props.getUser(user);
        this.props.history.push("/pets")
      })
      .catch(error => {
        console.log(error.response)
        this.setState({
          message: error.response.data.message
        });
      }).finally(()=>{
        this.setState({loading: false});
      });
  }

  handleChange(model) {
    this.setState({
      model
    });
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
    return (
      <div className="container">
        <h1>Achei um pet!</h1>
        <Forms
          errorMessage={this.state.message}
          onSubmit={this.handleFormSubmit}
          role="encontrado"
          handleFileUpload={this.handleFileUpload}
          loading={this.state.loading}
          onChange={this.handleChange} />
        <p>
          Already have account?
          <Link to={"/"}> Login</Link>
        </p>
      </div>
    );
  }

}

export default SignupFound;