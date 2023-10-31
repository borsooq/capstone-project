import React from "react";
import "./../App.css";

export default function About() {
  return (
    <>
      <section className="container section-about">
        <article>
          <h1 className="title-section-big">Little Lemon</h1>
          <h4 className="title-subsection">Chicago</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
            consequatur vel excepturi maxime cumque molestiae vitae aut neque
            eos voluptates, quidem quam culpa quae accusamus eum praesentium
            dolor, illo veniam.
          </p>
        </article>
        <div className="container figures-about">
          <figure>
            <img src="" />
          </figure>
          <figure>
            <img src="" />
          </figure>
        </div>
      </section>
    </>
  );
}
