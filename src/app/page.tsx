import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection/HowItWorksSection";
import { HowWeCanHelpSection } from "@/components/HowWeCanHelpSection/HowWeCanHelpSection";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={10}>
          <HeroSection />

          <Stack>
            <HowWeCanHelpSection />

            <HowItWorksSection />
          </Stack>
        </Stack>
      </main>

      <footer></footer>
    </div>
  );
}
