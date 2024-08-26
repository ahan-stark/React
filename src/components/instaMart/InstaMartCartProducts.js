import React from "react";
import { instaMartCDN_URL } from "../../utils/Constants";

const InstaMartCartProducts = (props) => {
  const { data } = props;
  const { display_name, images, price } = data;

  return (
    <div className="w-[32%] mt-10">
      <div className="">
        <img
          src={instaMartCDN_URL + images[0]}
          alt="no internet"
          className="h-[16em] w-[16em] rounded-xl m-auto border-[2px] border-orange-500"
        />
        <div className="text-orange-500 font-semibold pt-4 text-center">{display_name}</div>
        <div className="font-bold text-center"> ₹  {price.offer_price}</div>
      </div>
    </div>
  );
};

export default InstaMartCartProducts;
