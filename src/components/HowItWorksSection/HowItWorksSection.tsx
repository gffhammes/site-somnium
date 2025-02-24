import { Box } from "@mui/material";
import { HowItWorksSectionDesktop } from "./HowItWorksSectionDesktop";
import { HowItWorksSectionMobile } from "./HowItWorksSectionMobile";

export interface IHowItWorksSectionProps {}

export const HowItWorksSection = (props: IHowItWorksSectionProps) => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HowItWorksSectionDesktop />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <HowItWorksSectionMobile />
      </Box>
    </>
  );
};

export const timelineItems = [
  "Reunião de Setup",
  "Captação de acessos e documentação",
  "Processamento e análise dos dados financeiros",
  "Apresentação dos Resultados",
  "Tomada de Decisão",
];
