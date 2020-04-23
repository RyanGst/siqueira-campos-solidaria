import React, { Component } from 'react';
import Carrossel from '../components/Carrossel';

class Patrocinador extends React.Component {
    render() {
        return (
            <div class="patrocinio">
                <div class="carrossel">
                    <div class="car-titulo">
                        Empresas parceiras nesse projeto:
                    </div>
                    <Carrossel/>
                </div>
            </div>
        )
    }
}
export default Patrocinador