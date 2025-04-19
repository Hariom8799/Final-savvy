"use client"

import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { BagViewer } from "@/components/bag-viewer"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedBag } from "@/components/featured-bag"
import { Newsletter } from "@/components/newsletter"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        {/* Hero Section with 3D Bag */}
        <section className="relative w-full h-[90vh] flex flex-col items-center justify-center overflow-hidden animated-gradient">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0"></div>
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12 z-10">
            <AnimatedSection className="flex flex-col justify-center space-y-6 md:w-1/2">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl neon-text">
                  Elevate Your Style
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Premium tote bags crafted with passion. Designed to make a statement.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <NeonButton>
                  <Link href="/shop" className="block px-6 py-2">
                    Shop Now
                  </Link>
                </NeonButton>
                <Button variant="outline" size="lg" className="hoverable">
                  <Link href="/categories">Explore Collections</Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3} className="md:w-1/2 h-[400px] md:h-[500px] w-full">
              <BagViewer />
            </AnimatedSection>
          </div>

          <div className="absolute bottom-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
              <path
                fill="rgb(var(--background))"
                fillOpacity="1"
                d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neon-text">
                  Discover Our Collections
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find the perfect tote bag that matches your unique style
                </p>
              </div>
            </AnimatedSection>

            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Features Section */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neon-text mb-4">
                Why Choose Savvy Bags?
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Our bags are more than just accessories. They're a statement of quality and style.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Materials",
                  description: "Crafted from the finest materials for durability and style",
                  icon: "/api/placeholder?text=Materials",
                },
                {
                  title: "Handcrafted",
                  description: "Each bag is meticulously handcrafted by skilled artisans",
                  icon: "/api/placeholder?text=Handcrafted",
                },
                {
                  title: "Sustainable",
                  description: "Eco-friendly practices and materials for a better planet",
                  icon: "/api/placeholder?text=Sustainable",
                },
              ].map((feature, index) => (
                <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                  <GlassCard neon className="h-full hoverable">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative w-16 h-16 mb-4">
                        <Image
                          src={feature.icon || "/placeholder.svg"}
                          alt={feature.title}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl neon-text">
                  Featured Collection
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our most popular designs, loved by customers worldwide
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <FeaturedBag />
            </AnimatedSection>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-primary/10 z-0"></div>
          <AnimatedSection delay={0.4} className="relative z-10">
            <Newsletter />
          </AnimatedSection>
        </section>
      </div>
    </PageTransition>
  )
}
