import React from 'react';
import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';
import './intro.css';
import image from './cat-dog.jpg';

const Intro = () => (
  <Parallax bgImage={image} strength={200} className="Intro" bgClassName="d-none d-lg-inline pr-lg-5">
    <div className="container d-flex align-items-center" style={{height: 600}}>
      <div className="col-12 col-lg-6">
        <h1>I Cat Your Pet "esse texto aqui vai ficar no lado da imagem do gato e cachorro"</h1>
        <div className="container mt-2">
          <Link type="button" class="btn btn-outline-danger m-1" to="/signup-lost" style={{ textDecoration: "none" }}>
              Perdi Meu Pet
          </Link>
          <Link type="button" class="btn btn-outline-success m-1" to="/signup-found" style={{ textDecoration: "none" }}>
              Encontrei Um Pet
          </Link>
        </div>
      </div>
    </div>
  </Parallax>
);

export default Intro;