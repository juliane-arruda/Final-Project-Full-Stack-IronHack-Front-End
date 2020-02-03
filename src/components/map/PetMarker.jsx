import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";
import { Link } from "react-router-dom";

class PetMarker extends Component {
  render() {
    const { pet, isOpen, onClick } = this.props;
    console.log({ isOpen });
    return (
      <Marker
        position={{
          lng: pet.petLocation.coordinates[0],
          lat: pet.petLocation.coordinates[1],
        }}
        onClick={onClick}
        // icon={{
        //   path: window.google.maps.SymbolPath.CIRCLE,
        // strokeColor: "green",
        //   strokeColor: "red",
        //   scale: 3
        // }}
        icon={pet.role === 'encontrado'
          ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          : 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'}
      >
        {isOpen && (
          <InfoWindow>
            <div>
              <img src={pet.imageUrl} style={{ maxWidth: '300px', maxHeight: '300px' }} />
              <div>
                <Link to={`/pet/${pet._id}`}>Detalhes</Link>
              </div>
            </div>
          </InfoWindow>
        )}
      </Marker>
    )
  }
}

export default PetMarker;