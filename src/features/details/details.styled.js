import { styled, Chip, Divider } from "@mui/material";
const MovieChip = styled(Chip)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.custom.chipbg,
  fontWeight: "600",
  marginLeft: 0,
}));
const MovieDivider = styled(Divider)(({ theme }) => ({
  ":after,:before": { borderColor: theme.palette.primary },

  margin: "1rem 0",
}));

export { MovieChip, MovieDivider };
