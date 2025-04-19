"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { GlassCard } from "@/components/ui/glass-card"

export function FeaturedBag() {
  const [selectedColor, setSelectedColor] = useState("black")

  const colors = {
    black: {
      name: "Black",
      image: "/images/bag-1.jpg",
    },
    brown: {
      name: "Brown",
      image: "/images/bag-2.jpg",
    },
    beige: {
      name: "Beige",
      image: "/images/bag-3.jpg",
    },
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={colors[selectedColor as keyof typeof colors].image || `/api/placeholder?text=Featured Bag`}
          alt="Featured Bag"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 bg-primary/80 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-2">
            Featured
          </span>
          <h3 className="text-xl font-bold text-white">Premium Canvas Tote</h3>
        </motion.div>
      </div>

      <GlassCard neon className="flex flex-col justify-center h-full">
        <h3 className="text-2xl font-bold mb-2 neon-text">Premium Canvas Tote</h3>
        <p className="text-xl font-semibold mb-4 text-primary">$49.99</p>
        <p className="text-muted-foreground mb-6">
          Our best-selling tote bag, perfect for everyday use. Made with premium canvas material and reinforced handles
          for durability.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Color</h4>
            <div className="flex space-x-2">
              {Object.entries(colors).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setSelectedColor(key)}
                  className={`w-8 h-8 rounded-full border-2 hoverable ${selectedColor === key ? "border-primary" : "border-transparent"}`}
                  style={{ backgroundColor: key }}
                  aria-label={`Select ${value.name} color`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <AddToCartButton productId="featured-bag" />
            <Button variant="outline" asChild className="hoverable">
              <Link href="/shop/bag-1">View Details</Link>
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
