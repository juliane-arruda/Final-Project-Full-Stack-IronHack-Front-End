import React, { Component } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

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
        const { petName, petDescription, petLocation, petDate } = responseFromApi.data;
        this.setState({ petName, petDescription, petLocation, petDate });
      })
      .catch(err => {
        console.log(err);
      });
  }



  handleFormSubmit(event) {
    const { params } = this.props.match;

    const { petName, petDescription, petLocation, petDate } = this.state;

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
    return (
      <div className="d-flex flex-column justify-content-center">
        <h2 className="pt-5">Editar</h2>
        <Form onSubmit={e => this.handleFormSubmit(e)} className="p-3 d-flex flex-column align-items-center">
        <Form.Group controlId="text" className="col-3">
          <Form.Label>Nome do pet</Form.Label>
          <Form.Control type="text"
            name="petName"
            value={this.state.petName}
            onChange={e => this.handleChange(e)}/>
        </Form.Group>

        <Form.Group controlId="text" className="col-3">
          <Form.Label>Descrição do pet</Form.Label>
          <Form.Control type="text"
            name="petDescription"
            value={this.state.petDescription}
            onChange={e => this.handleChange(e)}/>
        </Form.Group>
        
        <Form.Group controlId="petDate" className="col-3">
          <Form.Label>Data que o pet foi achado</Form.Label>
            <Form.Control
              className="form-control"
              type="date"
              name="petDate"
              value={this.state.petDate}
              onChange={e => this.handleChange(e)} />
        </Form.Group>

          {/* <label>Endereço onde o pet foi perdido:</label>
            <input
                type="text"
                name="petLocation"
                value={this.state.petLocation}
                onChange={e => this.handleChange(e)} /> */}
          <button class="btn btn-secondary btn-lg" type="submit">Editar Pet</button>
        </Form>
      </div>
    )
  }
}

export default EditPet