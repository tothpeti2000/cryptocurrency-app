import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to={"/"}>Back to Login</Link>
      <Link to={"/dashboard"}>Back to Dashboard</Link>
    </>
  );
};

export default NotFound;
