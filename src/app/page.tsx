import { HeroSection } from "@/components/HeroSection";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main>
        <Stack>
          <HeroSection />
        </Stack>
      </main>

      <footer></footer>
    </div>
  );
}
