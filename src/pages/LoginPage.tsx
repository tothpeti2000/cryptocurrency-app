import { Box } from "@mui/material";
import FullScreenCenter from "../components/FullScreenCenter";
import LoginForm from "../components/login/LoginForm";
import Title from "../components/Title";

const LoginPage = () => {
  return (
    <FullScreenCenter>
      <Box>
        <Title />
        <LoginForm />
      </Box>
    </FullScreenCenter>
  );
};

export default LoginPage;
