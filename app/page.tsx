import Link from "next/link"

import { Button } from "@/components/ui/button"
import { BagViewer } from "@/components/bag-viewer"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedBag } from "@/components/featured-bag"
import { Newsletter } from "@/components/newsletter"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with 3D Bag */}
        <section className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-muted/50 to-muted">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <AnimatedSection className="flex flex-col justify-center space-y-4 md:w-1/2">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Stylish Tote Bags for Every Occasion
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Handcrafted with premium materials. Designed to last a lifetime.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Button asChild size="lg">
                  <Link href="/shop">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/categories">Explore Categories</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="md:w-1/2 h-[400px] md:h-[500px] w-full">
              <BagViewer />
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Categories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover the perfect tote bag for your lifestyle
                </p>
              </div>
            </AnimatedSection>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <AnimatedSection delay={0.2}>
                <CategoryShowcase
                  title="Casual"
                  description="Perfect for everyday use"
                  image="/images/casual-tote.jpg"
                  href="/categories/casual"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <CategoryShowcase
                  title="Business"
                  description="Professional and elegant"
                  image="/images/business-tote.jpg"
                  href="/categories/business"
                />
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <CategoryShowcase
                  title="Travel"
                  description="Durable and spacious"
                  image="/images/travel-tote.jpg"
                  href="/categories/travel"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Bag</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our most popular design, loved by customers worldwide
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <FeaturedBag />
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <AnimatedSection delay={0.4}>
            <Newsletter />
          </AnimatedSection>
        </section>
      </div>
    </PageTransition>
  )
}

