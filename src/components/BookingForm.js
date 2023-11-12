import "./../App.css";
import React, { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage.js";
import { formatDate } from "./Utilities.js";

export default function BookingForm(props) {
  const [submitAvailable, setSubmitAvailable] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [selectedNewDate, setSelectedNewDate] = useState(props.selectedDate);
  const [selectedDateValid, setSelectedDateValid] = useState(true);
  const [validationErrorMessage, setValidationErrorMessage] = useState();
  const [booked, setBooked] = useLocalStorage("booked", [{}]);
  const [selectedTime, setSelectedTime] = useState();
  const [selectedNumberOfGuests, setSelectedNumberOfGuests] = useState(1);
  const availableOccasions = ["Birthday", "Anniversary"];
  const [selectedOccasion, setSelectedOccasion] = useState(
    availableOccasions[0]
  );
  const maxDaysForward = 30;
  const maxNumberOfGuests = 10;
  const minNumberOfGuests = 1;

  useEffect(() => {
    updateDates(props.selectedDate);
    updateAvailableTimes(props.state);
  }, [props.state]);

  function getMaxDate() {
    const today = new Date();
    let aMonthForward = new Date();
    return aMonthForward.setDate(today.getDate() + maxDaysForward);
  }

  function updateAvailableTimes(times) {
    if (times && times.length !== 0) {
      setSubmitAvailable(true);
    }
  }

  function updateDates(selectedDate) {
    setSelectedNewDate(selectedDate);
    setSelectedDate(selectedDate);
  }

  function validateTooEarlyReservationDate(value) {
    const today = new Date().setHours(0, 0, 0, 0);
    const selectedDate = Date.parse(value);

    const validationResult = today <= selectedDate;

    return validationResult;
  }

  function validateTooLateReservationDate(value) {
    const maxDate = getMaxDate();
    const selectedDate = Date.parse(value);

    const validationResult = selectedDate < maxDate;

    return validationResult;
  }

  function validateDate(date) {
    const isNotTooEarly = validateTooEarlyReservationDate(date);
    const isNotTooLate = validateTooLateReservationDate(date);

    !isNotTooEarly && setValidationErrorMessage("Date cannot be in the past");
    !isNotTooLate &&
      setValidationErrorMessage("We don't do reservations for this date yet");

    setSelectedDateValid(isNotTooEarly && isNotTooLate);

    return isNotTooEarly && isNotTooLate;
  }

  function dateChangeHandler(date) {
    setSelectedNewDate(date);

    const isValid = validateDate(date);

    if (isValid) {
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
      className="form-booking"
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <fieldset>
        <p>
          <label htmlFor="res-date">Choose date</label>
          <input
            data-testid="input-date"
            type="date"
            id="res-date"
            value={selectedNewDate}
            min={new Date().toJSON().slice(0, 10)}
            max={formatDate(new Date(getMaxDate()))}
            onChange={(e) => {
              dateChangeHandler(e.target.value);
            }}
            className={selectedDateValid === true ? "valid" : "invalid"}
          />
          {!selectedDateValid && (
            <div data-testid="error-date">{validationErrorMessage}</div>
          )}
        </p>
        <p>
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
        </p>
        <p>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min={minNumberOfGuests}
            max={maxNumberOfGuests}
            id="guests"
            data-testid="select-guests"
            value={selectedNumberOfGuests}
            onChange={(e) => setSelectedNumberOfGuestsHandler(e.target.value)}
          />
          {selectedNumberOfGuests > maxNumberOfGuests && (
            <div data-testid="select-guests-error">
              Maximum is {maxNumberOfGuests}
            </div>
          )}
          {selectedNumberOfGuests < minNumberOfGuests && (
            <div data-testid="select-guests-error">
              Minimum is {minNumberOfGuests}
            </div>
          )}
        </p>
        <p>
          <label htmlFor="occasion">Occasion</label>
          <select
            data-testid="input-occasion"
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
        </p>
      </fieldset>
      <input
        data-testid="submit"
        className="btn btn-primary"
        type="submit"
        value="Reserve"
        disabled={
          !submitAvailable ||
          props.selectedDate !== selectedDate ||
          !selectedDateValid
        }
      />
    </form>
  );
}
