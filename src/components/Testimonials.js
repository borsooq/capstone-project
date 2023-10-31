import React from "react";
import "./../App.css";
import TestimonialsItem from "./TestimonialsItem";

export default function Testimonials() {
  return (
    <>
      <section className="container section-testimonials">
        <h3 className="header-center">Testimonials</h3>
        <div className="testimonials-items container">
          <TestimonialsItem />
          <TestimonialsItem />
          <TestimonialsItem />
          <TestimonialsItem />
        </div>
      </section>
    </>
  );
}
