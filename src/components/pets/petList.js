import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
      <div>
        <div className="row row-cols-1 row-cols-md-4 m-5 d-flex justify-content-center" >

          {this.state.listOfPets && this.state.listOfPets.map(pet => {
            return (

        <div className="card m-2" id={pet._id} key={pet._id}>
       
        <img src={pet.imageUrl} className="card-img-top"/>
       
    <div className="card-body">
      <Link to={`/pets/${pet._id}`} className="card-title">{pet.petName}</Link>
          <p className="card-text">{pet.role}</p>
    </div>
      </div>



            );
          })}

        </div>

    </div>
    );
  }
}

export default PetList;
