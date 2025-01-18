import { Box, Button, Container, Stack, Typography } from "@mui/material";
import mobileImage from "../../../public/images/Group 46.png";
import Image from "next/image";
import { howWeCanHelpItems } from "./HowWeCanHelpSection";

export interface IHowWeCanHelpSectionMobileProps {}

export const HowWeCanHelpSectionMobile = (
  props: IHowWeCanHelpSectionMobileProps
) => {
  const imageAspectRatio = mobileImage.width / mobileImage.height;

  return (
    <Box>
      <Container>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Box sx={{ maxHeight: "20rem", pt: 2 }}>
            <Stack
              alignItems="flex-start"
              gap={4}
              sx={{
                position: "sticky",
                top: 100,
                height: "fit-content",
                zIndex: 99,
              }}
            >
              <Typography variant="h2" maxWidth="10ch">
                Como vamos te ajudar:
              </Typography>

              <Button variant="contained" color="secondary">
                Saiba mais
              </Button>
            </Stack>
          </Box>

          <Stack gap={4}>
            {howWeCanHelpItems.map((item) => (
              <Stack alignItems="center" gap={2}>
                <Image src={item.icon} alt="" height={100} width={100} />

                <Typography
                  textAlign="center"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                  maxWidth="20ch"
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>

      <Box
        sx={{
          position: "relative",
          width: "80%",
          aspectRatio: imageAspectRatio,
          mt: -20,
          transform: "translateX(-25px)",
        }}
      >
        <Image src={mobileImage.src} alt="" fill />
      </Box>
    </Box>
  );
};
