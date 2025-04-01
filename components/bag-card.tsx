"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface BagCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function BagCard({ id, name, price, image, category }: BagCardProps) {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <Card className="overflow-hidden h-full">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || `/api/placeholder?text=${encodeURIComponent(name)}`}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <Button asChild variant="secondary" className="w-full">
              <Link href={`/shop/${id}`}>Quick View</Link>
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-1">
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-muted-foreground capitalize">{category}</p>
            <p className="font-semibold">${price.toFixed(2)}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/shop/${id}`}>View</Link>
          </Button>
          <AddToCartButton productId={id} variant="icon" />
        </CardFooter>
      </Card>
    </motion.div>
  )
}

