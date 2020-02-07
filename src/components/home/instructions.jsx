import React from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import './instructions.css';
import image from './background-cat-dog.jpg';

const Instructions = () => (
  <Parallax bgImage={image} strength={400} className="Intro" bgClassName="d-none d-lg-inline">
    <div id="instructions" className="test-0  container d-flex flex-column align-items-center justify-content-center" style={{ height: 600 }}>
      <h2 className="mb-5">Como Usar Nossa Ferramenta</h2>
      <div className="test-1 w-50">
        <p>
          Faça o cadastro do seu pet e carregue uma foto do seu animal de estimação. 
        </p>
        <div className="container">
          <Link type="button" class="btn btn-outline-success m-1" to="/signup-found" style={{ textDecoration: "none" }}>
            Encontrado
          </Link>
          <Link type="button" class="btn btn-outline-danger m-1" to="/signup-lost" style={{ textDecoration: "none" }}>
            Perdido
          </Link>
        </div>
        <p className="m-2">
          A partir desse momento, nosso sistema fará uma leitura da foto e retornará o resultado com todos os animais semelhantes ao seu.
        </p>
        <div className="container">

        </div>
      </div>
    </div>
  </Parallax>

);

export default Instructions;