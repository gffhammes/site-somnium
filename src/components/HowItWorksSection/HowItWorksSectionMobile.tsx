import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { MobileTimeline } from "./MobileTimeline";
import bgPattern from "../../../public/images/background 1.png";
import { ScrollButton } from "../ScrollButton";

export interface IHowItWorksSectionMobileProps {}

export const HowItWorksSectionMobile = (
  props: IHowItWorksSectionMobileProps
) => {
  return (
    <Box
      sx={{
        backgroundColor: "secondary.main",
        py: 10,
        backgroundImage: `url("${bgPattern.src}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <Container maxWidth="sm">
        <Stack gap={8} alignItems="flex-start">
          <Stack gap={2}>
            <Typography variant="h2" color="primary" maxWidth="15ch">
              Mas como funciona nosso trabalho?
            </Typography>

            <Typography maxWidth="30ch">
              Através de uma metodologia simples, vamos implementar os processos
              necessários para executar as rotinas do financeiro da sua empresa
            </Typography>
          </Stack>

          <MobileTimeline />

          <ScrollButton targetSection="contato" variant="contained">
            Entre já em contato!
          </ScrollButton>
        </Stack>
      </Container>
    </Box>
  );
};
