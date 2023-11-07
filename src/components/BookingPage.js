import React from "react";
import useLocalStorage from "./useLocalStorage.js";
import "./../App.css";
import BookingForm from "./BookingForm";
import BookingList from "./BookingList";
import Nav from "./Nav";

export default function BookingPage(props) {
  const [booked, setBooked] = useLocalStorage("booked", [{}]);
  return (
    <>
      <Nav />
      <main className="container">
        <h2>Booking Page</h2>
        <BookingForm
          state={props.state}
          dispatch={props.dispatch}
          submitForm={props.submitForm}
          selectedDate={props.selectedDate}
        />
        <BookingList booked={booked} />
      </main>
    </>
  );
}
