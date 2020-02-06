import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import './instructions.css';
import image from './background-cat-dog.jpg';

const Instructions = () => (
  <Parallax bgImage={image} strength={400} className="Intro" bgClassName="d-none d-lg-inline">
    <div className="test-0  container d-flex flex-column align-items-center justify-content-center" style={{ height: 600 }}>
      <h2 className="mb-5">Como Usar Nossa Ferramenta</h2>
      <div className="test-1 w-50">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas quia neque animi consequatur esse aperiam repellat suscipit doloribus, adipisci quos mollitia molestias rem temporibus nihil commodi iusto exercitationem alias?
        </p>
        <div className="container">
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

export default Instructions;