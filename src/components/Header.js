import { useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
const Header = () => {
  let [loginBtn, setloginBtn] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li ><Link to = "/">Home</Link></li>
          <li><Link to = "/about">About</Link></li>
          <li><Link to= "/contact">Contact</Link></li>
          <button
            className="login-btn"
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
