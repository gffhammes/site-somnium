import { Box, Container, Stack, Typography } from "@mui/material";

export interface IAboutSectionProps {}

export const AboutSection = (props: IAboutSectionProps) => {
  return (
    <Box>
      <Container>
        <Stack gap={4}>
          <Typography variant="h2">Um pouco sobre nós!</Typography>

          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt u labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip e ea commodo consequat. Duis aute irure dolor i
            reprehenderit i voluptate velit ess cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui offici deserunt mollit anim id est laborum.
          </Typography>

          <Stack direction="row" gap={2}>
            <Box
              sx={{
                height: "20rem",
                flex: "1 1 100%",
                backgroundColor: "grey",
              }}
            ></Box>

            <Box
              sx={{
                height: "20rem",
                flex: "1 1 100%",
                backgroundColor: "grey",
              }}
            ></Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
