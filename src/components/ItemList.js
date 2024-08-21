import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/Constants";
import { addItems } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => {        
        return (
          <div
            className="mt-4  bg-orange-200 shadow-lg p-4 rounded-3xl hover:bg-orange-300"
            key={item?.card?.info?.id}
          >
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-[20%]  h-[100%] m-auto rounded-xl"
            ></img>
            <button
              className="p-2 bg-black  text-orange-200 shadow-lg mt-4 w-12 h-8 py-1"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              Add
            </button>
            <div className="my-2">
              <span className="text-orange-800 text-lg">
                {item?.card?.info?.name}
              </span>
              <span className="text-green-800">
                {" "}
                : ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
              <div className="text-sm">{item?.card?.info?.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
