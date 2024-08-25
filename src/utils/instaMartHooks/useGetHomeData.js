import React, { useEffect, useState } from "react";

const useGetHomeData = () => {
  const [data, setData] = useState(null);
  const getHomePage = async () => {
    const homeData = await fetch(
      "https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP"
    );
    const homeDataJson = await homeData.json();
    setData(homeDataJson);
  };
  useEffect(() => {
    getHomePage();
  }, []);
  console.log(data);
  
  return data;
};

export default useGetHomeData;
