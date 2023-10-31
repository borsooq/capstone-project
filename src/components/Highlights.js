import React from "react";
import "./../App.css";
import HighlightsItem from "./HighlightsItem";

export default function Highlights() {
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
          <HighlightsItem />
          <HighlightsItem />
          <HighlightsItem />
        </div>
      </section>
    </>
  );
}
