import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import mobileImage from "../../../public/images/Group 47.png";

export interface IProfitSectionMobileProps {}

export const ProfitSectionMobile = (props: IProfitSectionMobileProps) => {
  const imageAspectRatio = mobileImage.width / mobileImage.height;

  return (
    <Stack alignItems="flex-end" gap={4}>
      <Container>
        <Stack alignItems="flex-start" gap={2}>
          <Typography variant="h2" fontWeight={400} maxWidth="20ch">
            A sua empresa lucra <strong>como deveria lucrar?</strong>
          </Typography>

          <Button variant="contained" color="secondary">
            Vamos descobrir juntos!
          </Button>
        </Stack>
      </Container>

      <Box
        sx={{
          position: "relative",
          width: { xs: "90%", md: "20%" },
          aspectRatio: imageAspectRatio,
        }}
      >
        <Image src={mobileImage.src} alt="" fill />
      </Box>
    </Stack>
  );
};
