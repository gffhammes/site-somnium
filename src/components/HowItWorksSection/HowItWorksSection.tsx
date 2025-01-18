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
  "Captação de Documentos",
  "Processamento do Financeiro",
  "Envio do Relatório",
  "Tomada de Decisão",
];
