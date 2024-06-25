import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should Load the Contact component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Checks if the mail placeholder is present is present", () => {
  render(<Contact />);
  const submit = screen.getByPlaceholderText("mail");
  expect(submit).toBeInTheDocument();
});
test("should load 2 input boxes", () => {
  render(<Contact />);
  const twoInputs = screen.getAllByRole("textbox");
  expect(twoInputs.length).toBe(2);
});
