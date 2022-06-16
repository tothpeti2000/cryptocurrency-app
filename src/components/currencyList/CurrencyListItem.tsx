import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { CurrencyListItemProps } from "../../interfaces/props";

const CurrencyListItem = (props: CurrencyListItemProps) => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={props.currency.name}
          secondary={
            <Typography component={"div"}>
              <Box>
                <TrendingUpIcon />
                <Typography
                  component="span"
                  variant="body2"
                  color={"text.primary"}
                >
                  {props.currency.name}
                </Typography>
              </Box>

              <Box>
                <TrendingDownIcon />
                <Typography
                  component="span"
                  variant="body2"
                  color={"text.primary"}
                >
                  {props.currency.name}
                </Typography>
              </Box>
            </Typography>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default CurrencyListItem;
