import React from 'react';
import {
  GoogleMap,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import { LoadGoogleMapsJs } from './LoadGoogleMapsJs';
import { MapContainer } from './MapContainer';
import PetMarker from './PetMarker';

const googleMapStylerNoVisibility = [{ visibility: 'off' }];

class PetsMapBase extends React.Component {
  state = { openId: '' };

  openDetails(pet) {
    this.setState({
      openId: pet._id
    });
  }

  render() {
    return (
      <GoogleMap
        {...this.props}
        options={{
          clickableIcons: false,
          fullscreenControl: false,
          mapTypeControl: false,
          disableDefaultUI: false,
          streetViewControl: false,
          styles: [
            {
              featureType: 'transit',
              stylers: googleMapStylerNoVisibility,
            },
            { featureType: 'poi', stylers: googleMapStylerNoVisibility },
          ],
        }}
      >
        {this.getPetMarkers()}
      </GoogleMap>
    );
  }

  getPetMarkers() {
    const { openId } = this.state;
    return this.props.pets
      .filter(p => p.petLocation && p.role)
      .map(p => (
        <PetMarker
          key={p._id}
          pet={p}
          isOpen={p._id === openId}
          onClick={() => this.openDetails(p)}
        />
      ));
  }
}

const PetsMapAnnotated = withGoogleMap(PetsMapBase);

export const PetsMap = ({
  loadingElement,
  mapStore,
  ...props
}) => {
  return (
    <LoadGoogleMapsJs loadingElement={loadingElement}>
      <PetsMapAnnotated {...props} containerElement={MapContainer()} />
    </LoadGoogleMapsJs>
  );
};
