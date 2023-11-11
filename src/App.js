import "./App.css";
import { formatDate, parseDate } from "./components/Utilities.js";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Login from "./components/Login";
import { Routes, Route, useRoutes, useNavigate } from "react-router-dom";
import React, { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";

function App() {
  const [availableTimes, setAvailableTimes] = useState();
  const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes(selectedDate);
  }, []);

  async function initializeTimes(date) {
    const data = await fetchAPI(date);
    setAvailableTimes(data);
  }

  async function submitForm(form) {
    const result = await submitAPI(form);
    if (result === true) {
      navigate("/Confirmation");
    }
  }

  function updateTimes(state, action) {
    switch (action) {
      case "updateDate": {
        setSelectedDate(state);
        initializeTimes(state);
      }
      case "updateTime": {
        return state;
      }
      default:
        return state;
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking-page"
          element={
            <BookingPage
              state={availableTimes}
              dispatch={updateTimes}
              selectedDate={selectedDate}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={() => <Reservations myProp="value" />}
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
