import React from "react";
import { CDN_URL } from "../utils/Constants";

const CartItems = (props) => {
  const { content } = props;
  return (
    <div className="w-[32%]">
      <div className="hover:scale-110">
        <img
          src={CDN_URL + content.card.info.imageId}
          className="h-[14em] w-[14em] rounded-xl m-auto border-[2px] border-orange-500"
        />
        <div className="text-orange-500 font-semibold pt-4">
          {content.card.info.name}
        </div>
        <div className="font-bold">
          {" "}
          ₹{" "}
          {content?.card?.info?.price
            ? content?.card?.info?.price / 100
            : content?.card?.info?.defaultPrice / 100}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
