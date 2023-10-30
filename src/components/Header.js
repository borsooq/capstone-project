import React from "react";
import Navigation from "./Navigation";
import logo from "./../images/Logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo-img" />
      <Navigation />
    </header>
  );
}
