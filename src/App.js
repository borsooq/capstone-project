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
    const fetchData = async () => {
      const data = await fetchAPI("2023-09-18");
      setAvailableTimes(data);
    };

    fetchData();
  }, []);

  const initializeTimes = { time: "00:00" };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  function updateTimes(state, action) {
    console.log(action);
    switch (action.type) {
      case "17:00": {
        return "17:00";
      }
      case "18:00": {
        return "18:00";
      }
      case "19:00": {
        return "19:00";
      }
      case "20:00": {
        return "20:00";
      }
      case "21:00": {
        return "21:00";
      }
      case "22:00": {
        return "22:00";
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
