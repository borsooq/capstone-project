import React from "react";
import Navigation from "./Navigation";
import logo from "./../images/Logo.svg";

export default function Header() {
  return (
    <header>
      <title>Little Lemon</title>
      <meta name="description" content="Little Lemon is a restarurant..." />
      <meta property="og:title" content="Little Lemon" />
      <meta
        property="og:description"
        content="Little Lemon is a restarurant..."
      />
      <meta name="og:image" content={logo} />
      <img src={logo} />
      <Navigation />
    </header>
  );
}
