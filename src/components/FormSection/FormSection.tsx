import { Box, Container, Typography } from "@mui/material";

export interface IFormSectionProps {}

export const FormSection = (props: IFormSectionProps) => {
  return (
    <Box sx={{ backgroundColor: "primary.main", py: 10 }}>
      <Container>
        <Typography variant="h2" color="white">
          Acha que podemos lhe ajudar? Fale conosco!
        </Typography>
      </Container>
    </Box>
  );
};
