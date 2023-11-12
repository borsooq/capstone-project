import React from "react";
import "./../App.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <>
      <Nav />
      <main className="container green-background confirmation-page">
        <section className="confirmation">
          <h1>Confirmed reservation</h1>
          <button className="btn btn-primary">
            <Link to="/booking-page">Back to Booking Page</Link>
          </button>
        </section>
      </main>
    </>
  );
}
