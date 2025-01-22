"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import { WhatWeDoAccordion } from "./WhatWeDoAccordion";
import { useState } from "react";
import { whatWeDoItems } from "./WhatWeDoSection";
import { Animate } from "../Animate";

export interface IWhatWeDoSectionDesktopProps {}

export const WhatWeDoSectionDesktop = (props: IWhatWeDoSectionDesktopProps) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container maxWidth="md">
      <Stack gap={8}>
        <Typography variant="h2">O que fazemos:</Typography>

        <Animate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-25%" }}
          transition={{ duration: 1 }}
        >
          <Stack direction="row">
            <Stack sx={{ flex: "1 1 50%" }}>
              {whatWeDoItems.map((item, index) => {
                const isSelected = openIndex === index;

                return (
                  <Box
                    key={index}
                    onClick={() => setOpenIndex(index)}
                    sx={{
                      backgroundColor: isSelected
                        ? "primary.main"
                        : "transparent",
                      transition: ".3s ease all",
                      cursor: "pointer",
                      color: isSelected ? "white" : "primary.main",
                      px: 2,
                      py: 1,
                    }}
                  >
                    <Typography fontWeight={isSelected ? "bold" : "500"}>
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Stack>

            <Stack
              sx={{ backgroundColor: "primary.main", p: 3, color: "white" }}
            >
              <Typography>{whatWeDoItems[openIndex].text}</Typography>
            </Stack>
          </Stack>
        </Animate>
      </Stack>
    </Container>
  );
};
