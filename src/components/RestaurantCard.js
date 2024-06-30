import { CDN_URL } from "../utils/Constants.js";
const RestaurantCard = (props) => {
  const { resDetails } = props;
  const { id, name, costForTwo, cloudinaryImageId, areaName, avgRating } = resDetails;
  return (
    <div className="m-4 p-4 h-[350px] w-[190px] bg-orange-200 rounded-2xl hover:bg-orange-300 hover:text-white" data-testid = "totalRes">
      <img className=" h-[55%] rounded-xl" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-1 text-sm">{name}</h3>
      <h4>{areaName}</h4>
      <span>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
