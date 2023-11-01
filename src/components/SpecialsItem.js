import React from "react";
import "./../App.css";

export default function SpecialsItem(props) {
  const { imgUrl } = props;
  return (
    <article className="box article-highlights">
      <figure>
        <img src={imgUrl}></img>
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
            <img src="data:image/jpeg;base64 ,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" />
          </figure>
        </div>
      </div>
    </article>
  );
}
