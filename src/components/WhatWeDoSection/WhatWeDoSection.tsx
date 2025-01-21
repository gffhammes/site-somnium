import { Box } from "@mui/material";
import { WhatWeDoSectionMobile } from "./WhatWeDoSectionMobile";
import { WhatWeDoSectionDesktop } from "./WhatWeDoSectionDesktop";

export interface IWhatWeDoSectionProps {}

export const WhatWeDoSection = (props: IWhatWeDoSectionProps) => {
  return (
    <Box id="conteudo">
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <WhatWeDoSectionMobile />
      </Box>

      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <WhatWeDoSectionDesktop />
      </Box>
    </Box>
  );
};

export const whatWeDoItems = [
  {
    title: "Implantação e treinamento",
    text: "Lorem ipsum dolor sit amet, onsectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Acompanhamento de métricas e resultados",
    text: "Lorem ipsum dolor sit amet, onsectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Gestão de contas a pagar",
    text: "Lorem ipsum dolor sit amet, onsectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Análise financeira da saúde da empresa",
    text: "Lorem ipsum dolor sit amet, onsectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Conciliação bancária e de caixa",
    text: "Lorem ipsum dolor sit amet, onsectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem ipsum",
    text: "Lorem ipsum dolor sit amet, onsectetur  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
