import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
// import EditPet from "./editPet"

const StaticMap = ({width, height, position}) => {
  const location = `${position[1]},${position[0]}`;

  return (
    <img
      className="img-fluid"
      src={`https://maps.google.com/maps/api/staticmap?center=${location}&zoom=15&size=${width}x${height}&sensor=false&markers=color:red%7C${location}&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`} />
    );
};

class PetDetails extends Component {
  constructor(props) {
    // console.log(props)
    super(props);
    this.state = {};
    this.getSinglePet = this.getSinglePet.bind(this);
    this.deletePet = this.deletePet.bind(this);
    this.backSearch = this.backSearch.bind(this);
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

  backSearch() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="container h-100">
        <h1 className="pt-5 col-12">Detalhe do Seu Pet</h1>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-around p-5">
          <div className="col-12 col-md-6">
            <img className="img-fluid img-thumbnail" src={this.state.imageUrl} />
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            <h4>Nome: {this.state.petName} </h4>
            <p>Descrição: {this.state.petDescription} </p>
            <p>Data que foi: {this.state.role}: {this.state.petDate} </p>
            <p>Estado: {this.state.role}</p>
            <p>Endereço: </p>
            {this.state.petLocation && <StaticMap
              width={800}
              height={600}
              position={this.state.petLocation.coordinates}
            />}

            <div className="col-12">

            <Link className="btn btn-danger m-1" onClick={this.deletePet}>
              Apagar
            </Link>
            <Link className="btn btn-info m-1" to={`/pets/${this.props.match.params.id}/edit`}>
              Editar
            </Link>
            {/* {this.props.loggedInUser && this.props.loggedInUser._id === pet.owner && ()} */}
            <button onClick={this.backSearch} className
            ="btn btn-secondary m-1"> Voltar </button>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default PetDetails;