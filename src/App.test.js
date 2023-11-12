import {
  render,
  screen,
  fireEvent,
  prettyDOM,
  waitFor,
} from "@testing-library/react";

import BookingForm from "./components/BookingForm";
import HomePage from "./components/HomePage";
import App from "./App";
import BookingPage from "./components/BookingPage";
import { MemoryRouter } from "react-router-dom";

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
  const headingElement = screen.getByText("Reserve");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the BookingPage heading", () => {
  render(
    <MemoryRouter>
      <BookingPage state={["17:00"]} />
    </MemoryRouter>
  );
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
  const handleDispatch = jest.fn();
  const handleSaveLocalData = jest.fn();

  const { getByTestId } = render(
    <BookingForm
      state={[initializeWithValues]}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
      saveLocalData={handleSaveLocalData}
    />
  );
  fireEvent.change(getByTestId("select-time"), {
    target: { value: testedValue },
  });

  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();
});

test("Checks saveLocalData", () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();
  const handleSubmit = jest.fn();
  Storage.prototype.setItem = jest.fn();

  const {} = render(
    <BookingForm
      state={[testedValue]}
      selectedDate={"2023-11-25"}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
    />
  );
  const submitButton = screen.getByRole("button");
  fireEvent.click(submitButton);
  expect(localStorage.setItem).toHaveBeenCalled();
});

test("Checks getFromLocalData", () => {
  Storage.prototype.getItem = jest.fn([{}]);

  const {} = render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  );

  expect(localStorage.getItem).toHaveBeenCalled();
});

test("Checks date validation - date in the past", async () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();
  const handleSubmit = jest.fn();
  Storage.prototype.setItem = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <BookingForm
      state={[testedValue]}
      selectedDate={"2023-11-25"}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
    />
  );

  const dateParagraph = getByLabelText("Choose date");
  fireEvent.change(dateParagraph, { target: { value: "2020-11-25" } });

  await waitFor(() => document.querySelector(".error-date")).then(() =>
    expect(getByTestId("error-date").innerHTML).toEqual(
      "Date cannot be in the past"
    )
  );
});

test("Checks date validation - date in too far future", async () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();
  const handleSubmit = jest.fn();
  Storage.prototype.setItem = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <BookingForm
      state={[testedValue]}
      selectedDate={"2023-11-25"}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
    />
  );

  const dateParagraph = getByLabelText("Choose date");
  fireEvent.change(dateParagraph, { target: { value: "2025-11-01" } });

  await waitFor(() => document.querySelector(".error-date")).then(() =>
    expect(getByTestId("error-date").innerHTML).toEqual(
      "We don't do reservations for this date yet"
    )
  );
});

test("Checks guests validation - too few", async () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();
  const handleSubmit = jest.fn();
  Storage.prototype.setItem = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <BookingForm
      state={[testedValue]}
      selectedDate={"2023-11-25"}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
    />
  );

  const guests = getByLabelText("Number of guests");
  fireEvent.change(guests, { target: { value: "0" } });

  await waitFor(() => document.querySelector(".error-date")).then(() =>
    expect(getByTestId("select-guests-error").innerHTML).toEqual("Minimum is 1")
  );
});

test("Checks guests validation - too many", async () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();
  const handleSubmit = jest.fn();
  Storage.prototype.setItem = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <BookingForm
      state={[testedValue]}
      selectedDate={"2023-11-25"}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
    />
  );

  const guests = getByLabelText("Number of guests");
  fireEvent.change(guests, { target: { value: "11" } });

  await waitFor(() => document.querySelector(".error-date")).then(() =>
    expect(getByTestId("select-guests-error").innerHTML).toEqual(
      "Maximum is 10"
    )
  );
});

test("Checks if submission is possible when validation errors present", async () => {
  const testedValue = "17:00";
  const handleDispatch = jest.fn();
  const handleSubmit = jest.fn();
  Storage.prototype.setItem = jest.fn();

  const { getByTestId, getByLabelText } = render(
    <BookingForm
      state={[testedValue]}
      selectedDate={"2023-11-25"}
      dispatch={handleDispatch}
      submitForm={handleSubmit}
    />
  );

  const dateParagraph = getByLabelText("Choose date");
  fireEvent.change(dateParagraph, { target: { value: "2025-11-01" } });

  await waitFor(() => document.querySelector(".btn-primary")).then(() =>
    expect(getByTestId("submit")).toBeDisabled()
  );
});
