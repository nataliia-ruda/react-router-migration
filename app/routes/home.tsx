import { ThemeProvider } from "@rescui/ui-contexts";

import HeaderSection from "~/components/sections/header-section/HeaderSection";
import { LatestFromKotlinSection } from "~/components/sections/latest-from-kotlin-section/LatestFromKotlinSection";
import { WhyKotlinSection } from "~/components/sections/why-kotlin-section/WhyKotlinSection";
import { UsageSection } from "~/components/sections/usage-section/UsageSection";
import { StartSection } from "~/components/sections/start-section/StartSection";
import '~/components/layout/index.scss'
import '~/styles/grid.scss'

export default function Home() {
  return (
    <ThemeProvider theme="dark">
      <div className="overview-page">
        <HeaderSection />
      <LatestFromKotlinSection />
       <WhyKotlinSection />
        <UsageSection />
        <StartSection />
      </div>
    </ThemeProvider>
  );
}
