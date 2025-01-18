import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { timelineItems } from "./HowItWorksSection";

export const DesktopTimeline = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(5, 10rem)"
      sx={{ position: "relative" }}
    >
      {timelineItems.map((item, index) => {
        const isOddItem = index % 2 > 0;

        return (
          <Stack
            key={index}
            direction={isOddItem ? "column-reverse" : "column"}
            alignItems="center"
            gap={2}
            sx={{
              "&:hover": {
                "& p": {
                  fontWeight: "bold",
                },

                "& .dot": {
                  scale: "2",
                },
              },
            }}
          >
            <Stack
              justifyContent={isOddItem ? "flex-start" : "flex-end"}
              sx={{ flex: "0 0 5rem" }}
            >
              <Typography
                fontSize={24}
                lineHeight={1}
                textAlign="center"
                sx={{ transition: ".3s ease all" }}
              >
                {item}
              </Typography>
            </Stack>

            <Box
              className="dot"
              sx={{
                height: "1rem",
                width: "1rem",
                borderRadius: "1rem",
                backgroundColor: "primary.main",
                transition: ".3s ease all",
              }}
            />

            <Box sx={{ flex: "0 0 5rem" }} />
          </Stack>
        );
      })}

      <Box
        sx={{
          position: "absolute",
          height: "1px",
          width: "100%",
          backgroundColor: "primary.main",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </Box>
  );
};
