import { Container } from "@/components/site/Container"
import { Card, CardContent } from "@/components/ui/card"

interface Feature {
  icon: string
  title: string
  description: string
}

interface FeatureGridProps {
  title: string
  description: string
  features: Feature[]
}

export function FeatureGrid({ title, description, features }: FeatureGridProps) {
  return (
    <section className="py-16 md:py-24 overflow-hidden" id="how-it-works">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="relative">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-l-4">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <div className="w-12 h-12 relative">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
