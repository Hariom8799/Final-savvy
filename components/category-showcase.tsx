"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"

interface CategoryShowcaseProps {
  title: string
  description: string
  image: string
  href: string
}

export function CategoryShowcase({ title, description, image, href }: CategoryShowcaseProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="hoverable">
      <GlassCard neon className="overflow-hidden p-0">
        <div className="relative h-48 w-full">
          <Image
            src={image || "/api/placeholder?text=" + encodeURIComponent(title)}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 neon-text">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Button asChild variant="outline" className="w-full hoverable">
            <Link href={href}>View Collection</Link>
          </Button>
        </div>
      </GlassCard>
    </motion.div>
  )
}
