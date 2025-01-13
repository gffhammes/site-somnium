import { Box, Button, Container, Stack, Typography } from "@mui/material";

export interface IClientsSectionProps {}

export const ClientsSection = (props: IClientsSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={4}>
          <Typography variant="h2" maxWidth="20ch">
            Confira quem já confiou no nosso trabalho:
          </Typography>

          <Stack>teste</Stack>

          <Button variant="contained" color="secondary" sx={{ mx: "auto" }}>
            Seja o próximo a fazer parte disso!
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};
