import Link from "next/link"
import { Container } from "@/components/site/Container"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <Container>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg">Kirk's Site</h3>
              <p className="text-sm text-muted-foreground">
                Building modern web experiences with Next.js and Tailwind CSS.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Navigation</h4>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Additional Info */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Info</h4>
              <p className="text-sm text-muted-foreground">
                Migrated from Webflow to Next.js 16+ with App Router.
              </p>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Kirk's Site. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
