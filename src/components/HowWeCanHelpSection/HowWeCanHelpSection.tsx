import { Box } from "@mui/material";
import { HowWeCanHelpSectionDesktop } from "./HowWeCanHelpSectionDesktop";
import { HowWeCanHelpSectionMobile } from "./HowWeCanHelpSectionMobile";
import icon1 from "../../../public/images/moeda 2.png";
import icon2 from "../../../public/images/info 2.png";
import icon3 from "../../../public/images/grafico 2.png";

export interface IHowWeCanHelpSectionProps {}

export const HowWeCanHelpSection = (props: IHowWeCanHelpSectionProps) => {
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HowWeCanHelpSectionDesktop />
      </Box>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <HowWeCanHelpSectionMobile />
      </Box>
    </>
  );
};

export const howWeCanHelpItems = [
  {
    icon: icon1.src,
    text: "Controlar cada centavo que <strong>entra e sai</strong>",
  },
  {
    icon: icon2.src,
    text: "Apresentar informações que indiquem o <strong>caminho do crescimento</strong>",
  },
  {
    icon: icon3.src,
    text: "Vamos te ajudar a<br/><strong>lucrar mais!</strong>",
  },
];
