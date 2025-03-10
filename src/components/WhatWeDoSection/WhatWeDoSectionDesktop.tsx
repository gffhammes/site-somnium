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
    <Container>
      <Stack gap={8}>
        <Typography variant="h2">O que fazemos:</Typography>

        <Animate
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-25%" }}
          transition={{ duration: 1 }}
        >
          <Stack direction="row" gap={4} alignItems="center">
            <Stack sx={{ flex: "0 0 25rem" }}>
              {whatWeDoItems.map((item, index) => {
                const isSelected = openIndex === index;

                return (
                  <Box
                    key={index}
                    onClick={() => setOpenIndex(index)}
                    sx={{
                      backgroundColor: isSelected
                        ? "rgba(14, 78, 88, 0.177)"
                        : "transparent",
                      transition: ".3s ease all",
                      cursor: "pointer",
                      color: isSelected ? "primary.main" : "primary.light",
                      px: 2,
                      py: 1,
                      border: "1px solid",
                      borderColor: isSelected ? "primary.main" : "transparent",
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
              sx={{
                backgroundColor: "primary.main",
                p: 3,
                color: "white",
                height: { md: "35rem", lg: "22rem" },
              }}
            >
              <Typography whiteSpace="pre-wrap">
                {whatWeDoItems[openIndex].text}
              </Typography>
            </Stack>
          </Stack>
        </Animate>
      </Stack>
    </Container>
  );
};
