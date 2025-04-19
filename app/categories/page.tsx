"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import { VectorIllustration } from "@/components/vector-illustration"

export default function CategoriesPage() {
  const categories = [
    {
      id: "casual",
      name: "Casual",
      description: "Perfect for everyday use, our casual tote bags combine style and practicality.",
      image: "/images/casual-tote.jpg",
      products: 12,
      featured: true,
    },
    {
      id: "business",
      name: "Business",
      description: "Professional and elegant totes designed for the modern workplace.",
      image: "/images/business-tote.jpg",
      products: 8,
      featured: true,
    },
    {
      id: "travel",
      name: "Travel",
      description: "Durable and spacious bags that make the perfect travel companion.",
      image: "/images/travel-tote.jpg",
      products: 10,
      featured: true,
    },
    {
      id: "eco-friendly",
      name: "Eco-Friendly",
      description: "Sustainable bags made from recycled and environmentally friendly materials.",
      image: "/images/bag-1.jpg",
      products: 6,
      featured: false,
    },
    {
      id: "limited-edition",
      name: "Limited Edition",
      description: "Exclusive designs available for a limited time only.",
      image: "/images/bag-2.jpg",
      products: 4,
      featured: false,
    },
    {
      id: "seasonal",
      name: "Seasonal",
      description: "Special collections that change with the seasons.",
      image: "/images/bag-3.jpg",
      products: 7,
      featured: false,
    },
  ]

  return (
    <PageTransition>
      <div className="relative">
        {/* Hero Section */}
        <div className="relative h-[50vh] overflow-hidden animated-gradient">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
          <div className="absolute inset-0 flex items-center z-20">
            <div className="container px-4 md:px-6">
              <AnimatedSection>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-4">Our Collections</h1>
                <p className="mt-4 max-w-xl text-white/90 text-lg md:text-xl">
                  Explore our carefully curated categories of premium tote bags designed for every occasion.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <AnimatedSection delay={0.3}>
            <h2 className="text-3xl font-bold mb-12 text-center neon-text">Featured Collections</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories
              .filter((cat) => cat.featured)
              .map((category, index) => (
                <AnimatedSection key={category.id} delay={0.4 + index * 0.1}>
                  <Link href={`/categories/${category.id}`} className="group block">
                    <GlassCard neon className="p-0 h-full hoverable">
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-bold text-white neon-text">{category.name}</h3>
                          <p className="mt-2 text-white/80">{category.description}</p>
                          <div className="mt-4 flex items-center text-white">
                            <span>{category.products} Products</span>
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>

        {/* Vector Illustration */}
        <div className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 z-0"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection>
                <VectorIllustration type="shopping" className="w-full h-64" />
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* All Categories */}
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <AnimatedSection delay={0.5}>
            <h2 className="text-3xl font-bold mb-12 text-center neon-text">All Collections</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={0.6 + index * 0.1}>
                <GlassCard neon className="h-full hoverable">
                  <div className="relative h-48">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover rounded-md"
                    />
                    <div className="absolute top-2 right-2 bg-primary/80 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
                      {category.products} Products
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex justify-between items-center">
                      <Button asChild variant="outline" size="sm" className="hoverable">
                        <Link href={`/categories/${category.id}`}>View Collection</Link>
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
