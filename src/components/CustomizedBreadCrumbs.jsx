import { useLocation, Link as routerLink } from "react-router-dom";

import { Breadcrumbs, Box, Chip, emphasize, styled } from "@mui/material/";

import ChevronRight from "@mui/icons-material/ArrowRight";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

export default function CustomizedBreadcrumbs() {
  const { pathname } = useLocation();
  let url = "";
  const crumbs = pathname
    .split("/")
    .filter((path) => path)
    .map((path) => (url += `/${path}`));

  return (
    <Box role="presentation" sx={{ display: "flex", marginY: 2, justifyContent: "center", overflowX: { xs: crumbs.length && "scroll", sm: "auto" }, ".MuiBreadcrumbs-ol": { flexWrap: "nowrap" } }}>
      <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRight />}>
        {crumbs.map((crumb) => (
          <StyledBreadcrumb key={crumb} component={routerLink} clickable to={crumb} label={crumb.replace("/", "")} />
        ))}
      </Breadcrumbs>
    </Box>
  );
}
