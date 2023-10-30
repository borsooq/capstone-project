import React from "react";
import "./../App.css";

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li className="navigation-item">
          <a href="/#projects">Home</a>
        </li>
        <li className="navigation-item">
          <a href="">About</a>
        </li>
        <li className="navigation-item">
          <a href="">Menu</a>
        </li>
        <li className="navigation-item">
          <a href="">Reservations</a>
        </li>
        <li className="navigation-item">
          <a href="">Order Online</a>
        </li>
        <li className="navigation-item">
          <a href="">Login</a>
        </li>
      </ul>
    </nav>
  );
}
