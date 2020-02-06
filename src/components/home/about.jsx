import React from 'react';
import './about.css'

const About = () => (
  <div className="about container-fluid p-5">
    <div className="row d-flex align-items-center justify-content-around">
    <div className="col-12 col-md-6 col-lg-4">
      <img className="img-fluid img-thumbnail" src="/images/family.jpg" alt="family" />
    </div>
    <div className="col-12 col-md-6 col-lg-4">
      <h2>Sobre</h2>
      <p> "Esse conteudo fica no meio da imagem azul"
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, laboriosam reiciendis rem fugiat molestias sit ut officia accusamus minima ipsa voluptatem enim facere. Ipsum totam ex veniam harum possimus fugiat.
    </p>
    </div>
    </div>
  </div>
);

export default About;