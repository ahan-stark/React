import ItemList from "./ItemList";

const RestaurantAccordian = (props) => {
  const { data } = props;
  const { title } = data.card;
  const { showAccordian, setshowAccordian } = props;
  return (
    <div>
      <div className="w-[50%] ml-[25%]  my-5 rounded-2xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setshowAccordian();
          }}
        >
          <span className="text-lg font-bold text-orange-400">
            {title} ({data.card.itemCards.length})
          </span>
          <span>{"⬇️"}</span>
        </div>
        {showAccordian && <ItemList items={data.card.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantAccordian;
