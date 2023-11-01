import React from "react";
import "./../App.css";
import CustomersSayItem from "./CustomersSayItem";
import bruschetta from "./../images/bruchetta.svg";
import lemonDessert from "./../images/lemon dessert.jpg";
import greekSalad from "./../images/greek salad.jpg";

export default function CustomersSay() {
  return (
    <>
      <section className="container section-testimonials">
        <h3 className="header-center">Testimonials</h3>
        <div className="testimonials-items container">
          <CustomersSayItem img={bruschetta} name="Susan" />
          <CustomersSayItem img={lemonDessert} name="Jay" />
          <CustomersSayItem img={greekSalad} name="Peter" />
          <CustomersSayItem img={bruschetta} name="John" />
        </div>
      </section>
    </>
  );
}
