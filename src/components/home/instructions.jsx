import React from 'react';
// import {Parallax} from 'react-parallax';
import { Link } from 'react-router-dom';
import './instructions.css';

const Instructions = () => (
  <div className="background-instructions test-0">
    <h2>Como Usar Nossa Ferramenta</h2>
    <div className="test-1 container d-flex flex-column justify-content-center">
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
);

export default Instructions;