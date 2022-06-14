import { Fab } from "@mui/material";
import { Delete } from "@mui/icons-material";

const DeleteFAB = () => {
  return (
    <Fab color="error" aria-label="delete">
      <Delete />
    </Fab>
  );
};

export default DeleteFAB;
