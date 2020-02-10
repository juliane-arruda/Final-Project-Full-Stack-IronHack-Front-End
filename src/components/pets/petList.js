import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './petList.css';

// import AddPet from "./AddPet"; // <== !!!

class PetList extends Component {
  constructor(props) {
    super(props);
    this.state = { listOfPets: [] };
    this.getAllPets = this.getAllPets.bind(this);
  }

  getAllPets() {
    axios.get(`${process.env.REACT_APP_API}pets`).then(responseFromApi => {
      this.setState({
        listOfPets: responseFromApi.data
      });
    });
  }
  
  componentDidMount() {
    this.getAllPets();
  }

  render() {
    return (
      <div className="PetList container-fluid container-details">
        <div className="row p-5 d-flex align-items-stretch justify-content-center">
          {this.state.listOfPets && this.state.listOfPets.map(pet => (
            <div className="image mt-3 col-12 col-sm-6 col-lg-4" id={pet._id} key={pet._id}>
              <div className="card w-100 h-100 d-flex flex-column justify-content-center">
                <img src={pet.imageUrl} />
              </div>
              <Link to={`/pets/${pet._id}`} className="details">
                <h2  className="">{pet.petName}</h2>
                <p className="">{pet.role}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default PetList;
