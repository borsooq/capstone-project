import React, { useState } from "react";
import "./../App.css";
import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  return (
    <>
      <h2>Booking Page</h2>
      <BookingForm state={props.state} dispatch={props.dispatch} />
    </>
  );
}
