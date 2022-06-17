import BlockIcon from "@mui/icons-material/Block";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FullScreenCenter from "./FullScreenCenter";

const Redirect = () => {
  return (
    <FullScreenCenter>
      <Grid container direction={"column"} alignItems={"center"}>
        <BlockIcon fontSize="large" color="primary" />
        <h1>You must log in to access this page</h1>
        <Link to={"/"}>Log In</Link>
      </Grid>
    </FullScreenCenter>
  );
};

export default Redirect;
