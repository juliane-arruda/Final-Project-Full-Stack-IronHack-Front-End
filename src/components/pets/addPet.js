import React, { Component } from "react";
import AuthService from '../auth/auth-service';

// import { Link } from "react-router-dom";
// import service from '../api/service';


class AddPet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      petDescription: "",
      imageUrl: "",
      petLocation: "",
      petDate: "",
    };
  }


  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // this method handles just the file upload
  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    AuthService.handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
        this.setState({ imageUrl: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  // this method submits the form
  handleSubmit = e => {
    e.preventDefault();

    AuthService.saveNewThing(this.state)
      .then(res => {
        console.log('added: ', res);
        // here you would redirect to some other page 
      })
      .catch(err => {
        console.log("Error while adding the thing: ", err);
      });
  }

  render() {
    return (
      <div>
        <h2>New Pet</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Nome do pet</label>
          <input
            type="text"
            name="petName"
            value={this.state.petName}
            onChange={e => this.handleChange(e)} />
          <label>Descrição do pet</label>
          <textarea
            type="text"
            name="petDescription"
            value={this.state.petDescription}
            onChange={e => this.handleChange(e)} />
          <input
            type="file"
            onChange={(e) => this.handleFileUpload(e)} />
          <button type="submit">Save a new Pet</button>
        </form>
      </div>
    );
  }
}

export default AddPet;