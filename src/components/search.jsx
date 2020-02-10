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
    return (
      <>
        {this.props.user && this.props.pets && this.props.newPet ? (
          <div className="container-details p-5">
            <div className="row">
              <div className="col-12 col-md-6">
                <div>
                  <img className="my-img" src={this.props.newPet.imageUrl} />
                  <h1> {this.props.newPet.petName} </h1>
                </div>
              </div>
              <div className="col-12 col-md-6 mt-3 mt-md-0 d-flex justify-content-center align-items-start">
                {this.props.pets.length > 0 ? (
                  <div className="row d-flex align-items-stretch">
                    {this.props.pets.map((el) => (
                      <div className="col-12 col-md-6 mb-3">
                        <div className="card h-100 w-100 d-flex flex-column justify-content-center">
                          <img src={el.imageUrl} className="img-fluid" />
                          <Link to={`/pets/${el._id}`} className="capa">
                            <h2>{el.petName}</h2>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>) : (
                  <h3 className="alert alert-info">Nenhum pet parecido foi encontrado, assim que ele for reconhecido, você será notificado.</h3>
                )}
              </div>
            </div>
          </div>
        ) : <div className="spinner-border text-primary m-5"></div>}
      </>
    )
  }
}

export default Search;


