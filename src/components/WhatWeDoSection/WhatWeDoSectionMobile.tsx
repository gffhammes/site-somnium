"use client";

import { Container, Stack, Typography } from "@mui/material";
import { WhatWeDoAccordion } from "./WhatWeDoAccordion";
import { useState } from "react";
import { whatWeDoItems } from "./WhatWeDoSection";
import { Animate } from "../Animate";

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
            <Animate
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: index === 0 ? "-40%" : "-25%" }}
              transition={{ duration: 1 }}
            >
              <WhatWeDoAccordion
                title={item.title}
                text={item.text}
                open={openIndex === index}
                onClick={() => setOpenIndex(index)}
              />
            </Animate>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
