import React from 'react';
import {
  GoogleMap,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import { LoadGoogleMapsJs } from './LoadGoogleMapsJs';
import './AddressPickerMap.css';

// const googleMapStylerNoVisibility = [{ visibility: 'off' }];
const googleMapStylerNoVisibility = [{ visibility: 'on' }];


class AddessMapBase extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
  }

  map = React.createRef();
  state = {
    position: null,
  }

  getCurrentPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      const markerPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.setState({
        position: markerPosition,
        // center: markerPosition,
      });
      this.map.current.panTo(markerPosition);
    }, (e) => {
      console.log(e);
      switch(e.code){
        case e.PERMISSION_DENIED:
          alert('Permissão para acesso de localização negada!\n\nPor favor, escolha uma posição no mapa');
          break;
          default:
            alert('Não foi possivel recuperar sua posição!\n\nPor favor, escolha uma posição no mapa');
          break;
      }
    });
  }

  onClick(e) {
    const position = e.latLng.toJSON();

    this.setState({
      position,
    });

    const { onPositionChanged } = this.props;
    typeof onPositionChanged === 'function' && onPositionChanged(position)
  }

  render() {
    return (
      <GoogleMap
        {...this.props}
        ref={this.map}
        // center={this.state.center}
        onClick={this.onClick}
        options={{
          clickableIcons: false,
          fullscreenControl: false,
          mapTypeControl: false,
          disableDefaultUI: false,
          streetViewControl: false,
          styles: [
            {
              featureType: 'transit',
              stylers: this.googleMapStylerNoVisibility,
            },
            { featureType: 'poi', stylers: this.googleMapStylerNoVisibility },
          ],
        }}
      >
        {this.state.position && <Marker position={this.state.position} />}
        <button type="button" className="current-position-btn btn btn-danger" onClick={this.getCurrentPosition}>
          Usar minha localização
        </button>
      </GoogleMap>
    );
  }
}

const AddressMapAnnotated = withGoogleMap(AddessMapBase);

export const AddressMap =
  ({
    loadingElement,
    ...props
  }) => {
    return (
      <LoadGoogleMapsJs loadingElement={loadingElement}>
        <AddressMapAnnotated {...props}
          containerElement={<div className="address-map-container"></div>} 
          />
      </LoadGoogleMapsJs>
    );
  };
