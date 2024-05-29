import { CDN_URL } from "../utils/Constants.js";
const RestaurantCard = (props) => {
  const { resDetails } = props;
  const { info } = resDetails;
  const { id, name, costForTwo, cloudinaryImageId, areaName, avgRating } = info;
  return (
    <div className="m-4 p-4 h-[350px] w-[190px] bg-orange-200 rounded-2xl hover:bg-orange-300 hover:text-white">
      <img className=" h-[55%] rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-1 text-lg">{name}</h2>
      <h4>{areaName}</h4>
      <span>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
