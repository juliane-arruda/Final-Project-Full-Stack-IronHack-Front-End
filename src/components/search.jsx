import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
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
          .get(`${process.env.REACT_APP_API}pet/${params.id}`, {
          })
          .then(responseFromApi => {
            const pet = responseFromApi.data;
            this.setState(pet);
          })
          .catch(err => {
            console.log(err);
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

export default Search;