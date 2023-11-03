import "./../App.css";
import React, { useState } from "react";
import moment from "moment";

export default function BookingForm(props) {
  const { state, addReservation } = props;

  const [availableOccasions, setAvailableOccasions] = useState([
    "Birthday",
    "Anniversary",
  ]);
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  const [selectedTime, setSelectedTime] = useState(state[0]);
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(0);

  const setSelectedOption = (time) => {
    setSelectedTime(time);
  };

  const setSelectedOccasionHandler = (occasion) => {
    setSelectedOccasion(occasion);
  };

  const onSubmitHandler = function (e) {
    e.preventDefault();
    addReservation(state, {
      reservation: {
        date: selectedDate,
        time: selectedTime,
        occasion: selectedOccasion,
        numberOfGuests: selectedNumberOfGuests,
      },
      type: "add",
    });
  };

  return (
    <form className="form-table" onSubmit={(e) => onSubmitHandler(e)}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" onChange={(e) => setSelectedOption(e.target.value)}>
        {state.map((time) => {
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
        value={selectedNumberOfGuests}
        onChange={(e) => setSelectedNumberOfGuests(e.target.value)}
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
