import "./../App.css";
import React, { useState } from "react";
import moment from "moment";
import Moment from "react-moment";

export default function BookingForm() {
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [availableOccasions, setAvailableOccasions] = useState([
    "Birthday",
    "Anniversary",
  ]);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  const setSelectedOption = (time) => {
    setSelectedTime(time);

    console.log(date);
    console.log(numberOfGuests);
    console.log(selectedOccasion);
  };

  const setSelectedOccasionHandler = (occasion) => {
    setSelectedOccasion(occasion);

    console.log(date);
    console.log(numberOfGuests);
  };

  return (
    <form className="form-table">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={(e) => setSelectedOption(e.target.value)}>
        {availableTimes.map((time) => {
          return (
            <option key={time} value={time}>
              {time}
            </option>
          );
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        onChange={(e) => setSelectedOccasionHandler(e.target.value)}
      >
        {availableOccasions.map((availableOccasion) => {
          return (
            <option key={availableOccasion} value={availableOccasion}>
              {availableOccasion}
            </option>
          );
        })}
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}
