import React from "react";

import { Box, Stack, Avatar } from "@mui/material";
import { MovieChip } from "../details.styled";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import BusinessIcon from "@mui/icons-material/Business";

import { LOGO_BASE } from "../../../constants/constants";
function Stats({ showData }) {
  function numToCurrency(number) {
    if (number) {
      return Intl.NumberFormat()
        .formatToParts(number)
        .map((num) => num.value)
        .join("");
    }
    return "N/A";
  }
  if (!showData) {
    
  }

  return (
    <Box borderRadius={"1rem"} p={2} sx={{ boxShadow: 1, display: "flex", flexDirection: "column", alignItems: "start", gap: "1rem" }}>
      <MovieChip icon={<AttachMoneyIcon />} label={`Budget : ${numToCurrency(showData.budget)}`} />
      <MovieChip icon={<CurrencyExchangeIcon />} label={`Revenue : ${numToCurrency(showData.revenue)}`} />

      <MovieChip icon={<NewReleasesIcon />} label={`Status : ${showData.status}`} />
      <MovieChip icon={<FlagCircleIcon />} label={`Country : ${showData.production_countries[0].name}`} />
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        <MovieChip icon={<BusinessIcon />} label={`Production Companies`} />
        {showData.production_companies.map((comp) => (
          <MovieChip key={comp.id} sx={{ ml: "12px" }} avatar={<Avatar src={`${LOGO_BASE}/${comp.logo_path}`}></Avatar>} label={`${comp.name}`} />
        ))}
      </Stack>
    </Box>
  );
}

export default Stats;
