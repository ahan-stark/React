import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { allResturants } from "../utils/MockResData";

const Body = () => {
  const [resData, setresData] = useState(allResturants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            updatedRes = resData.filter((res) => res.info.avgRatingString > 4);
            setresData(updatedRes);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {resData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resDetails={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
