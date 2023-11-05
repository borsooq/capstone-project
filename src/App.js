import "./App.css";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import { Routes, Route, useRoutes } from "react-router-dom";
import React, { useReducer, useState, useEffect } from "react";
import { fetchAPI, submitAPI } from "./mockAPI";

function App() {
  const [availableTimes, setAvailableTimes] = useState();

  useEffect(() => {
    const currentDate = new Date();
    const currentDateString = formatDate(currentDate);
    initializeTimes(currentDateString);
  }, []);

  async function initializeTimes(date) {
    const data = await fetchAPI(date);
    setAvailableTimes(data);
  }

  function formatDate(value) {
    var d = new Date(value),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(state, action) {
    console.log(action);
    console.log(state);
    switch (action) {
      case "updateDate": {
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
            <BookingPage state={availableTimes} dispatch={updateTimes} />
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
      </Routes>
    </>
  );
}

export default App;
