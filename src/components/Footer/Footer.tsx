import { Box, Container } from "@mui/material";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  return (
    <Box sx={{ backgroundColor: "grey", py: 10 }}>
      <Container>footer</Container>
    </Box>
  );
};
