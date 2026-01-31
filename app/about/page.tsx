import { Metadata } from "next"
import { HeroSection } from "@/components/sections/HeroSection"
import { LogoStrip } from "@/components/sections/LogoStrip"
import { FeatureGrid } from "@/components/sections/FeatureGrid"
import { TeamSection } from "@/components/sections/TeamSection"
import { CTASection } from "@/components/sections/CTASection"

export const metadata: Metadata = {
  title: "About - Kirk's Site",
  description: "Our mission is to make the best AI model",
}

export default function AboutPage() {
  const companyLogos = [
    {
      src: "/legacy/images/agency-logo-gpt-x-webflow-template.svg",
      alt: "Agency Logo",
    },
    {
      src: "/legacy/images/company-logo-gpt-x-webflow-template.svg",
      alt: "Company Logo",
    },
    {
      src: "/legacy/images/application-logo-gpt-x-webflow-template.svg",
      alt: "Application Logo",
    },
    {
      src: "/legacy/images/business-logo-gpt-x-webflow-template.svg",
      alt: "Business Logo",
    },
    {
      src: "/legacy/images/enterprise-logo-gpt-x-webflow-template.svg",
      alt: "Enterprise Logo",
    },
  ]

  const features = [
    {
      icon: "/legacy/images/commitment-icon-gpt-x-webflow-template.png",
      title: "Commitment",
      description:
        "Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit.",
    },
    {
      icon: "/legacy/images/ownership-icon-gpt-x-webflow-template.png",
      title: "Ownership",
      description:
        "Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit.",
    },
    {
      icon: "/legacy/images/get-results-icon-gpt-x-webflow-template.png",
      title: "Openness",
      description:
        "Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit.",
    },
    {
      icon: "/legacy/images/innovation-icon-gpt-x-webflow-template.png",
      title: "Innovation",
      description:
        "Excepteur sint occaecat cupidat non proident sunt in culpa qui officia deserunt mollit.",
    },
  ]

  return (
    <>
      <HeroSection
        title="Our mission is to make the best AI model"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam quis."
        primaryButtonText="Join our team"
        primaryButtonHref="/careers"
        secondaryButtonText="Learn more"
        secondaryButtonHref="#how-it-works"
        imageSrc="/legacy/images/the-best-ai-model-image-gpt-x-webflow-template.jpg"
        imageAlt="The Best AI Model"
      />

      <LogoStrip logos={companyLogos} />

      <FeatureGrid
        title="How it works"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        features={features}
      />

      <TeamSection />

      <CTASection
        title="Join our team"
        description="Amet enim mi ac lectus a vulputate ullamcorper lectus turpis senectus nisl aenean mattis feugiat rhoncus augue."
        buttonText="Subscribe"
        showEmailForm={true}
      />
    </>
  )
}
