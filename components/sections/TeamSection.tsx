import { Container } from "@/components/site/Container"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden" id="our-team">
      <Container>
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 flex-wrap">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-0">
              Meet our team
            </h2>
            <Button variant="outline" asChild>
              <a href="/careers">Join our team</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for team members - showing "No items found" as in legacy */}
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No items found.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
