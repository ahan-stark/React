import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../Body";
import MockData from "../mockData/resJsonPromise.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});

test("should search restaurants", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const shimmerUI = screen.getAllByRole("generic");
  expect(shimmerUI.length).toBe(8);
  const button = await screen.findByRole("button", { name: "Search" });
  expect(button).toBeInTheDocument();
  const inputMovies = await screen.findByTestId("input-name");
  expect(inputMovies).toBeInTheDocument();

  fireEvent.change(inputMovies, { target: { value: "burger" } });
  fireEvent.click(button);
  const totalResData = await screen.findAllByTestId("totalRes");
  expect(totalResData.length).toBe(5);
});
test("should load top-rated restaurants", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
  const topResBtn = await screen.findByRole("button", {
    name: "Top rated",
  });
  expect(topResBtn).toBeInTheDocument();
  fireEvent.click(topResBtn);
  const totalResData = await screen.findAllByTestId("totalRes");
  expect(totalResData.length).toBe(2);
});
