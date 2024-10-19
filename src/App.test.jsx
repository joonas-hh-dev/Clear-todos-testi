import App from "./App";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';

test("adds a task to the list, then clears the table", () => {
  render(<App />);

  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });

  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.01.2023" } });

  const addButton = screen.getByText("Add");
  fireEvent.click(addButton);

  const table = screen.getByRole("table");
  expect(table).toHaveTextContent(/go to coffee/i);

  const clearButton = screen.getByText("Clear");
  fireEvent.click(clearButton);

  expect(table).not.toHaveTextContent(/go to coffee/i);
});