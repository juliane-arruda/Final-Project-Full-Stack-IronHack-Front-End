import React from 'react';
import {
  GoogleMap,
  withGoogleMap,
  Marker,
} from 'react-google-maps';
import { LoadGoogleMapsJs } from './LoadGoogleMapsJs';

// const googleMapStylerNoVisibility = [{ visibility: 'off' }];
const googleMapStylerNoVisibility = [{ visibility: 'on' }];


class AddessMapBase extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    position: null,
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
          containerElement={<div></div>} 
          />
      </LoadGoogleMapsJs>
    );
  };
