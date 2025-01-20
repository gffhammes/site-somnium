import { Box } from "@mui/material";
import { WhatWeDoSectionMobile } from "./WhatWeDoSectionMobile";

export interface IWhatWeDoSectionProps {}

export const WhatWeDoSection = (props: IWhatWeDoSectionProps) => {
  return (
    <Box id="conteudo">
      <WhatWeDoSectionMobile />
    </Box>
  );
};
