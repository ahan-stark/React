const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        console.log(item);
        return (
          <div className="border-orange-300 border-b-2 mt-4" key={item.card.info.id}>
            <span>{item.card.info.name}</span>
            <span> : ₹ {Math.floor(item.card.info.price / 100)}</span>
            {/* <div>
              <p>{item.card.info.description} </p>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
