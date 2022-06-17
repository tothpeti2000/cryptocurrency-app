import { Grid } from "@mui/material";
import { FC } from "react";

const FullScreenCenter: FC = ({ children }) => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Grid container direction={"column"} alignItems={"center"}>
        {children}
      </Grid>
    </Grid>
  );
};

export default FullScreenCenter;
