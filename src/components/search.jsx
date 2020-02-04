import React, { Component } from "react";
import axios from "axios";
import AuthService from '../components/auth/auth-service';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {}
      
  
      }

    render() {
      console.log('props', this.props)
        return(
          <>
          { this.props.user && this.props.pets && this.props.newPet ? (
            <div>
              <h1>Buscar</h1>
            <h1> {this.props.newPet.petName} </h1> 
            <img src={this.props.newPet.imageUrl}/>
                {this.props.pets.map((el) => (
                  <div>
                  {el.petName}
                  </div>
                ))}
            </div>

          ): <p>Buscando</p>}
          </>
        )
    }
}

export default Search;