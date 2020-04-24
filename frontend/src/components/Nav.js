import React, { Component } from 'react';

import Logo from '../img/logo.svg';

class Nav extends React.Component {
    render() {
        return (
                <nav class="topo">

                    <div class="logo-mobile">
                        <div class="contact-logo-1"><img src={Logo}/></div>
                        <div class="contact-logo-2">Siqueira Campos <br/>Solidária</div>
                    </div>
                    
                    <ul class="nav">
                        <div class="nav-item logo">
                            <img src={Logo}/>    
                        </div>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Sobre</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#patrocinadores">Patrocinadores</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contato">Contato</a>
                        </li>
                    </ul>
                </nav>
        )
    }
}
export default Nav