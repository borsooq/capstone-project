import React from "react";
import "./../App.css";

export default function CustomersSayItem(props) {
  const { img, name, page } = props;

  return (
    <article className="box article-testimonials">
      <h5 className="text-smaller">Rating</h5>
      <div className="box testimonial-data">
        <figure>
          <img src={img} />
        </figure>
        <h5 className="text-smaller">{name}</h5>
      </div>
      <a href={page} className="text-smaller link">
        Review page
      </a>
    </article>
  );
}
