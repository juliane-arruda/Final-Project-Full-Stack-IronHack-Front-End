import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            <div className=" container-details d-flex">
              
              <h1>Resultado de Busca</h1>
              <div>
            <h1> {this.props.newPet.petName} </h1> 
            <img src={this.props.newPet.imageUrl}/>
              </div>
              
            <div className="row row-cols-1 row-cols-md-4 m-5 d-flex justify-content-center" >
              {this.props.pets.length > 0 ? this.props.pets.map((el) => (
          
          <div className="card mb-3 m-5">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={el.imageUrl} className="search-img h-10vw"/>
                  </div>
                    <div className="col-md-8">
                      <div className="card-body">
                  <Link to={`/pets/${el._id}`} className="card-title">{el.petName}</Link>
                  <p className="card-text"><small className="text-muted">Perdido em {el.petDate}</small></p>
                </div>
                </div>
              </div>
        </div>
)) : <p>Nenhum pet parecido foi encontrado, em breve alguém entrará em contato com novas informações.</p>

              }
              </div>

            </div>

          ): <p>Buscando</p>}
          </>
        )
    }
}

export default Search;


