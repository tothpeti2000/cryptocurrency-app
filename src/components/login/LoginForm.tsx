import { Button, Grid } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUserContext } from "../../context/UserContext";
import { UserCredentials } from "../../interfaces/user";
import InputField from "./InputField";

const LoginForm = () => {
  const { handleSubmit, control } = useForm<UserCredentials>();
  const { loginUser } = useUserContext();

  const onSubmit: SubmitHandler<UserCredentials> = (data) => {
    loginUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        bgcolor={"white"}
        p={5}
        borderRadius={5}
        boxShadow={5}
      >
        <InputField
          name="userName"
          control={control}
          label="Username"
          type="text"
        />
        <InputField
          name="password"
          control={control}
          label="Password"
          type="password"
        />

        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </Grid>
    </form>
  );
};

export default LoginForm;
