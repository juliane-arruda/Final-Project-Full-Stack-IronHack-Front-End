import React, { Component } from "react";
import axios from "axios";

class EditPet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        petName: "",
        petDescription: "",
        petLocation: "",
        petDate: "",
        }
        this.getSinglePet = this.getSinglePet.bind(this);
    }
    componentDidMount() {
        this.getSinglePet()
      }
    
    getSinglePet() {
        const { params } = this.props.match;
        // const { petName, petDescription, petLocation, petDate} = this.state;
        axios
          .get(`${process.env.REACT_APP_API}pets/${params.id}`, {
            //   petName,
            //   petDescription,
            //   petLocation,
            //   petDate
          })
          .then(responseFromApi => {
            const { petName, petDescription, petLocation, petDate} = responseFromApi.data;
            this.setState({ petName, petDescription, petLocation, petDate});
          })
          .catch(err => {
            console.log(err);
          });
      }

    
    
    handleFormSubmit(event) {
        const { params } = this.props.match;

        const { petName, petDescription, petLocation, petDate} = this.state;

        event.preventDefault();
    
        axios
          .put(
            `${process.env.REACT_APP_API}pets/${params.id}`,
            {
              petName,
              petDescription,
              petLocation,
              petDate
            },
          
          )
          .then((response) => {
            // this.props.getThePet(response);
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
        <form onSubmit={e => this.handleFormSubmit(e)}>
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
          {/* <label>Endereço onde o pet foi perdido:</label>
            <input
                type="text"
                name="petLocation"
                value={this.state.petLocation}
                onChange={e => this.handleChange(e)} /> */}
          <button type="submit">Editar Pet</button>
        </form>
      </div>
        )
    }
}

export default EditPet