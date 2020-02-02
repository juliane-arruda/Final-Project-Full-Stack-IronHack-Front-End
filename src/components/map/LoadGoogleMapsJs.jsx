import { withScriptjs } from 'react-google-maps';
import React, { Component } from 'react';
// import { googleMapsApiKey } from '~/src/services/configService';

class Export extends Component {
  render() {
    return this.props.children;
  }
}

const ExportAnnotated = withScriptjs(Export);

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API;

const mapsUrl =
  googleMapsApiKey ?
    'https://maps.googleapis.com' +
    `/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${googleMapsApiKey}` :
    'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places';

export const LoadGoogleMapsJs = (props) => (
  <ExportAnnotated {...props} googleMapURL={mapsUrl} />
);
