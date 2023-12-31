import React from "react";
import "./../App.css";
import restaurant from "./../images/restauranfood.jpg";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <>
      <section className="hero-section container">
        <div className="green-background">
          <div className="section-hero-upper section">
            <article className="container">
              <header>
                <h1 className="title-section-big text-yellow">Little Lemon</h1>
                <h4 className="title-subsection">Chicago</h4>
              </header>
              <p className="text-regular text-regular-bold text-hero">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                consequatur vel excepturi maxime cumque molestiae vitae aut
                neque eos voluptates, quidem quam culpa quae accusamus eum
                praesentium dolor, illo veniam.
              </p>
              <button className="btn btn-primary">
                <Link to="/booking-page" aria-label="On Click">
                  Reserve a table
                </Link>
              </button>
            </article>
            <figure className="img img-hero">
              <img src={restaurant} />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
