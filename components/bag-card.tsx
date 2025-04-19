"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { GlassCard } from "@/components/ui/glass-card"

interface BagCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function BagCard({ id, name, price, image, category }: BagCardProps) {
  return (
    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }} className="hoverable h-full">
      <GlassCard neon className="overflow-hidden p-0 h-full">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || `/api/placeholder?text=${encodeURIComponent(name)}`}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <Button asChild variant="secondary" className="w-full hoverable">
              <Link href={`/shop/${id}`}>Quick View</Link>
            </Button>
          </div>
        </div>
        <div className="p-4">
          <div className="space-y-1">
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground capitalize">{category}</p>
            <p className="font-semibold neon-text">${price.toFixed(2)}</p>
          </div>
        </div>
        <div className="p-4 pt-0 flex gap-2">
          <Button asChild variant="outline" className="w-full hoverable">
            <Link href={`/shop/${id}`}>View</Link>
          </Button>
          <AddToCartButton productId={id} variant="icon" />
        </div>
      </GlassCard>
    </motion.div>
  )
}
