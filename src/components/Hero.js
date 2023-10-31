import React from "react";
import "./../App.css";

export default function Hero() {
  return (
    <>
      <section className="container green-background">
        <div className="section-hero section">
          <article className="container">
            <h1 className="title-section-big text-yellow">Little Lemon</h1>
            <h4 className="title-subsection">Chicago</h4>
            <p className="text-regular text-regular-bold text-hero">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              consequatur vel excepturi maxime cumque molestiae vitae aut neque
              eos voluptates, quidem quam culpa quae accusamus eum praesentium
              dolor, illo veniam.
            </p>
            <button className="btn btn-primary">Reserve a table</button>
          </article>
          <figure className="img img-hero">
            <img src=""></img>
          </figure>
        </div>
      </section>
    </>
  );
}
