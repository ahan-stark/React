import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-orange-400 shadow-lg">
      <div>
      <Title />
      </div>
      <div className="flex items-center">
        <ul className="flex p-7">
          <li className="px-3">status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-3">
            <Link to = "/grocery">Grocery</Link>
          </li>
          <button
            className="className=px-3"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
