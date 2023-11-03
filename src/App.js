import "./App.css";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import React, { useReducer, useState } from "react";

function App() {
  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(state, action) {
    console.log("executed");
    console.log(action);
    switch (action.type) {
      case "add": {
        console.log(action.reservation);
        return [...state, action.reservation];
      }
      default: {
        return initializeTimes;
      }
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking-page"
          element={<BookingPage state={state} addReservation={updateTimes} />}
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
