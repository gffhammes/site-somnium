import { Box, Button, Container, Stack, Typography } from "@mui/material";
import mobileImage from "../../../public/images/Group 46.png";
import Image from "next/image";
import { howWeCanHelpItems } from "./HowWeCanHelpSection";
import { ScrollButton } from "../ScrollButton";
import { Animate } from "../Animate";

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
                {howWeCanHelpItems.map((item, index) => (
                  <Animate
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-25%" }}
                    transition={{ duration: 1 }}
                    responsiveDelay={{ sm: index * 0.5 }}
                  >
                    <Stack alignItems="center" gap={2} sx={{ width: "16rem" }}>
                      <Image src={item.icon} alt="" height={150} width={150} />

                      <Typography
                        textAlign="center"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                        maxWidth="20ch"
                        fontSize={24}
                      />
                    </Stack>
                  </Animate>
                ))}
              </Stack>
            </Stack>

            <ScrollButton
              targetSection="contato"
              variant="contained"
              color="secondary"
              id="help-cta"
            >
              Conheça nossos planos{" "}
            </ScrollButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
