import React from "react";
import Carrossel from "../components/Carrossel";

export default function Patrocinador() {
  return (
    <div class="patrocinio">
      <div class="carrossel">
        <div class="car-titulo">Empresas parceiras nesse projeto:</div>
        <Carrossel />
      </div>
    </div>
  );
}