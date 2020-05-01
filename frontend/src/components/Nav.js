import React from "react";

import Logo from "../img/logo.svg";

export default function Nav(){
    return (
      <nav className="topo">
        <div className="logo-mobile">
          <div className="contact-logo-1">
            <img alt="logo" src={Logo} />
          </div>
          <div className="contact-logo-2">
            Siqueira Campos <br />
            Solidária
          </div>
        </div>

        <ul className="nav">
          <div className="nav-item logo">
            <img alt="logo" src={Logo} />
          </div>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#patrocinadores">
              Patrocinadores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    );  
}