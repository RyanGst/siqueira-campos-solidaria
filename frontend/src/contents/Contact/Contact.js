import React from "react";
import Logo from "../../img/logo.svg";

export default function Contact() {
  return (
    <section className="contact-container">
      <div className="contact">
        <div className="contact-left">
          <div className="contact-titulo">
            <div className="contact-titulo-1">Faça a diferença!</div>
            <div className="contact-subtitulo">Entre em contato já</div>
          </div>

          <div className="contact-logo">
            <div className="contact-logo-1">
              <img alt="logo" src={Logo} />
            </div>
            <div className="contact-logo-2">
              Siqueira Campos <br />
              Solidária
            </div>
          </div>

          <div className="endereco">Siqueira Campos-PR</div>

          <div className="contact-tel">
            <ul>
              <li>43 xxxx-xxxx</li>
              <li>43 xxxx-xxxx</li>
              <li>43 xxxx-xxxx</li>
              <li>43 xxxx-xxxx</li>
            </ul>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-titulo-2">Redes sociais</div>
        </div>
      </div>
    </section>
  );
}
