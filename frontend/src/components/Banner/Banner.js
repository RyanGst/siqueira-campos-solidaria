import React from "react";

import "./style.css";

import LogoBanner from "../../img/logo_grande.svg";

export default function Banner() {
  return (
    <div className="banner">
      <img alt="banner" src={LogoBanner} />
    </div>
  );
}
