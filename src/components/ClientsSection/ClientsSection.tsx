import { Box, Button, Container, Stack, Typography } from "@mui/material";
import logo1 from "../../../public/images/clientes/logo-2048x1850.png";
import logo2 from "../../../public/images/clientes/Input-Logo.webp";
import logo3 from "../../../public/images/clientes/logo-2048x1850.png";
import logo4 from "../../../public/images/clientes/Input-Logo.webp";
import logo5 from "../../../public/images/clientes/logo-2048x1850.png";
import logo6 from "../../../public/images/clientes/Input-Logo.webp";
import Image from "next/image";
import { ScrollButton } from "../ScrollButton";

export interface IClientsSectionProps {}

export const ClientsSection = (props: IClientsSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={{ xs: 4, md: 10 }}>
          <Typography variant="h2" maxWidth="20ch">
            Confira quem já confiou no nosso trabalho:
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr 1fr", md: "1fr 1fr 1fr" }}
            gridAutoRows="8rem"
            gap={{ xs: 4, md: 10 }}
          >
            {clients.map((client) => (
              <Box
                key={client.name}
                sx={{
                  position: "relative",
                  width: "100%",
                  filter: "saturate(0)",
                  transition: ".3s ease all",

                  "&:hover": {
                    filter: "saturate(1)",
                  },
                }}
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  objectFit="contain"
                />
              </Box>
            ))}
          </Box>

          <ScrollButton
            targetSection="contato"
            variant="contained"
            color="secondary"
            sx={{ mx: "auto" }}
          >
            Seja o próximo a fazer parte disso!
          </ScrollButton>
        </Stack>
      </Container>
    </Box>
  );
};

const clients = [
  {
    logo: logo1.src,
    name: "Roda Pizza Araldi",
  },
  {
    logo: logo2.src,
    name: "Input Gestão de Tráfego",
  },
  {
    logo: logo4.src,
    name: "Input Gestão de Tráfego2",
  },
  {
    logo: logo3.src,
    name: "Roda Pizza Araldi2",
  },
  {
    logo: logo5.src,
    name: "Roda Pizza Araldi3",
  },
  {
    logo: logo6.src,
    name: "Input Gestão de Tráfego3",
  },
];
