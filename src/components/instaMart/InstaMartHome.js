import React from "react";
import useGetHomeData from "../../utils/instaMartHooks/useGetHomeData";
import Shimmer from "../Shimmer";
import InstaMartCategory from "./InstaMartCategory";

const InstaMartHome = () => {
  const homeData = useGetHomeData();
  if (homeData == null) return <Shimmer />;

  const { data } = homeData.data.widgets[3]
  return (
    <div>
      <div className="">
        <InstaMartCategory categoryData={data} />
      </div>
    </div>
  );
};

export default InstaMartHome;
