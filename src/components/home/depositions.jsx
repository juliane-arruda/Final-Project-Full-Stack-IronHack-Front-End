import React from 'react';

const Depositions = () => (
  <div id="depositions" className="container p-5">
    <h2 className="pb-5">Depoimentos</h2>
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-4 mt-2">
        <div className="d-flex align-items-center">
          <img className="rounded-circle" src="/images/depoimento1.jpg" alt="dog" />
          <div className="text-center flex-fill">
            <h4>Catarina Torres</h4>
            <h5>Encontrou o Bento</h5>
          </div>
        </div>

        <p>
        O Bento quase foi atropelado na frente da minha casa, estava muito assustado. Consegui encontrar sua família, que já o havia cadastrado na plataforma.
        </p>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mt-2">
        <div className="d-flex align-items-center">
          <img className="rounded-circle" src="/images/depoimento2.jpg" alt="cat" />
          <div className="text-center flex-fill">
            <h4>Daniel Correia</h4>
            <h5>Perdeu a Lola</h5>
          </div>
        </div>

        <p>
          A Lola sempre saiu de casa, mas ao ficar 24hs sem voltar, cadastrei uma foto dela e no dia seguinte alguém entrou em contato avisando onde ela estava!
        </p>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mt-2">
        <div className="d-flex align-items-center">
          <img className="rounded-circle" src="/images/depoimento3.jpg" alt="dog" />
          <div className="text-center flex-fill">
            <h4>Giulia Vieira</h4>
            <h5>Encontrou o Valentin</h5>
          </div>
        </div>

        <p>
          O Valentin foi encontrado onde eu trabalho, estava assustado pois estava longe de sua família. Consegui localizá-los e nunca vou esquecer da alegria do Valentin ao revê-los.
        </p>
      </div>
    </div>
  </div>
);

export default Depositions;