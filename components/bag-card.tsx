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
    <Card className="overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || `/api/placeholder?text=${encodeURIComponent(name)}`}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
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
  )
}

