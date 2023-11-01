import React from "react";
import "./../App.css";

export default function FooterLink(props) {
  const { link } = props;

  return (
    <a href={link.url} key={link.key} className="link link-footer">
      {link.linkName}
    </a>
  );
}
