import React, { Component } from "react";
import axios from "axios";

class Compare extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.getSinglePet = this.getSinglePet.bind(this);

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

      getAllPets() {
        axios
        .get(`${process.env.REACT_APP_API}pets`)
        .then(responseFromApi => {
         
        });
      }

    render() {
        return(
            <div>
            <h1> {this.state.petName} </h1> 
            <img src={this.state.imageUrl}/>
                
            </div>
        )
    }
}

export default Compare;