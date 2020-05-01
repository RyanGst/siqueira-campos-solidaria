import React from "react";
import "./global.css";

import Header from "./contents/Header";
import Patrocinador from "./contents/Patrocinador";
import Contact from "./contents/Contact/Contact";
import Footer from "./contents/Footer";

function App() {
  return (
    <div class="tudo">
      <Header />
      <a href="#patrocinadores" name="patrocinadores">
        <Patrocinador />
      </a>
      <a href="#contato" name="contato">
        <Contact />
      </a>
      <Footer />
    </div>
  );
}

export default App;
