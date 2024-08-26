import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import CartItems from "./CartItems";
import { useEffect, useState } from "react";

const Cart = () => {
  const cartData = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const [totalCost, setTotalCost] = useState(0);
  const clearCart = () => {
    dispatch(clearItem());
  };
  console.log(cartData);
  useEffect(() => {
    if (cartData.length > 0) calculateTotal();
  }, []);
  const calculateTotal = () => {
    let total = cartData.reduce(
      (accumulator, data) => accumulator + data.card?.info?.price / 100,
      0
    );
    setTotalCost(total);
  };

  return (
    <div className="text-center m-10 p -10">
      <h1 className="font-bold text-orange-400 text-5xl">Cart</h1>
      {cartData.length === 0 ? (
        <h2 className="text-orange-500 text-xl m-6">Cart Is Empty</h2>
      ) : (
        <div>
          <button
            className="p-2 m-2 text-white font-semibold h-8 py-1 mt-10 mb-12 rounded-xl bg-orange-400"
            onClick={() => {
              clearCart();
            }}
          >
            Clear Cart
          </button>
          <div className="flex gap-6 flex-wrap">
            {cartData.map((items) => (
              <CartItems content={items} />
            ))}
          </div>
          <div className="mt-8 font-bold text-2xl text-orange-500">
            <div>Total : ₹ {Math.round(totalCost)}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
