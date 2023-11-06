import "./../App.css";
import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function BookingForm(props) {
  const availableOccasions = ["Birthday", "Anniversary"];
  const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(1);
  const [booked, setBooked] = useLocalStorage("booked", [{}]);
  const [selectedOccasion, setSelectedOccasion] = useState(
    availableOccasions[0]
  );

  const [selectedTime, setSelectedTime] = useState();

  function dateChangeHandler(date) {
    props.dispatch(date, "updateDate");
  }

  function selectedTimeHandler(time) {
    setSelectedTime(time);
    props.dispatch(time, "updateTime");
  }

  const setSelectedOccasionHandler = (occasion) => {
    setSelectedOccasion(occasion);
    props.dispatch(occasion, "updateOccasion");
  };

  const setSelectedNumberOfGuestsHandler = (numberOfGuests) => {
    setSelectedNumberOfGuests(numberOfGuests);
    props.dispatch(numberOfGuests, "updateNumberOfGuests");
  };

  return (
    <form
      className="form-table"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = {
          guests: selectedNumberOfGuests,
          occasion: selectedOccasion,
          time: selectedTime ?? props.state[0],
          date: props.selectedDate,
        };

        props.submitForm(formData);
        props.dispatch(formData, "addReservation");
        setBooked([...booked, formData]);
        //props.saveLocalData(formData);
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={props.selectedDate}
        onChange={(e) => {
          dateChangeHandler(e.target.value);
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        data-testid="select-time"
        id="res-time"
        onChange={(e) => {
          selectedTimeHandler(e.target.value);
          props.dispatch(e.target.value, "updateTime");
        }}
      >
        {props.state?.map((time) => {
          return (
            <option key={time} value={time} data-testid="select-option">
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
        data-testid="select-guests"
        value={selectedNumberOfGuests}
        onChange={(e) => setSelectedNumberOfGuestsHandler(e.target.value)}
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
