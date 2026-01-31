import { Container } from "@/components/site/Container"

interface LogoStripProps {
  logos: Array<{
    src: string
    alt: string
  }>
}

export function LogoStrip({ logos }: LogoStripProps) {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <Container>
        <div className="relative overflow-hidden">
          <div className="flex gap-12 md:gap-16 items-center justify-center flex-wrap opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {logos.map((logo, index) => (
              <div key={index} className="h-8 md:h-10 relative flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
