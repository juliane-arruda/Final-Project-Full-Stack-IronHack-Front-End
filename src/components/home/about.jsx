import React from 'react';
import './about.css'

const About = () => (
  <div id="about" className="about container-fluid p-5">

    <div className="row d-flex align-items-center justify-content-around">
      <div className="col-12 col-md-6 col-lg-4">
        <img className="img-fluid img-thumbnail" src="/images/family.jpg" alt="family" />
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        {/* <h2>Sobre</h2> */}
        <h4> Através do reconhecimento digital das características do animal,  a <strong>"I Cat Your Pet"</strong> faz um mapeamento de 
          todos os animais perdidos e encontrados em sua região. <br/> Encontrar seu pet nunca foi tão fácil! <br/> Ajudar o pet que se perdeu é sempre muito gratificante.
          
    </h4>
      </div>
    </div>
  </div>
);

export default About;