import React from "react";
import "./../App.css";
import FooterLink from "./FooterLink";

export default function FooterItem(props) {
  const { data } = props;

  return (
    <article className="box article-footer">
      <h4>{data.title}</h4>
      {data.links.map((link) => (
        <FooterLink key={link.key} link={link} />
      ))}
    </article>
  );
}
