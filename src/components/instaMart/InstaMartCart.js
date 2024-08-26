import { useDispatch, useSelector } from "react-redux";
import InstaMartCartProducts from "./InstaMartCartProducts";
import InstaMartIndividualProduct from "./InstaMartIndividualProduct";
import { useEffect, useState } from "react";
import { clearCart } from "../../utils/instaMartCartSlice";

const InstaMartCart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((store) => store.instaMartCart.cart);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const total = cartData.reduce(
      (accumulator, val) => accumulator + val.price.offer_price,
      0
    );
    setTotalCost(total);
  }, []);
  const clearCartData = () => {
    dispatch((clearCart()));
  };
  return (
    <div>
      {cartData.length == 0 && (
        <div className="text-center font-bold text-3xl text-orange-500 mt-8">
          Cart is Empty!
        </div>
      )}
      {cartData.length > 0 && (
        <button
          className=" bg-orange-400 text-white font-semibold rounded-md w-24 h-8 mx-[45%] mt-4"
          onClick={() => {
            clearCartData();
          }}
        >
          Clear Cart
        </button>
      )}
      <div className="flex gap-6 flex-wrap">
        {cartData.map((val, index) => {
          return <InstaMartCartProducts data={val} key={index} />;
        })}
      </div>
      {cartData.length > 0 && (
        <div className="text-center mt-8 font-semibold text-orange-500 text-2xl mb-4">
          {" "}
          Total : ₹ {totalCost}
        </div>
      )}
    </div>
  );
};
export default InstaMartCart;
