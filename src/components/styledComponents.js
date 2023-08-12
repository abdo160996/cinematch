
import { Chip,Box,Typography,styled } from "@mui/material";

const CategoryChip = styled(Chip)(({ theme }) => ({
    marginBottom: 4,
    backgroundColor: theme.palette.custom.secondary,
    color: "white",
    fontWeight: 700,
  }));
  const ShowDateChip = styled(Chip)(({ theme }) => ({
    position: "absolute",
    top: "1rem",
    left: "1rem",
    zIndex: "1",
    backgroundColor: theme.palette.custom.secondary,
    color: "white",
    fontWeight: "bold",
  }));

  const MediaTypeChip = styled(Chip)(({ theme }) => ({
    position: "absolute",
    top: "1rem",
    right: "1rem",
    zIndex: "1",
    background: "linear-gradient(to right, #159957, #155799)",
    color: "#fff",
    fontWeight: "bold",
  }));

  const ShowInfoBox = styled(Box)(({ theme }) => ({

    textAlign: "center",
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    background: theme.palette.custom.bgdark,
    fontSize: "clamp(15px, 1.7vw, 21px)",
    borderRadius: " 0 0 1rem 1rem",
    borderTop: "5px solid",
    borderImageSlice: "1",
    borderImageSource: "linear-gradient(to right,#0652C5,#D4418E)",
    paddingInline: "5px",
  }));

  const ShowTitle = styled(Typography)(({ theme }) => ({
    fontSize: "inherit",
    padding: "5px",
    whiteSpace: "nowrap",
    fontWeight: "600",
    overflow: "hidden",
    color: "whitesmoke",
    textOverflow: "ellipsis",
    margin: "15px auto",
    maxWidth: { xs: "150px", md: "200px" },
    boxShadow: theme.shadows[1],
  }));

  export {CategoryChip,ShowDateChip,ShowInfoBox,ShowTitle,MediaTypeChip}