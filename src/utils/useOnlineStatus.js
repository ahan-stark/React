import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlinStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlinStatus(false);
    });
    window.addEventListener("online", () => {
      setonlinStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
