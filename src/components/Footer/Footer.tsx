import { Box, Container, Stack, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "../../../public/images/logo-somnium.png";
import Image from "next/image";
import { getMainWhatsAppLink } from "../utils";

export interface IFooterProps {}

export const Footer = (props: IFooterProps) => {
  const logoAspectRatio = logo.width / logo.height;

  return (
    <Box sx={{ backgroundColor: "primary.main", py: 10 }}>
      <Container>
        <Stack
          gap={8}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "20rem",
              aspectRatio: logoAspectRatio,
              display: { xs: "none", md: "block" },
            }}
          >
            <Image src={logo.src} alt="Somnium" fill objectFit="contain" />
          </Box>

          <Stack alignItems="start" gap={2}>
            {contactItems.map((item) => (
              <Stack
                key={item.text}
                component="a"
                href={item.href}
                target="_blank"
                direction="row"
                gap={1}
                color="white"
              >
                <item.icon />

                <Typography>{item.text}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

const contactItems = [
  {
    icon: EmailIcon,
    href: "mailto:contato@somniumconsultoria.com.br",
    text: "contato@somniumconsultoria.com.br",
  },
  {
    icon: WhatsAppIcon,
    href: getMainWhatsAppLink(),
    text: "(47) 99653-7400",
  },
  {
    icon: LocationOnIcon,
    href: "https://maps.app.goo.gl/zQnkkz9PeFhUzzNMA",
    text: "R. Dr. João Colin, 1285 - América, Joinville/SC",
  },
];
