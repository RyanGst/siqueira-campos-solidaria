import React from 'react';
import Header from './contents/Header';
import Patrocinador from './contents/Patrocinador';
import Contact from './contents/Contact';
import Footer from './contents/Footer';

function App() {
  return (
    <div class="tudo">
      <Header/>
      <a name="patrocinadores"><Patrocinador /></a>
      <a name="contato"><Contact/></a>
      <Footer/>
    </div>
  )
}

export default App;
