import { useEffect, useState } from "react";
import { resUrl } from "./Constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData(resId);
  }, []);
  const fetchData = async (resId) => {
    const data = await fetch(resUrl + resId);
    const json = await data.json();
    console.log(json);
    setresInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
