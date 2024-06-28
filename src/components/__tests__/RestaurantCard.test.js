import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import resMockData from "../../components/mockData/resDatamock.json";
import "@testing-library/jest-dom";

test("should render restaurant with proper comp", () => {
  render(<RestaurantCard resDetails={resMockData.info} />);
  const restaurantName = screen.getByText("KFC");
  expect(restaurantName).toBeInTheDocument();
});
