import React, { Component } from "react";
import axios from "axios";

class EditPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        petName: this.props.pet.petName,
        petDescription: this.props.pet.petDescription,
        imageUrl: this.props.pet.imageUrl,
        petLocation: this.props.pet.petLocation,
        petDate: this.props.pet.petDate,
        }

    }

    handleFormSubmit(event) {
        const { petName, petDescription, imageUrl, petLocation, petDate} = this.state;

        event.preventDefault();
    
        axios
          .put(
            `${process.env.REACT_APP_API}pets/${this.props.pet.id}`,
            {
              petName,
              petDescription,
              imageUrl,
              petLocation,
              petDate
            },
          
          )
          .then(() => {
            this.props.getThePet();
            // after submitting the form, redirect to '/projects'
            this.props.history.push("/pets");
          })
          .catch(error => console.log(error));
      }
    
      handleChange(event) {
        const { value, name } = event.target;
        this.setState({
          [name]: value
        });
      }
    
    render() {
        return(
            <div>
        <h2>Editar</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>Nome do pet: </label>
          <input
            type="text"
            name="petName"
            value={this.state.petName}
            onChange={e => this.handleChange(e)} />
          <label>Descrição do pet: </label>
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
          <button type="submit">Editar Pet</button>
        </form>
      </div>
        )
    }
}

export default EditPet