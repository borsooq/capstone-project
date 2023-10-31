import React from "react";
import "./../App.css";
import FooterItem from "./FooterItem";

export default function Footer() {
  return (
    <footer className="container footer-section">
      <figure>
        <img src="" />
      </figure>
      <div className="container footer-items">
        <FooterItem />
        <FooterItem />
        <FooterItem />
      </div>
    </footer>
  );
}
