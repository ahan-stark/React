import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
  const cartData = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-10 p -10">
      <h1 className="font-bold text-orange-400 text-5xl">Cart</h1>
      {cartData.length === 0 ? (<h2 className="text-orange-500 text-xl m-6">Cart Is Empty</h2>) :
      (<div>
      <button
        className="p-2 m-2 text-orange-400 h-8 py-1 my-8 rounded-xl"
        onClick={() => {clearCart()}}
      >
        Clear Cart
      </button>
      <ItemList items={cartData}></ItemList>
      </div>)
}
    </div>
  );
};
export default Cart;
