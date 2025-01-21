"use client";

import { Container, Stack, Typography } from "@mui/material";
import { WhatWeDoAccordion } from "./WhatWeDoAccordion";
import { useState } from "react";
import { whatWeDoItems } from "./WhatWeDoSection";

export interface IWhatWeDoSectionMobileProps {}

export const WhatWeDoSectionMobile = (props: IWhatWeDoSectionMobileProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container maxWidth="sm">
      <Stack gap={2}>
        <Typography variant="h2" textAlign="center">
          O que fazemos:
        </Typography>

        <Stack gap={2}>
          {whatWeDoItems.map((item, index) => (
            <WhatWeDoAccordion
              key={item.title}
              title={item.title}
              text={item.text}
              open={openIndex === index}
              onClick={() => setOpenIndex(index)}
            />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
