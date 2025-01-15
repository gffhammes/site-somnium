"use client";

import { Container, Stack, Typography } from "@mui/material";
import { WhatWeDoAccordion } from "./WhatWeDoAccordion";
import { useState } from "react";

export interface IWhatWeDoSectionMobileProps {}

export const WhatWeDoSectionMobile = (props: IWhatWeDoSectionMobileProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container>
      <Stack gap={2}>
        <Typography variant="h2" textAlign="center">
          O que fazemos:
        </Typography>

        <Stack gap={2}>
          {items.map((item, index) => (
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

const items = [
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
