import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import HomePage from "./components/HomePage";
import App from "./App";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test("Renders Homepage", () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});

test("App Renders Homepage", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});

test("Renders a button in BookingForm", () => {
  render(<BookingForm state={["17:00"]} />);
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the BookingPage heading", () => {
  render(<BookingPage state={["17:00"]} />);
  const headingElement = screen.getByText(/Booking Page/i);
  expect(headingElement).toBeInTheDocument();
});

test("Checks Initialize availableTimes", () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();

  const { getByTestId, getAllByTestId } = render(
    <BookingForm state={[testedValue]} dispatch={handleDispatch} />
  );
  fireEvent.change(getByTestId("select-time"), {
    target: { value: testedValue },
  });
  let options = getAllByTestId("select-option");
  expect(options.length).toBe(1);
  expect(options[0].value).toBe(testedValue);
});

test("Checks updateTimes return value", () => {
  const initializeWithValues = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const testedValue = "17:00";
  const handleSubmit = jest.fn();

  const { getByTestId, getAllByTestId } = render(
    <BookingForm state={[initializeWithValues]} dispatch={handleSubmit} />
  );
  fireEvent.change(getByTestId("select-time"), {
    target: { value: testedValue },
  });

  const numberOfGuests = getByTestId("select-guests");
  fireEvent.change(numberOfGuests, { target: { value: 1 } });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});
