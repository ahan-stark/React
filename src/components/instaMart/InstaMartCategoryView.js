import React from "react";
import useGetIndividualCategory from "../../utils/instaMartHooks/useGetIndividualCategory";
import Shimmer from "../Shimmer";
import InstaMartIndividualProduct from "./InstaMartIndividualProduct";
import { useSearchParams } from "react-router-dom";

const InstaMartCategoryView = () => {
  const [categoryName] = useSearchParams();
  const categoryData = useGetIndividualCategory(categoryName.get("name"));
  if (categoryData == null) return <Shimmer />;
  const { data } = categoryData.data.widgets[1];
  console.log(data);

  return (
    <div>
      <div className="font-bold text-3xl text-orange-500 ml-6 mt-4">{categoryName.get("name")}</div>
      <div className="flex flex-wrap gap-16 mt-5 ml-6 ">
      {data.map((val, index) => {
        return <InstaMartIndividualProduct value={val} />;
      })}
      </div>
    </div>
  );
};

export default InstaMartCategoryView;
