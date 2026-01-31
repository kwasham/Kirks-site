import { Container } from "@/components/site/Container"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  showEmailForm?: boolean
}

export function CTASection({ title, description, buttonText, showEmailForm = false }: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 -z-10" />
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="relative">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="lg:col-start-2">
                    <div className="max-w-lg">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {title}
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        {description}
                      </p>
                      {showEmailForm ? (
                        <form className="flex gap-2">
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            className="flex-1"
                          />
                          <Button type="submit">
                            {buttonText || "Subscribe"}
                          </Button>
                        </form>
                      ) : (
                        buttonText && (
                          <Button size="lg">
                            {buttonText}
                          </Button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </Container>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
