import { Box, Button, Container, Stack, Typography } from "@mui/material";
import mobileImage from "../../../public/images/Group 46.png";
import Image from "next/image";
import { howWeCanHelpItems } from "./HowWeCanHelpSection";

export interface IHowWeCanHelpSectionDesktopProps {}

export const HowWeCanHelpSectionDesktop = (
  props: IHowWeCanHelpSectionDesktopProps
) => {
  const imageAspectRatio = mobileImage.width / mobileImage.height;

  return (
    <Box>
      <Container>
        <Stack direction="row" alignItems="flex-end">
          <Box sx={{ flex: "1 1 10rem", mt: 40, position: "relative" }}>
            <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
              <Box
                sx={{
                  position: "relative",
                  width: "30rem",
                  aspectRatio: imageAspectRatio,
                  transform: "translateX(5rem)",
                }}
              >
                <Image src={mobileImage.src} alt="" fill objectFit="contain" />
              </Box>
            </Box>
          </Box>

          <Stack alignItems="flex-end" gap={10} sx={{ pb: 20 }}>
            <Stack gap={8}>
              <Typography variant="h2" maxWidth="10ch">
                Como vamos te ajudar:
              </Typography>

              <Stack gap={8} direction="row">
                {howWeCanHelpItems.map((item) => (
                  <Stack alignItems="center" gap={2}>
                    <Image src={item.icon} alt="" height={150} width={150} />

                    <Typography
                      textAlign="center"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                      maxWidth="20ch"
                      fontSize={24}
                    />
                  </Stack>
                ))}
              </Stack>
            </Stack>

            <Button variant="contained" color="secondary">
              Conheça nossos planos{" "}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
