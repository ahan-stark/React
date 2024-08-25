import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { updateShowGrocery } from "../utils/instaMartSlice";

const Grocery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateShowGrocery());
    return () => {
      dispatch(updateShowGrocery());
    };
  }, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default Grocery;
