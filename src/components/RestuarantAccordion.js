import ItemList from "./ItemList";

const RestaurantAccordian = (props) => {
  const { data } = props;
  const { title } = data.card;
  return (
    <div>
      <div className="w-[50%] ml-[25%] bg-slate-200 shadow-lg p-4 my-5">
        <div className="flex justify-between">
          <span className="text-lg font-bold text-orange-400">
            {title} ({data.card.itemCards.length})
          </span>
          <span>{"⬇️"}</span>
        </div>
        <ItemList items={data.card.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantAccordian;
