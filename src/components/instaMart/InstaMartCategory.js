import React from "react";
import InstaMartCategoryProduct from "./InstaMartCategoryProduct";
import { Link } from "react-router-dom";

const InstaMartCategory = (props) => {
  const { categoryData } = props;

  return (
    <div className="ml-6 mr-4">
      <div className="text-4xl font-bold text-orange-500 mt-4 mb-5">
        Categories
      </div>
      <div className="w-[100%] flex flex-wrap gap-5">
        {categoryData.map((val, index) => {
          return (
            <Link
              to={
                "/grocery/categoryView?name=" +
                val.displayName.replace(" ", "%20")
              }
              key={index}
            >
              <InstaMartCategoryProduct val={val} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default InstaMartCategory;
