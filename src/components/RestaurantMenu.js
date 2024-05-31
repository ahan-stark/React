import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantAccordian from "./RestuarantAccordion";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showAccordian, setshowAccordian] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  console.log(resInfo);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const catagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h2 className="font-bold text-2xl mb-5 mt-3">{name}</h2>
      <h3 className="font-bold text-lg mb-4">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2 className="text-lg font-bold">Menu</h2>
      {catagories.map((catagory, index) => {
        return (
          <RestaurantAccordian
            data={catagory?.card}
            key={index}
            showAccordian={index === showAccordian ? true : false}
            setshowAccordian={() => {
              setshowAccordian(index);
            }}
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
