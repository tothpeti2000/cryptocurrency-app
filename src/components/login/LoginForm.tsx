import { Button, Grid } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserCredentials } from "../../interfaces/user";
import InputField from "./InputField";

const LoginForm = () => {
  const { handleSubmit, control } = useForm<UserCredentials>();

  const onSubmit: SubmitHandler<UserCredentials> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        direction="column"
        width={"50%"}
        padding={5}
        borderRadius={5}
        bgcolor={"grey.300"}
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
