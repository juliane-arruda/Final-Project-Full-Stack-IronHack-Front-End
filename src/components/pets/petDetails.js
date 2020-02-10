import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import AuthService from '../auth/auth-service';
import './petDetails.css'


const StaticMap = ({ width, height, position }) => {
  const location = `${position[1]},${position[0]}`;

  return (
    <img
      className="img-fluid"
      src={`https://maps.google.com/maps/api/staticmap?center=${location}&zoom=15&size=${width}x${height}&sensor=false&markers=color:red%7C${location}&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`} />
  );
};

class PetDetails extends Component {
  constructor(props) {
    console.log('props', props)
    super(props);
    this.state = {
      message: false,
      loggedInUser: null,
    };
    this.getSinglePet = this.getSinglePet.bind(this);
    this.deletePet = this.deletePet.bind(this);
    this.backSearch = this.backSearch.bind(this);
    this.email = this.email.bind(this);
    this.log = this.log.bind(this);
    this.service = new AuthService();
  }
  componentDidMount() {
    this.getSinglePet()
    this.log()
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
    // console.log(params.id, "id")
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

  log() {
    const { loggedInUser } = this.state
    this.props.user && !this.state.loggedInUser && this.setState({ loggedInUser: this.props.user })
  }


  email() {
    if (this.state && this.props.user) {
      let petEmail = this.state.owner.email;
      let userEmail = this.props.user.email
      this.service

        .email(petEmail, userEmail)
        .then(() => this.setState({ message: true }))
        .catch((err) => {
          console.log(err)
        });
    }

  }

  backSearch() {
    this.props.history.goBack();
  }

  render() {
    console.log('this.state', this.state)

    return (
      <div className="container-details h-100 py-3">
        <div className="background-pet container d-flex flex-column flex-md-row align-items-center justify-content-around p-5">
          <div className="col-12 col-md-6">
            <img className="img-fluid img-thumbnail" src={this.state.imageUrl} />
            <h4>{this.state.petName}</h4>
            <p>{this.state.petDescription} </p>
            <p>Data que foi {this.state.role}: {this.state.petDate} </p>
            <p>{this.state.role}</p>
          </div>
          <div className="col-12 col-md-6 mt-3 mt-md-0">
            {this.state.petLocation && <StaticMap
              width={800}
              height={600}
              position={this.state.petLocation.coordinates}
            />}
            <div className="col-12 d-flex justify-content-around m-2">
              {this.state.owner &&
                this.state.loggedInUser &&
                this.props.user._id === this.state.owner._id && (
                  <>
                    <Link className="btn btn-danger m-1" onClick={this.deletePet}>
                      Apagar
                    </Link>
                    <Link className="btn btn-info m-1" to={`/pets/${this.props.match.params.id}/edit`}>
                      Editar
                    </Link>
                  </>
                )}
              <div>
                <button onClick={this.backSearch} className="btn btn-secondary m-2">
                  Voltar
                </button>
              </div>
            </div>
            <Link className="btn btn-outline-dark m-2" onClick={this.email}>
              Enviar email com seu contato
            </Link>
            {this.state.message && <h5 className="alert alert-success m-3" role="alert" >Email enviado com sucesso! Em breve você receberá uma resposta sobre o seu pet.</h5>}
          </div>
        </div>
      </div>
    )
  }
}

export default PetDetails;