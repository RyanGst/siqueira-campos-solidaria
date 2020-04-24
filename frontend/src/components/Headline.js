import React, { Component } from 'react';
import Banner from './Banner';
import LogoBanner from '../img/logo_grande.svg';

class Headline extends React.Component {
    render (){
        return (
            
            <div class="headline">
                <div class="titulo">
                    <p>
                        Onde não há caridade,<br/> não pode haver justiça
                    </p>
                </div>
                <div class="banner-mobile">
                    <img src={LogoBanner}/>
                </div>
                <div class="sub-titulo">
                    <p>
                        Mesmo distantes, a necessidade de ajudar o próximo nos une.
                        Nossa campanha busca atender famílias carentes em Siqueira Campos, Paraná.
                    </p>
                </div>
                <div class="botao">
                    <a href="#contato"><div class="button">
                        entre em contato
                        <div></div>
                    </div></a>
                </div>
            </div>

        )
    }
}
export default Headline;