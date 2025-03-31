import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryShowcaseProps {
  title: string
  description: string
  image: string
  href: string
}

export function CategoryShowcase({ title, description, image, href }: CategoryShowcaseProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/api/placeholder?text=" + encodeURIComponent(title)}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button asChild variant="outline" className="w-full">
          <Link href={href}>View Collection</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

