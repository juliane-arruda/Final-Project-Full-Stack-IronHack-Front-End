import React from 'react';
import './howItWorks.css'
import { Link } from "react-router-dom";


const HowItWorks = () => (
  <div id="howItWorks" className="container-fluid p-5 test-1">
    <h2 className="pb-5">Como Funciona</h2>
    <div className="row justify-content-center">
      <div className="test-2 col-12 col-md-6 col-lg-4">
        <img className="rounded-circle pet-image" src="./images/triste.jpg" alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">Perdido</h5>
          <p className="card-text">
          Seu animal de estimação está perdido?<br></br>
            Nós te ajudamos a encontrar.
            </p>
        </div>
      </div>

      <div className="test-2 col-12 col-md-6 col-lg-4">
        {/* style={{ width: '18rem' }} */}
        <img className="rounded-circle pet-image" src="./images/cat-encontrado.jpg" alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">Encontrado</h5>
          <p className="card-text">
          Você encontrou um animal de <br/>estimação  desaparecido? <br/>
            Ajude-o a voltar para sua família.
          </p>
        </div>
      </div>

      <div className="test-2 col-12 col-md-6 col-lg-4">
        <img className="rounded-circle pet-image" src="./images/vira-lata.jpg" alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">Família</h5>
          <p className="card-text">
          Uma família completa,<br/>
          um verdadeiro lar.
          </p>
         
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;