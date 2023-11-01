import React from "react";
import "./../App.css";
import FooterItem from "./FooterItem";
import littleLemonLogo from "./../images/littleLemonLogo.png";

export default function Footer() {
  const linksList1 = {
    title: "Doormat navigation",
    links: [
      { linkName: "Home", url: "/", key: 1 },
      { linkName: "About", url: "/about", key: 2 },
      { linkName: "menu", url: "/menu", key: 3 },
      { linkName: "Reservations", url: "/reservations", key: 4 },
      { linkName: "Order Online", url: "/order-online", key: 5 },
      { linkName: "Login", url: "/login", key: 6 },
    ],
  };

  const linksList2 = {
    title: "Contact",
    links: [
      { linkName: "Address", url: "/address", key: 1 },
      { linkName: "phone number", url: "/phone-number", key: 2 },
      { linkName: "email", url: "/email", key: 3 },
    ],
  };

  const linksList3 = {
    title: "Social media links",
    links: [
      { linkName: "Address", url: "/address", key: 1 },
      { linkName: "phone number", url: "/phone-number", key: 2 },
      { linkName: "email", url: "/email", key: 3 },
    ],
  };

  return (
    <footer className="container footer-section">
      <div className="container">
        <figure>
          <img src={littleLemonLogo} />
        </figure>
        <div className="container footer-items">
          <FooterItem data={linksList1} />
          <FooterItem data={linksList2} />
          <FooterItem data={linksList3} />
        </div>
      </div>
    </footer>
  );
}
