import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders without crashing", () => {
  render(<App />);
  const symptomizer = screen.getAllByText(/Symptomizer/i);
  expect(symptomizer.length).toBeGreaterThanOrEqual(1);
});
