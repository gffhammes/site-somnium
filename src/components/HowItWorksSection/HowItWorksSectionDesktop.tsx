import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { MobileTimeline } from "./MobileTimeline";
import bgPattern from "../../../public/images/background 1.png";
import { DesktopTimeline } from "./DesktopTimeline";

export interface IHowItWorksSectionDesktopProps {}

export const HowItWorksSectionDesktop = (
  props: IHowItWorksSectionDesktopProps
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
      <Container maxWidth="md">
        <Stack gap={8} alignItems="flex-start">
          <Stack gap={8} direction="row" alignItems="center">
            <Typography variant="h2" color="primary" maxWidth="15ch">
              Mas como funciona nosso trabalho?
            </Typography>

            <Typography maxWidth="30ch">
              Através de uma metodologia simples, vamos implementar os processo
              necessários para executar as rotinas do financeiro da sua empresa
            </Typography>
          </Stack>

          <DesktopTimeline />

          <Button variant="contained">Entre já em contato!</Button>
        </Stack>
      </Container>
    </Box>
  );
};
