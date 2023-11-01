import React from "react";
import "./../App.css";
import SpecialsItem from "./SpecialsItem";
import bruschetta from "./../images/bruchetta.svg";
import lemonDessert from "./../images/lemon dessert.jpg";
import greekSalad from "./../images/greek salad.jpg";

export default function Specials() {
  return (
    <>
      <section className="container highlights-section">
        <header className="section container header-highlights">
          <h2 className="title-section">This week specials!</h2>
          <button className="btn btn-primary btn-right-center">
            Order Online
          </button>
        </header>
        <div className="container highlights-items">
          <SpecialsItem imgUrl={greekSalad} />
          <SpecialsItem imgUrl={bruschetta} />
          <SpecialsItem imgUrl={lemonDessert} />
        </div>
      </section>
    </>
  );
}
