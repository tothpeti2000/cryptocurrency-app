import { Box, Grid } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import Title from "../components/Title";

const LoginPage = () => {
  return (
    <Grid
      className="bg-radial"
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
    >
      <Box>
        <Title />
        <LoginForm />
      </Box>
    </Grid>
  );
};

export default LoginPage;
