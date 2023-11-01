import "./../App.css";
import React, { Routes, Route } from "react";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

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
