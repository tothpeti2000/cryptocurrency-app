import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid } from "@mui/material";
import { useEffect } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useErrorContext } from "../../context/ErrorContext";
import { useUserContext } from "../../context/UserContext";
import { UserCredentials } from "../../interfaces/user";
import ErrorToast from "../ErrorToast";
import InputField from "./InputField";

const LoginForm = () => {
  const { user, loginUser, loginSchema } = useUserContext();
  const navigate = useNavigate();
  const { showError } = useErrorContext();

  useEffect(() => {
    // If the user is logged in already, redirect to the dashboard
    user && navigate("/dashboard");
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserCredentials>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<UserCredentials> = async (data) => {
    try {
      await loginUser(data);
      navigate("/dashboard");
    } catch (err) {
      showError(String(err));
    }
  };

  const onError: SubmitErrorHandler<UserCredentials> = (error) => {
    showError(error.userName?.message ?? "", error.password?.message ?? "");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
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
