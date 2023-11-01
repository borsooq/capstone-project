import "./../App.css";
import React, { Routes, Route } from "react";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
