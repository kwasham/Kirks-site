import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              GPT X Webflow Template
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Introducing GPT X, our ultimate AI and Machine Learning template. 
              Featuring over 30 pages, it got all the essentials for crafting an 
              exceptional website for your artificial intelligence site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/pricing">Buy template</Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/features">Explore pages</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-lg text-gray-600">
              Everything you need to build a professional AI website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">35+</div>
              <h3 className="text-xl font-semibold mb-2">Pages</h3>
              <p className="text-gray-600">
                Pre-built pages ready to customize for your needs
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">90+</div>
              <h3 className="text-xl font-semibold mb-2">Sections</h3>
              <p className="text-gray-600">
                Flexible sections to build unique page layouts
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">99+</div>
              <h3 className="text-xl font-semibold mb-2">Styles</h3>
              <p className="text-gray-600">
                Consistent styling system for cohesive design
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="text-xl font-semibold mb-2">Figma file</h3>
              <p className="text-gray-600">
                Complete design file for easy customization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for modern AI businesses
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to showcase your AI products and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
              <p className="text-gray-600">
                Optimized for speed and performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
              <p className="text-gray-600">
                Perfect on all devices and screen sizes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Customization</h3>
              <p className="text-gray-600">
                Customize every aspect to match your brand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of businesses using GPT X to power their AI websites
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/pricing">Get started today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
