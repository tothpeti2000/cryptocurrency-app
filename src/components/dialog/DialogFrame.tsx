import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  DialogContentText,
} from "@mui/material";
import { FC, FormEventHandler } from "react";
import { useDialogContext } from "../../context/DialogContext";
import { DialogFrameProps } from "../../interfaces/props";

const DialogFrame: FC<DialogFrameProps> = ({
  children,
  title,
  contentText,
  onSubmit,
}) => {
  const { isOpen, close } = useDialogContext();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    close();

    onSubmit();
  };

  return (
    <Dialog open={isOpen} onClose={close}>
      <DialogTitle>{title}</DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          {children}
        </DialogContent>

        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button type="submit">OK</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default DialogFrame;
