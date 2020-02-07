import React, { Component } from "react";
import axios from "axios";
import { PetsMap } from "../map/PetsMap";

// import AddPet from "./AddPet"; // <== !!!

class PetListMap extends Component {
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
      <div className="w-100 d-flex flex-column h-100">
        <h1 className="py-3">Encontre o seu Pet</h1>
        <PetsMap
          loadingElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          defaultZoom={12}
          defaultCenter={{ lat: -23.5617714, lng: -46.6601914 }}
          pets={this.state.listOfPets}
          containerElement={() => <div className="w-100 flex-fill"></div>}
        />
      </div>
    );
  }
}

export default PetListMap;
