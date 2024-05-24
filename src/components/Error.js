import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h3>{error.status}</h3>
      <h4>This is wrong path!</h4>
    </div>
  );
};
export default Error;
