import React, { Component } from 'react';

class Carrossel extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class=" slide1 d-block w-100" alt="Primeiro Slide"></div>
                    </div>
                    <div class="carousel-item">
                        <div class="slide2 d-block w-100" alt="Segundo Slide"></div>
                    </div>
                    <div class="carousel-item">
                        <div class=" slide3 d-block w-100" alt="Terceiro Slide"></div>
                    </div>
                </div>
                <div class="setas">

                    <a href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
    
                    <ol class="carousel-indicators position-relative">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
    
                    <a href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
    
                </div>
            </div>
        )
    }
}
export default Carrossel