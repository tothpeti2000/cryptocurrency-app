import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";
import { UserCredentials } from "../../interfaces/user";
import ErrorToast from "../ErrorToast";
import InputField from "./InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToggleContext } from "../../context/ToggleContext";

const LoginForm = () => {
  const { user, loginUser, loginSchema } = useUserContext();
  const navigate = useNavigate();
  const { open } = useToggleContext();

  useEffect(() => {
    // If the user is logged in already, redirect to the dashboard
    user && navigate("/dashboard");
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserCredentials>({ resolver: yupResolver(loginSchema) });
  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<UserCredentials> = async (data) => {
    try {
      await loginUser(data);
      navigate("/dashboard");
    } catch (err) {
      setError(String(err));
      open();
    }
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

        {errors.userName?.message && (
          <ErrorToast message={errors.userName.message} />
        )}
        {errors.password?.message && (
          <ErrorToast message={errors.password.message} />
        )}
        {error && <ErrorToast message={error} />}
      </Grid>
    </form>
  );
};

export default LoginForm;
