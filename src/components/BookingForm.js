import "./../App.css";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage.js";

export default function BookingForm(props) {
  const [submitAvailable, setSubmitAvailable] = useState(false);
  const availableOccasions = ["Birthday", "Anniversary"];
  const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(1);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedNewDate, setSelectedNewDate] = useState(props.selectedDate);
  const [selectedDateValid, setSelectedDateValid] = useState(true);
  const [booked, setBooked] = useLocalStorage("booked", [{}]);
  const [selectedOccasion, setSelectedOccasion] = useState(
    availableOccasions[0]
  );
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    updateDates(props.selectedDate);
    updateAvailableTimes(props.state);
  }, [props.state]);

  function updateAvailableTimes(times) {
    if (times && times.length !== 0) {
      setSubmitAvailable(true);
    }
  }

  function updateDates(selectedDate) {
    setSelectedNewDate(selectedDate);
    setSelectedDate(selectedDate);
  }

  function validateReservationDate(value) {
    const today = new Date().setHours(0, 0, 0, 0);
    const selectedDate = Date.parse(value);
    return today <= selectedDate;
  }

  function dateChangeHandler(date) {
    setSelectedNewDate(date);
    const isValidDate = validateReservationDate(date);

    setSelectedDateValid(isValidDate);

    if (isValidDate) {
      props.dispatch(date, "updateDate");
    }
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

  function submitForm(formData) {
    props.submitForm(formData);
    props.dispatch(formData, "addReservation");
    setBooked([...booked, formData]);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    const formData = {
      guests: selectedNumberOfGuests,
      occasion: selectedOccasion,
      time: selectedTime ?? props.state[0],
      date: selectedDate,
    };

    submitForm(formData);
  }

  return (
    <form
      className="form-table"
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={selectedNewDate}
        onChange={(e) => {
          dateChangeHandler(e.target.value);
        }}
        className={selectedDateValid === true ? "valid" : "invalid"}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        data-testid="select-time"
        disabled={props.selectedDate !== selectedDate || !selectedDateValid}
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
      <input
        type="submit"
        value="Make Your reservation"
        disabled={
          !submitAvailable ||
          props.selectedDate !== selectedDate ||
          !selectedDateValid
        }
      />
    </form>
  );
}
