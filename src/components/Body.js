import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { resHomeUrl } from "../utils/Constants";
const Body = () => {
  let [resData, setresData] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filterdRes, setfilterdRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(resHomeUrl);
      const dynamicApi = await data.json();
      resData =
        dynamicApi?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setresData(resData);
      setfilterdRes(resData);
    } catch {
      alert("no internet connection, reload the page when connected!");
    }
  };
  return !resData.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-4 flex items-center">
          <input
            className="border border-solid border-orange-400 hover:border-orange-600"
            type="text"
            data-testid="input-name"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-0.48 bg-orange-400 m-4 rounded-lg text-white  hover:bg-orange-500  hover:text-white"
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
          className=" h-6 mt-10  px-4 bg-orange-400 text-white rounded-lg hover:bg-orange-500 hover:text-white"
          onClick={() => {
            let updatedRes = resData.filter(
              (res) => res.info.avgRatingString > 4.5
            );
            setfilterdRes(updatedRes);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="flex flex-wrap" data-testid="totalRes">
        {filterdRes.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resDetails={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
