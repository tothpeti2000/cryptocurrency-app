import { useUserContext } from "../../context/UserContext";
import DialogFrame from "./DialogFrame";

interface Props {
  assetID: string;
}

const DeleteDialog = (props: Props) => {
  const { deleteCurrency } = useUserContext();

  const handleSubmit = () => {
    deleteCurrency(props.assetID);
  };

  return (
    <DialogFrame
      title="Delete Currency"
      contentText="Are you sure you want to remove this tab?"
      onSubmit={handleSubmit}
    />
  );
};

export default DeleteDialog;
