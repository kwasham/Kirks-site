import { Container } from "@/components/site/Container"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle className="text-center">Next.js migration in progress</CardTitle>
              <CardDescription className="text-center">
                Building a modern web experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-base text-muted-foreground">
                This site is being migrated from a static Webflow export to Next.js.
                The legacy site can be found in the{' '}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                  legacy/
                </code>{' '}
                folder.
              </p>
              <Separator />
              <p className="text-center text-sm text-muted-foreground italic">
                ✨ Styled with Tailwind CSS and shadcn/ui
              </p>
            </CardContent>
            <CardFooter className="flex justify-center gap-4">
              <Button variant="default">Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </Container>
    </main>
  )
}
