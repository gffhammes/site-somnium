import { Box } from "@mui/material";
import { ProfitSectionMobile } from "./ProfitSectionMobile";
import { ProfitSectionDesktop } from "./ProfitSectionDesktop";

export interface IProfitSectionProps {}

export const ProfitSection = (props: IProfitSectionProps) => {
  return (
    <>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <ProfitSectionMobile />
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <ProfitSectionDesktop />
      </Box>
    </>
  );
};
