import React, { useEffect, useRef, useState } from "react";
import "./../App.css";
import BookingForm from "./BookingForm";
import useLocalStorage from "./useLocalStorage.js";

export default function BookingPage(props) {
  return (
    <>
      <h2>Booking Page</h2>
      <BookingForm
        state={props.state}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
        selectedDate={props.selectedDate}
        //saveLocalData={props.saveLocalData}
      />
      <table data-testid="bookings">
        <thead>
          <tr>
            <th data-testid="table-date">Date</th>
            <th>Time</th>
            <th>Number of guests</th>
            <th>Occasion</th>
          </tr>
        </thead>
        <tbody>
          {props.booked?.map((booking, index) => {
            return (
              <tr data-testid={booking.date} key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.guests}</td>
                <td>{booking.occasion}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
