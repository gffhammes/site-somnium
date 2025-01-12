import { Box, Button, Container, Typography } from "@mui/material";

export interface IHowItWorksSectionMobileProps {}

export const HowItWorksSectionMobile = (
  props: IHowItWorksSectionMobileProps
) => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", py: 10 }}>
      <Container>
        <Typography variant="h2" color="primary">
          Mas como funciona nosso trabalho?
        </Typography>

        <Typography>
          Através de uma metodologia simples, vamos implementar os processo
          necessários para executar as rotinas do financeiro da sua empresa
        </Typography>

        <Button variant="contained">Entre já em contato!</Button>
      </Container>
    </Box>
  );
};
