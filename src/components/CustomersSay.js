import React from "react";
import "./../App.css";
import CustomersSayItem from "./CustomersSayItem";

export default function CustomersSay() {
  return (
    <>
      <section className="container section-testimonials">
        <h3 className="header-center">Testimonials</h3>
        <div className="testimonials-items container">
          <CustomersSayItem />
          <CustomersSayItem />
          <CustomersSayItem />
          <CustomersSayItem />
        </div>
      </section>
    </>
  );
}
