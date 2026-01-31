import { Container } from "@/components/site/Container"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  title: string
  description: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
  imageSrc?: string
  imageAlt?: string
}

export function HeroSection({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  imageSrc,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-10 md:mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 flex-wrap">
            <div className="max-w-3xl w-full md:w-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {title}
              </h1>
              <div className="max-w-2xl">
                <p className="text-lg text-muted-foreground mb-0">
                  {description}
                </p>
              </div>
            </div>
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto self-end">
                {primaryButtonText && (
                  <Button asChild>
                    <a href={primaryButtonHref || "#"}>{primaryButtonText}</a>
                  </Button>
                )}
                {secondaryButtonText && (
                  <Button variant="outline" asChild>
                    <a href={secondaryButtonHref || "#"}>{secondaryButtonText}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>

      {imageSrc && (
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="relative">
            <img
              src={imageSrc}
              alt={imageAlt || ""}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
