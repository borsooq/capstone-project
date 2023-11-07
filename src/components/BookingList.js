import React from "react";

export default function BookingList(props) {
  return (
    <table data-testid="bookings">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Number of guests</th>
          <th>Occasion</th>
        </tr>
      </thead>
      <tbody>
        {props.booked?.map((booking, index) => {
          return (
            <tr key={index}>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.guests}</td>
              <td>{booking.occasion}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
