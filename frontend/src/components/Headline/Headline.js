import React from "react";
import LogoBanner from "../../img/logo_grande.svg";

export default function Headline() {
    return (
      <div className="headline">
        <div className="titulo">
          <p>
            Onde não há caridade,
            <br /> não pode haver justiça
          </p>
        </div>
        <div className="banner-mobile">
          <img alt="banner" src={LogoBanner} />
        </div>
        <div className="sub-titulo">
          <p>
            Mesmo distantes, a necessidade de ajudar o próximo nos une. Nossa
            campanha busca atender famílias carentes em Siqueira Campos, Paraná.
          </p>
        </div>
        <div className="botao">
          <a href="#contato">
            <div className="button">
              entre em contato
              <div></div>
            </div>
          </a>
        </div>
      </div>
    );
}
