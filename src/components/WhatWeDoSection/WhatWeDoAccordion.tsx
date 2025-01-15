import { Box, Collapse, Stack, Typography } from "@mui/material";

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
            <Typography>{text}</Typography>
          </Box>
        </Stack>
      </Collapse>
    </Stack>
  );
};
