import React from "react";
import Navigation from "./Navigation";
import logo from "./../images/Logo.svg";

export default function Header() {
  return (
    <header className="container header section">
      <figure className="img img-logo">
        <img src={logo} />
      </figure>
      <Navigation />
    </header>
  );
}
