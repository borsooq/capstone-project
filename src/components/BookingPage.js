import React, { useState } from "react";
import "./../App.css";
import BookingForm from "./BookingForm";

export default function BookingPage(props) {
  return (
    <>
      <h2>Booking Page</h2>
      <BookingForm state={props.state} addReservation={props.addReservation} />
      {/* {props.bookings.map((booking) => (
        <>
          <div>
            <label>{booking.date}</label>
            <label>{booking.time}</label>
            <label>{booking.occasion}</label>
            <label>{booking.numberOfGuests}</label>
          </div>
        </>
      ))} */}
    </>
  );
}
