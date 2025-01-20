import { AboutSection } from "@/components/AboutSection/AboutSection";
import { ClientsSection } from "@/components/ClientsSection/ClientsSection";
import { DiretoRow } from "@/components/DiretoRow";
import { Footer } from "@/components/Footer/Footer";
import { FormSection } from "@/components/FormSection/FormSection";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection/HowItWorksSection";
import { HowWeCanHelpSection } from "@/components/HowWeCanHelpSection/HowWeCanHelpSection";
import { ProfitSection } from "@/components/ProfitSection/ProfitSection";
import { SocialSection } from "@/components/SocialSection/SocialSection";
import { WhatWeDoSection } from "@/components/WhatWeDoSection/WhatWeDoSection";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <div>
      <main>
        <Stack gap={{ xs: 10, md: 20 }} sx={{ pb: { xs: 10, md: 20 } }}>
          <HeroSection />

          <WhatWeDoSection />

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
      <DiretoRow />
    </div>
  );
}
