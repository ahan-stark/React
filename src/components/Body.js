import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  let [resData, setresData] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filterdRes, setfilterdRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const dynamicApi = await data.json();
    console.log(
      dynamicApi.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    resData =
      dynamicApi?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setresData(resData);
    setfilterdRes(resData)
  };
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="btn-search"
            onClick={() => {
              const filteredRes = resData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterdRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            updatedRes = resData.filter(
              (res) => res.info.avgRatingString > 4.5
            );
            setfilterdRes(updatedRes);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filterdRes.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resDetails={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
