import React, { Component } from 'react';
import { AddressMap } from '../map/AddressPickerMap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      petName: "",
      petDescription: "",
      petLocation: null,
      petDate: "",
      file: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  updatePosition(position) {
    this.setState({
      petLocation: {
        latitude: position.lat,
        longitude: position.lng,
      }
    }, ()=> {
      this.props.onChange(this.state);
    });
  }
  
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, ()=> {
      this.props.onChange(this.state);
    });
  }

  handleFileUpload(e) {
    this.setState({file:e.target.files[0]});
    this.props.handleFileUpload(e);
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit} className="row">
        {this.props.errorMessage && (
          <div className="col-12 alert alert-danger" role="alert">
            {this.props.errorMessage}
          </div>
        )}
        <Form.Group controlId="username" className="col-12 col-md-6 col-lg-4">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="password" className="col-12 col-md-6 col-lg-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="email" className="col-12 col-md-6 col-lg-4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
        </Form.Group>

        <Form.Group controlId="petName" className="col-12 col-md-6 col-lg-4">
          <Form.Label>Nome do pet:</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="petName"
            value={this.state.petName}
            onChange={e => this.handleChange(e)} />
        </Form.Group>

        <Form.Group controlId="petDate" className="col-12 col-md-6 col-lg-4">
          <Form.Label>Data que o pet foi {this.props.role || '!!!'}</Form.Label>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div> 
              {/* aqui colcar o calendario */}
            </div>
            <Form.Control
              className="form-control"
              type="date"
              name="petDate"
              value={this.state.petDate}
              onChange={e => this.handleChange(e)} />
          </div>
        </Form.Group>

        <Form.Group controlId="petPhoto" className="col-12 col-md-6 col-lg-4">
          <Form.Label>Foto do pet</Form.Label>
          <div className="custom-file">
            <label className="custom-file-label" htmlFor="petPhoto">
              {this.state.file ? this.state.file.name : 'Choose file...'}
            </label>
            <Form.Control
              type="file"
              onChange={this.handleFileUpload} />
          </div>
        </Form.Group>

        <Form.Group controlId="petDescription" className="col-12">
          <Form.Label>Descrição do pet</Form.Label>
          <Form.Control
            as="textarea"
            className="form-control"
            type="text"
            name="petDescription"
            value={this.state.petDescription}
            onChange={e => this.handleChange(e)} />
        </Form.Group>

        <div className="col-12">
          <label>Escolha um local no mapa</label>
          <AddressMap
            loadingElement={<div style={{ height: '100%' }}></div>}
            mapElement={<div style={{ height: '500px' }}></div>}
            defaultZoom={18}
            defaultCenter={{ lat: -23.5617714, lng: -46.6601914 }}
            onPositionChanged={this.updatePosition}
          />
        </div>

        <div className="col-12 mt-3">
          <Button
            type="submit float-right"
            disabled={this.props.loading}>
            {this.props.loading ? 'Salvando' : 'Signup'}
          </Button>
        </div>
      </Form>
    );
  }
}

export default Forms;
