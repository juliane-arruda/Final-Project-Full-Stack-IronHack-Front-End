import React from 'react';
import './howItWorks.css'

const HowItWorks = () => (
  <div id="howItWorks" className="container-fluid p-5 test-1">
    <h2 className="pb-5">Como Funciona</h2>
    <div className="row justify-content-center">
      <div className="test-2 col-12 col-md-6 col-lg-4">
        <img className="rounded-circle pet-image" src="./images/triste.jpg" alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">Perdi</h5>
          <p className="card-text">
            Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.
            </p>
        </div>
      </div>

      <div className="test-2 col-12 col-md-6 col-lg-4">
        {/* style={{ width: '18rem' }} */}
        <img className="rounded-circle pet-image" src="./images/cat-encontrado.jpg" alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">Encontrei</h5>
          <p className="card-text">
            Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.
          </p>
        </div>
      </div>

      <div className="test-2 col-12 col-md-6 col-lg-4">
        <img className="rounded-circle pet-image" src="./images/vira-lata.jpg" alt="Imagem de capa do card" />
        <div className="card-body">
          <h5 className="card-title">Família</h5>
          <p className="card-text">
            Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default HowItWorks;