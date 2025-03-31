"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"

interface SizeSelectorProps {
  sizes: string[]
}

export function SizeSelector({ sizes }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  return (
    <div className="flex space-x-2">
      {sizes.map((size) => (
        <Button
          key={size}
          variant={selectedSize === size ? "default" : "outline"}
          className="w-16"
          onClick={() => setSelectedSize(size)}
        >
          {size}
        </Button>
      ))}
    </div>
  )
}

