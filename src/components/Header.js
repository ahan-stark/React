import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import { useSelector } from "react-redux";
const Header = () => {
  let [loginBtn, setloginBtn] = useState("Login");
  let cartItems = useSelector((store) => {
    return store.cart.items;
  });
  let showGroceryCart = useSelector(
    (store) => store.instaMartCart.showGroceryCart
  );
  return (
    <div className="flex justify-between bg-orange-400 shadow-lg">
      <div>
        <Title />
      </div>
      <div className="flex items-center">
        <ul className="flex p-7 gap-4">
          <li className="px-3  rounded-lg  bg-white text-orange-700">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3 rounded-lg  bg-white text-orange-700">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3  rounded-lg  bg-white text-orange-700">
            <Link to="/cart"> Cart - ({cartItems.length})</Link>
          </li>
          <li className="px-3 rounded-lg  bg-white text-orange-700">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3  rounded-lg  bg-white text-orange-700">
            <Link to="/grocery">Grocery</Link>
          </li>
          {showGroceryCart && (
            <li>
              <div className="px-3  rounded-lg  bg-white text-orange-700 cursor-pointer">G - cart</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
