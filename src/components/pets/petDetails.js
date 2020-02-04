import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import EditPet from "./editPet"


class PetDetails extends Component {
  constructor(props) {
    // console.log(props)
    super(props);
    this.state = {};
    this.getSinglePet = this.getSinglePet.bind(this);
    this.deletePet = this.deletePet.bind(this);
  }
  componentDidMount() {
    this.getSinglePet()
  }

  getSinglePet() {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_API}pets/${params.id}`, {
      })
      .then(responseFromApi => {
        const pet = responseFromApi.data;
        this.setState(pet);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deletePet() {
    const { params } = this.props.match;
    console.log(params.id, "id")
    axios
      .delete(`${process.env.REACT_APP_API}pets/${params.id}`, {
      })
      .then(() => {
        this.props.history.push("/pets");
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="pt-5 col-12">Detalhe do Seu Pet</h1>
        <div className="container d-flex justify-content-around p-5">
          <picture className="col-12 col-md-6">
            <img className="img-responsive img-fluid img-thumbnail" src={this.state.imageUrl} />
          </picture>
          <div className="container">
            <h4>Nome: {this.state.petName} </h4>
            <p>Descrição: {this.state.petDescription} </p>
            <p>Data que foi: {this.state.role}: {this.state.petDate} </p>
            <p>Estado: {this.state.role}</p>
            <p>Endereço: {} </p>

            <div className="col-12">
            <Link className="btn btn-danger m-1" onClick={this.deletePet}>
              Apagar pet
            </Link>
            <Link className="btn btn-info m-1" to={`/pets/${this.props.match.params.id}/edit`}>
              Editar pet
            </Link>
            {/* {this.props.loggedInUser && this.props.loggedInUser._id === pet.owner && ()} */}
            <Link className
            ="btn btn-secondary m-1" to={"/pets"}> Back to pets </Link>
            </div>
          </div>
        </div>

      </div>
    )
  }
}



export default PetDetails;