import React from 'react';
import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';
import './intro.css';
import image from './cat-dog.jpg';

const Intro = () => (
  <Parallax bgImage={image} strength={200} className="Intro" bgClassName="d-none d-lg-inline pr-lg-5">
    <div id="intro" className="container d-flex align-items-center" style={{height: 600}}>
      <div className="col-12 col-lg-6">
        <h1><strong>I Cat Your Pet</strong></h1>
        <h2>A mais alta tecnologia de reconhecimento de imagem  
        fazendo os animais de estimação voltarem para suas casas.</h2>
        <div className="container mt-2">
          <Link type="button" class="btn btn-outline-danger m-1" to="/signup-lost" style={{ textDecoration: "none" }}>
              Perdido
          </Link>
          <Link type="button" class="btn btn-outline-success m-1" to="/signup-found" style={{ textDecoration: "none" }}>
              Encontrado
          </Link>
        </div>
      </div>
    </div>
  </Parallax>
);

export default Intro;