import React, { Component } from "react";
import { Link } from "react-router-dom";




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
            <div className="">
              
              <h1>Buscar</h1>
              <div>
            <h1> {this.props.newPet.petName} </h1> 
            <img src={this.props.newPet.imageUrl}/>
              </div>
              
            <div className="row row-cols-1 row-cols-md-2" >
              {this.props.pets.map((el) => (
          
          <div className="card mb-3" style={{width: "540px"}}>
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={el.imageUrl} className="card-img"/>
                  </div>
                    <div className="col-md-8">
                      <div className="card-body">
                  <Link to={`/pets/${el._id}`} className="card-title">{el.petName}</Link>
                  <p className="card-text">{el.petDescription}</p>
                  <p className="card-text"><small className="text-muted">Perdido em {el.petDate}</small></p>
                </div>
                </div>
              </div>
        </div>
))}

              </div>

            </div>

          ): <p>Buscando</p>}
          </>
        )
    }
}

export default Search;


