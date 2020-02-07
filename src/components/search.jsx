import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./search.css"
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
            <div className=" container-details p-5">
              <div className="my-pet">
              
              <div>
            <img className="my-img" src={this.props.newPet.imageUrl}/>
            <h1> {this.props.newPet.petName} </h1> 
              </div>

              </div>
              <div className=""></div>
            <div className="row row-cols-1 row-cols-md-3 m-3 d-flex justify-content-center" >
              {this.props.pets.length > 0 ? this.props.pets.map((el) => (
          
          <div className="imagem m-2">
                <div>
                  <div>
                    <img src={el.imageUrl} className="card-img-top"/>
                  </div>
                    {/* <div className="col-md-8"> */}
                      <div>
                    
                  <Link to={`/pets/${el._id}`} className="capa">
                  <h2>{el.petName}</h2>
                    </Link>
                </div>
                {/* </div> */}
              </div>
        </div>
)) : <h3 className="alert alert-warning">Nenhum pet parecido foi encontrado, assim que ele for reconhecido, você será notificado.</h3>

              }
              </div>

            </div>

          ): <div className="spinner-border text-primary m-5"></div>}
          </>
        )
    }
}

export default Search;


