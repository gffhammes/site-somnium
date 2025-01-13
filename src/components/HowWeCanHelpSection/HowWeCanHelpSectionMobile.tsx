import { Box, Button, Container, Stack, Typography } from "@mui/material";
import icon1 from "../../../public/images/moeda 2.png";
import icon2 from "../../../public/images/info 2.png";
import icon3 from "../../../public/images/grafico 2.png";
import mobileImage from "../../../public/images/Group 46.png";
import Image from "next/image";

export interface IHowWeCanHelpSectionMobileProps {}

export const HowWeCanHelpSectionMobile = (
  props: IHowWeCanHelpSectionMobileProps
) => {
  const imageAspectRatio = mobileImage.width / mobileImage.height;

  return (
    <Box>
      <Container>
        <Stack direction="row" gap={4} justifyContent="space-between">
          <Stack
            alignItems="flex-start"
            gap={4}
            sx={{ position: "sticky", top: 50 }}
          >
            <Typography variant="h2" maxWidth="10ch">
              Como vamos te ajudar:
            </Typography>

            <Button variant="contained" color="secondary">
              Conheça nossos planos
            </Button>
          </Stack>

          <Stack gap={4}>
            {items.map((item) => (
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
          mt: -30,
          transform: "translateX(-25px)",
        }}
      >
        <Image src={mobileImage.src} alt="" fill />
      </Box>
    </Box>
  );
};

const items = [
  {
    icon: icon1.src,
    text: "Controlar cada centavo que <strong>entra e sai</strong>",
  },
  {
    icon: icon2.src,
    text: "Prestar informações que indiquem o <strong>caminho do crescimento</strong>",
  },
  {
    icon: icon3.src,
    text: "Vamos te ajudar a <strong>lucrar mais!</strong>",
  },
];
