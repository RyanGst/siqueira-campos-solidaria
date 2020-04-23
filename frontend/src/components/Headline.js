import React, { Component } from 'react';

class Headline extends React.Component {
    render (){
        return (
            
            <div class="headline">
                <div class="titulo">
                    <p>
                        Onde não há caridade,<br/> não pode haver justiça
                    </p>
                </div>
                <div class="sub-titulo">
                    <p>
                        Mesmo distantes, a necessidade de ajudar o próximo nos une.
                        Nossa campanha busca atender famílias carentes em Siqueira Campos, Paraná.
                    </p>
                </div>
                <a href="#contato"><div class="button">
                    entre em contato
                    <div></div>
                </div></a>
            </div>

        )
    }
}
export default Headline;