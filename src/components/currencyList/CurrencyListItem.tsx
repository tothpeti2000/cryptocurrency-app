import { ListItem, ListItemText, Divider } from "@mui/material";
import { CurrencyListItemProps } from "../../interfaces/props";

const CurrencyListItem = (props: CurrencyListItemProps) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={props.currency} />
      </ListItem>
      <Divider />
    </>
  );
};

export default CurrencyListItem;
