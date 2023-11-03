import React from "react";
import "./../App.css";
import { Link } from "react-router-dom";

export default function FooterLink(props) {
  const { link } = props;

  return (
    <Link to={link.url} key={link.key} className="link link-footer">
      {link.linkName}
    </Link>
  );
}
