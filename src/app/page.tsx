import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ClientsSection } from "@/components/ClientsSection/ClientsSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection/HowItWorksSection";
import { HowWeCanHelpSection } from "@/components/HowWeCanHelpSection/HowWeCanHelpSection";
import { ProfitSection } from "@/components/ProfitSection/ProfitSection";
import { Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={10} sx={{ height: "500vh" }}>
          <HeroSection />

          <Stack>
            <HowWeCanHelpSection />

            <HowItWorksSection />
          </Stack>

          <ProfitSection />

          <ClientsSection />

          <AboutSection />
        </Stack>
      </main>

      <footer></footer>
    </div>
  );
}
