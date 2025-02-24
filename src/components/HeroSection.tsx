import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/logo-somnium.png";
import bgImage from "../../public/images/79b7c0b7b91ddd1b2e8ae52151915909.png";
import { ScrollButton } from "./ScrollButton";
import { Animate } from "./Animate";

export interface IHeroSectionProps {}

export const HeroSection = (props: IHeroSectionProps) => {
  const logoAspectRatio = logo.width / logo.height;

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "50vh", md: "60vh" },
        backgroundImage: `url("${bgImage.src}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        "&:before": {
          content: '""',
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          right: 0,
          backgroundColor: "primary.dark",
          opacity: 0.8,
          mixBlendMode: "multiply",
        },
      }}
    >
      <Container sx={{ height: "100%", position: "relative" }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100%" }}
          gap={{ xs: 4, md: 8 }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: { xs: "15rem", md: "25rem" },
              aspectRatio: logoAspectRatio,
            }}
          >
            <Image src={logo.src} alt="Somnium" fill />
          </Box>

          <Animate
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 25 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              textAlign="center"
              color="white"
              maxWidth="40ch"
            >
              Chega de se preocupar com a gestão financeira do seu negócio. É
              hora de focar no <strong>crescimento!</strong>
            </Typography>
          </Animate>
        </Stack>
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ScrollButton
          variant="contained"
          color="secondary"
          sx={{ whiteSpace: "nowrap" }}
          targetSection="conteudo"
          offset={-50}
        >
          Clique aqui e saiba mais!
        </ScrollButton>
      </Box>
    </Box>
  );
};
