import React from 'react';
import './contact.css';
import 'bootstrap-social';

const Contact = () => (
  <div className="container-fluid background-contact">
    <div className="container d-inline-flex flex-column flex-md-row align-items-center justify-content-around row mt-5">
      {/* <img src="/images/fundo.png" alt="background"/> */}
      <div className="col-12 col-md-6 col-lg-4">
        <h4>CONTATO</h4>
        <p>Telefone: (11) 1234-5678</p>
        <p>E-mail: icatyoupet@gmail.com</p>
        <p>Alameda Jaú, 1301 - Jardim Paulista,<br /> São Paulo - SP, 01420-001</p>
      </div>
      <div className="my-2 col-12 col-md-6 col-lg-4">
        <h4>SIGA-NOS</h4>
        <img className="img-fluid btn-social-icon btn-facebook p-1 m-1" src="/images/icons/facebook.png" alt="facebook" />
        <img className="img-fluid btn-social-icon btn-twitter p-1 m-1" src="/images/icons/twitter.png" alt="twitter" />
        <img className="img-fluid btn-social-icon btn-pinterest p-1 m-1" src="/images/icons/plus.png" alt="google" />
        <img className="img-fluid btn-social-icon btn-instagram p-1 m-1" src="/images/icons/instagram.png" alt="instagram" />
      </div>
      <div className="col-12 col-md-6 col-lg-4">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6255.526157490973!2d-46.660939413709485!3d-23.561946062049994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59468d48985b%3A0x694f27fed85d9b0c!2sIronhack%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1580927864945!5m2!1spt-BR!2sbr" width={"300"} height={"250"} frameborder={"0"} border={"0"} allowfullscreen={""}></iframe>
      </div>
    </div>
  </div>
);

export default Contact;