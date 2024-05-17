import { CDN_URL } from "../utils/Constants.js";
const RestaurantCard = (props) => {
  const { resDetails } = props;
  const { info } = resDetails;
  const {
    id,
    name,
    costForTwo,
    cloudinaryImageId,
    areaName,
    cuisines,
    avgRating,
  } = info;
  console.log(info);
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
