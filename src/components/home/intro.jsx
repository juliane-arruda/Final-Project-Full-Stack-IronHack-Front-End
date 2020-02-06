import React from 'react';
import {Parallax} from 'react-parallax';
import './intro.css';
import image from './cat-dog.jpg';

const Intro = () => (
  <Parallax bgImage={image} strength={200} className="Intro" bgClassName="d-none d-lg-inline pr-lg-5">
    <div className="container d-flex align-items-center" style={{height: 600}}>
      <h2 className="col-12 col-lg-6">I Cat Your Pet "esse texto aqui vai ficar no lado da imagem do gato e cachorro"</h2>
    </div>
  </Parallax>
);

export default Intro;