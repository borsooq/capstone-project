import React from "react";
import "./../App.css";

export default function HighlightsItem() {
  return (
    <article className="box article-highlights">
      <figure>
        <img src=""></img>
      </figure>
      <div className="item-highlights">
        <div>
          <h3>Greek salad</h3>
          <p className="text-price">$12.99</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          ab reprehenderit! Similique accusamus modi ducimus ex, expedita sequi,
        </p>
        <div>
          <h4 className="text-bigger">Order a delivery</h4>
          <figure>
            <img src="" />
          </figure>
        </div>
      </div>
    </article>
  );
}
