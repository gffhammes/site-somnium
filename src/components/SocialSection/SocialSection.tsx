import { Box, Container, Stack, Typography } from "@mui/material";
import logo from "../../../public/images/logo-somnium-2.png";
import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export interface ISocialSectionProps {}

export const SocialSection = (props: ISocialSectionProps) => {
  const logoAspectRatio = logo.width / logo.height;

  return (
    <Box>
      <Container>
        <Stack alignItems="center" gap={8}>
          <Typography variant="h2" textAlign="center" maxWidth="18ch">
            Nos siga também em nossas redes sociais!
          </Typography>

          <Stack direction="row" gap={8}>
            {socials.map((social) => (
              <Stack
                key={social.title}
                alignItems="centers"
                component="a"
                href={social.target}
                target="_blank"
              >
                <Box sx={{ fontSize: 80 }}>
                  <social.icon color="primary" fontSize="inherit" />
                </Box>

                <Typography textAlign="center" lineHeight={1}>
                  {social.title}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "10rem",
              aspectRatio: logoAspectRatio,
            }}
          >
            <Image src={logo.src} alt="Somnium" fill />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

const socials = [
  {
    icon: InstagramIcon,
    target: "https://www.instagram.com/somossomnium/",
    title: "Instagram",
  },
  {
    icon: LinkedInIcon,
    target: "https://www.linkedin.com/company/somnium-consultoria/",
    title: "LinkedIn",
  },
];
