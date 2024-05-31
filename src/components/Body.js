import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { resHomeUrl } from "../utils/Constants";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  let [resData, setresData] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filterdRes, setfilterdRes] = useState([]);
  let onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const data = await fetch(resHomeUrl);
      const dynamicApi = await data.json();
      console.log(dynamicApi);
      console.log(
        dynamicApi.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants
      );
      resData =
        dynamicApi?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setresData(resData);
      setfilterdRes(resData);
    } catch {
      alert("no internet connection, reload the page when connected!");
    }
  };
  if (onlineStatus == false)
    return (
      <div>
        <h1>No Internet Connection</h1>
      </div>
    );
  return resData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-2 p-4 flex items-center">
          <input
            className="border border-solid border-orange-400 hover:border-orange-600"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-0.48 bg-orange-300 m-4 rounded-lg  hover:bg-orange-400  hover:text-white"
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
          className=" h-6 mt-10 mr-1 px-4 bg-orange-300 rounded-lg hover:bg-orange-400 hover:text-white"
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
      <div className="flex flex-wrap">
        {filterdRes.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resDetails={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
