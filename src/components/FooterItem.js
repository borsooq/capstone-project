import React from "react";
import "./../App.css";
import FooterLink from "./FooterLink";

export default function FooterItem() {
  return (
    <article className="box article-footer">
      <h4>Doormat navigation</h4>
      <FooterLink />
      <FooterLink />
      <FooterLink />
      <FooterLink />
      <FooterLink />
      <FooterLink />
    </article>
  );
}
