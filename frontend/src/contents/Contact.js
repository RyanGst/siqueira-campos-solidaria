import React, { Component } from 'react';
import Logo from '../img/logo.svg';

class Contact extends React.Component {
    render() {
        return (
            <section class="contact-container">
                <div class="contact">
                    <div class="contact-left">

                        <div class="contact-titulo">
                            <div class="contact-titulo-1">Faça a diferença!</div>
                            <div class="contact-subtitulo">Entre em contato já</div>
                        </div>

                        <div class="contact-logo">
                            <div class="contact-logo-1"><img src={Logo}/></div>
                            <div class="contact-logo-2">Siqueira Campos <br/>Solidária</div>
                        </div>

                        <div class="endereco">Siqueira Campos-PR</div>

                        <div class="contact-tel">
                            <ul>
                                <li>43 xxxx-xxxx</li>
                                <li>43 xxxx-xxxx</li>
                                <li>43 xxxx-xxxx</li>
                                <li>43 xxxx-xxxx</li>
                            </ul>
                        </div>

                    </div>
                    <div class="contact-right">

                        <div class="contact-titulo-2">
                            Redes sociais
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}
export default Contact