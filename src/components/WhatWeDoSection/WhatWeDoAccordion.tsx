"use client";

import { Box, Collapse, Stack, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { scrollTo } from "../utils";

export interface IWhatWeDoAccordionProps {
  title: string;
  text: string;
  open: boolean;
  onClick: () => void;
}

export const WhatWeDoAccordion = ({
  open,
  text,
  title,
  onClick,
}: IWhatWeDoAccordionProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const toggleSeeMore = () => setSeeMore((current) => !current);

  useEffect(() => {
    if (open) setSeeMore(false);
  }, [open]);

  return (
    <Stack>
      <Stack
        sx={{ backgroundColor: "primary.main", px: 2, py: 2 }}
        onClick={onClick}
      >
        <Typography color="white" textAlign="center">
          {title}
        </Typography>
      </Stack>

      <Collapse in={open}>
        <Stack sx={{ backgroundColor: "primary.main", p: 1, pt: 0 }}>
          <Box sx={{ backgroundColor: "white", p: 1 }}>
            <Typography
              whiteSpace="pre-wrap"
              className={seeMore ? "" : "ellipsis"}
            >
              {text}
            </Typography>

            {!seeMore && (
              <Typography
                variant="caption"
                fontWeight="bold"
                color="primary.main"
                sx={{ textDecoration: "underline" }}
                onClick={() => toggleSeeMore()}
              >
                VER MAIS
              </Typography>
            )}
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  );
};
