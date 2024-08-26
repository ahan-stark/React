import React from "react";
import { instaMartCDN_URL } from "../../utils/Constants";
import { useDispatch } from "react-redux";
import { addToInstaMartCart } from "../../utils/instaMartCartSlice";

const InstaMartIndividualProduct = (props) => {
  const dispatch = useDispatch();
  console.log(props);

  let { display_name, id, images, price } = props.value.variations[0];
  const addToCart = () => {
    dispatch(
      addToInstaMartCart({
        display_name: display_name,
        id: id,
        images: images,
        price: price,
      })
    );
  };
  return (
    <div className="border-[3px] border-orange-500 w-[20%] rounded-3xl h-[25em] cursor-pointer hover:scale-105">
      <div className="h-[67%]">
        <img
          src={instaMartCDN_URL + images[0]}
          alt="no internet"
          className="rounded-xl h-[95%] mx-auto py-4 mt-2"
        />
      </div>
      <div className="h-[14%]">
        <div className="text-center font-semibold text-green-700 overflow-hidden text-ellipsis h-5/6 ">
          {display_name}
        </div>
      </div>
      <div className="h-[6%] flex px-20 gap-2">
        <div className="text-center font-bold text-orange-500 line-through">
          {" "}
          ₹{price.mrp}
        </div>
        <div className="text-center font-bold text-orange-500 ">
          {" "}
          ₹{price.offer_price}
        </div>
      </div>
      <div className="h-[13%] mt-2">
        <button
          className=" bg-orange-400 w-[4em] h-[1.8em] mx-[37%]  rounded-lg text-white font-semibold"
          onClick={() => {
            addToCart();
          }}
        >
          add
        </button>
      </div>
    </div>
  );
};

export default InstaMartIndividualProduct;
