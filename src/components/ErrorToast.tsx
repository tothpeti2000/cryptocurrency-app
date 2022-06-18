import { Alert, IconButton, Snackbar } from "@mui/material";
import { useToggleContext } from "../context/ToggleContext";
import { ErrorToastProps } from "../interfaces/props";
import CloseIcon from "@mui/icons-material/Close";

const ErrorToast = (props: ErrorToastProps) => {
  const { isOpen, close } = useToggleContext();

  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={6000}
      onClose={close}
    >
      <Alert severity="error" variant="filled">
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default ErrorToast;
