import { Box, Container, Stack, Typography } from "@mui/material";
import jonathan from "../../../public/images/Jonathan - LP.png";
import silvia from "../../../public/images/IMG_3271.jpg";
import Image from "next/image";

export interface IAboutSectionProps {}

export const AboutSection = (props: IAboutSectionProps) => {
  return (
    <Box>
      <Container maxWidth="md">
        <Stack gap={4}>
          <Typography variant="h2">Um pouco sobre nós!</Typography>

          <Typography>
            A Somnium Consultoria nasceu do nosso desejo de ajudar
            empreendedores a transformarem suas empresas através de uma gestão
            financeira clara, eficiente e descomplicada. Somos Jonathan e
            Silvia, um casal que acredita que o sucesso de um negócio começa
            pelo controle das finanças – e foi com essa visão que decidimos unir
            forças para criar a Somnium. <br />
            <br />
            Com anos de experiência no universo financeiro e uma abordagem
            acessível e humanizada, ajudamos micro, pequenas e médias empresas a
            organizarem suas finanças, tomarem decisões estratégicas e
            alcançarem resultados sustentáveis. Nosso trabalho não se limita a
            números – nosso propósito é trazer tranquilidade, segurança e
            crescimento para quem empreende.
          </Typography>

          <Stack direction="row" gap={2}>
            <Stack
              sx={{
                height: { xs: "20rem", sm: "30rem" },
                flex: "1 1 100%",
              }}
              alignItems="center"
              gap={2}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src={jonathan.src}
                  alt="Jonathan Machado"
                  fill
                  objectFit="cover"
                />
              </Box>

              <Typography>Jonathan Machado</Typography>
            </Stack>

            <Stack
              sx={{
                height: { xs: "20rem", sm: "30rem" },
                flex: "1 1 100%",
              }}
              alignItems="center"
              gap={2}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src={silvia.src}
                  alt="Silvia Machado"
                  fill
                  objectFit="cover"
                />
              </Box>

              <Typography>Silvia Machado</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
