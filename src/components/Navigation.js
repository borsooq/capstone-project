import "./../App.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="navigation-items container">
        <li className="navigation-item">
          <a href="">Home</a>
        </li>
        <li className="navigation-item">
          <a href="/#about">About</a>
        </li>
        <li className="navigation-item">
          <a href="">Menu</a>
        </li>
        <li className="navigation-item">
          <Link to="/booking-page">Reservations</Link>
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
