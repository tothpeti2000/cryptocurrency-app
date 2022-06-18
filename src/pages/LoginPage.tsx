import { Stack } from "@mui/material";
import FullScreenCenter from "../components/FullScreenCenter";
import LoginForm from "../components/login/LoginForm";
import Title from "../components/Title";

const LoginPage = () => {
  return (
    <FullScreenCenter>
      <Stack>
        <Title />
        <LoginForm />
      </Stack>
    </FullScreenCenter>
  );
};

export default LoginPage;
