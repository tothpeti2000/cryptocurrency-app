import { Link } from "react-router-dom";

const Redirect = () => {
  return (
    <>
      <h1>You must log in to access this page</h1>
      <Link to={"/"}>Log In</Link>
    </>
  );
};

export default Redirect;
