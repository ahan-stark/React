import React, { useEffect, useState } from "react";
import { InstaMartCategoryView } from "../Constants";

const useGetIndividualCategory = (props) => {
  const searchVal = props.replaceAll(" ", "%20");
  const [data, setData] = useState(null);
  const fetchCatergoryDetails = async () => {
    const categoryData = await fetch(InstaMartCategoryView.replace("enter_name", searchVal));
    const categoryDataJson = await categoryData.json();
    setData(categoryDataJson);
  };
  useEffect(() => {
    fetchCatergoryDetails();
  }, []);

  return data;
};

export default useGetIndividualCategory;
