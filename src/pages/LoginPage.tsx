import { Box, Grid } from "@mui/material";
import LoginForm from "../components/login/LoginForm";
import Title from "../components/Title";

const LoginPage = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      bgcolor={"#f0f2f5"}
    >
      <Box>
        <Title />
        <LoginForm />
      </Box>
    </Grid>
  );
};

export default LoginPage;
