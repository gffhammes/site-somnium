import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ClientsSection } from "@/components/ClientsSection/ClientsSection";
import { Footer } from "@/components/Footer/Footer";
import { FormSection } from "@/components/FormSection/FormSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection/HowItWorksSection";
import { HowWeCanHelpSection } from "@/components/HowWeCanHelpSection/HowWeCanHelpSection";
import { ProfitSection } from "@/components/ProfitSection/ProfitSection";
import { SocialSection } from "@/components/SocialSection/SocialSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={10} sx={{ pb: 10 }}>
          <HeroSection />

          <Stack>
            <HowWeCanHelpSection />

            <HowItWorksSection />
          </Stack>

          <ProfitSection />

          <ClientsSection />

          <AboutSection />

          <FormSection />

          <SocialSection />
        </Stack>
      </main>

      <Footer />
    </div>
  );
}
