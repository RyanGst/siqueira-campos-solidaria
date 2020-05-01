import React from "react";

import Nav from "../components/Nav";
import Banner from "../components/Banner/Banner";
import Headline from "../components/Headline/Headline";

export default function Header() {
  return (
    <header>
      <Nav />
      <section class="header">
        <Headline />
        <Banner />
      </section>
    </header>
  );
}
