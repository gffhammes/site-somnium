import { Box, Button, Container, Stack, Typography } from "@mui/material";
import logo1 from "../../../public/images/clientes/1.png";
import logo2 from "../../../public/images/clientes/2.png";
import logo3 from "../../../public/images/clientes/3.png";
import logo4 from "../../../public/images/clientes/4.png";
import logo5 from "../../../public/images/clientes/Frame 45.png";
import logo6 from "../../../public/images/clientes/Frame 46.png";
import Image from "next/image";
import { ScrollButton } from "../ScrollButton";
import { Animate } from "../Animate";

export interface IClientsSectionProps {}

export const ClientsSection = (props: IClientsSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={{ xs: 4, sm: 8, md: 10 }}>
          <Typography variant="h2" maxWidth="20ch">
            Confira quem já confiou no nosso trabalho:
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr 1fr", md: "1fr 1fr 1fr" }}
            gridAutoRows={{ xs: "8rem", md: "10rem" }}
            gap={{ xs: 4, md: 10 }}
          >
            {clients.map((client, index) => (
              <Animate
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-30%" }}
                transition={{ duration: 1 }}
                responsiveDelay={{ xs: index * 0.5 }}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
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
              </Animate>
            ))}
          </Box>

          <ScrollButton
            targetSection="contato"
            variant="contained"
            color="secondary"
            id="clients-cta"
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
    name: "Arcanjo",
  },
  {
    logo: logo2.src,
    name: "Tamila Store",
  },
  {
    logo: logo4.src,
    name: "Result",
  },
  {
    logo: logo3.src,
    name: "Robson Barber Shop",
  },
  {
    logo: logo5.src,
    name: "Input Gestão de Tráfego",
  },
  {
    logo: logo6.src,
    name: "Roda Pizza Araldi",
  },
];
