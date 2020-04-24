import React, { Component } from 'react';
import Avatar from '../img/avatar.svg';

class Carrossel extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="patrocinador" alt="Primeiro Slide">
                            <div class="logo-patrocinador">
                                <img src={Avatar}/>
                            </div>
                            <div class="info-patrocinador">
                                <p class="info-titulo">Mercado Beira Linha</p>
                                <p class="info-social">fb.com/mercadobeiralinha</p>
                                <p class="info-desc">Suspendisse ultrices at diam lectus nullam. 
                                    Nisl, sagittis viverra enim erat tortor ultricies massa turpis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="patrocinador" alt="Segundo Slide">
                            <div class="logo-patrocinador">
                                <img src={Avatar}/>
                            </div>
                            <div class="info-patrocinador">
                                <p class="info-titulo">Mercado Beira Linha</p>
                                <p class="info-social">fb.com/mercadobeiralinha</p>
                                <p class="info-desc">Suspendisse ultrices at diam lectus nullam. 
                                    Nisl, sagittis viverra enim erat tortor ultricies massa turpis.</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="patrocinador" alt="Terceiro Slide">
                            <div class="logo-patrocinador">
                                <img src={Avatar}/>
                            </div>
                            <div class="info-patrocinador">
                                <p class="info-titulo">Mercado Beira Linha</p>
                                <p class="info-social">fb.com/mercadobeiralinha</p>
                                <p class="info-desc">Suspendisse ultrices at diam lectus nullam. 
                                    Nisl, sagittis viverra enim erat tortor ultricies massa turpis.</p>
                            </div>
                        </div>
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