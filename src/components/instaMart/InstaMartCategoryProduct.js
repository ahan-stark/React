import React from "react";
import { instaMartCDN_URL } from "../../utils/Constants";
import { Link } from "react-router-dom";

const InstaMartCategoryProduct = (props) => {
  const { val } = props;

  const { imageId, displayName } = val;

  return (
    <div className="w-36 h-[100%] cursor-pointer">
      <img src={instaMartCDN_URL + imageId} alt="no internet"  className="hover:border-[2px] border-orange-400 rounded-2xl"/>
      <div>{displayName}</div>
    </div>
  );
};

export default InstaMartCategoryProduct;
