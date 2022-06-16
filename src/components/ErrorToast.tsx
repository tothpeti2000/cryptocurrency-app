import { Alert } from "@mui/material";
import { ErrorToastProps } from "../interfaces/props";

const ErrorToast = (props: ErrorToastProps) => {
  return (
    <Alert variant="filled" severity="error">
      {props.message}
    </Alert>
  );
};

export default ErrorToast;
