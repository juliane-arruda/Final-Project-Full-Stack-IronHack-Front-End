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
        console.log(params.id,"id")
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
          <div>
            <h1> {this.state.petName} </h1> 
            <p> {this.state.petDescription} </p>
            <p> Data que foi {this.state.role}: {this.state.petDate} </p>
        <p> Local onde foi {this.state.role}: {this.state.petLocation} </p>
            <p> {} </p>

            <img src={this.state.imageUrl}/>
                    <button onClick={this.deletePet}>
                      Apagar pet
                    </button>
                    <Link to={`/pets/${this.props.match.params.id}/edit`}>
                      Editar pet
                    </Link>
                    
            
                {/* {this.props.loggedInUser &&
                  this.props.loggedInUser._id === pet.owner && (
                )} */}

            <Link to={"/pets"}> Back to pets </Link>


          </div>
        )
      }
    }
    
    

export default PetDetails;