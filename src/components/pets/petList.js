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

  deletePet(petID) {
    axios
      .delete(`${process.env.REACT_APP_API}pets/${petID}`, {
        withCredentials: true
      })
      .then(() => {
        this.getAllPets();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>

          {this.state.listOfPets && this.state.listOfPets.map(pet => {
            return (
              <div id={pet._id} key={pet._id}>
                <Link to={`/pets/${pet._id}`}>
                  <h3>{pet.petName}</h3>
                </Link>
                <img src={pet.imageUrl}/>
                {/* {this.props.loggedInUser &&
                  this.props.loggedInUser._id === pet.owner && (
                    <button onClick={() => this.deletePet(pet._id)}>
                      Delete pet
                    </button>
                  )} */}
    
              </div>
            );
          })}

        </div>
        {/* <div style={{ width: "40%", float: "right" }}> */}
          {/* <AddPet getData={this.getAllProjects} /> <== !!! */}
        {/* </div> */}
      </div>
    );
  }
}

export default PetList;
