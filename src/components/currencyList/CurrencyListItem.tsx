import {
  ListItem,
  ListItemText,
  Divider,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { CurrencyListItemProps } from "../../interfaces/props";

const CurrencyListItem = (props: CurrencyListItemProps) => {
  return (
    <>
      <ListItem>
        <ListItemText
          primary={props.currency}
          secondary={
            <>
              <Box>
                <TrendingUpIcon />
                <Typography
                  component="span"
                  variant="body2"
                  color={"text.primary"}
                >
                  {}
                </Typography>
              </Box>

              <Box>
                <TrendingDownIcon />
                <Typography
                  component="span"
                  variant="body2"
                  color={"text.primary"}
                >
                  {}
                </Typography>
              </Box>
            </>
          }
        />
      </ListItem>
      <Divider />
    </>
  );
};

export default CurrencyListItem;
