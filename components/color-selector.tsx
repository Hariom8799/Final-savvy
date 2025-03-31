"use client"

import { useState } from "react"

interface ColorSelectorProps {
  colors: string[]
}

export function ColorSelector({ colors }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0])

  const colorMap: Record<string, string> = {
    Black: "bg-black",
    Navy: "bg-blue-900",
    Brown: "bg-amber-800",
    Beige: "bg-amber-200",
    Green: "bg-green-700",
  }

  return (
    <div className="flex space-x-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-primary" : "border-transparent"}`}
          style={{ backgroundColor: colorMap[color] ? undefined : color.toLowerCase() }}
          aria-label={`Select ${color} color`}
        >
          <span
            className={colorMap[color]}
            style={{ display: "block", width: "100%", height: "100%", borderRadius: "50%" }}
          ></span>
        </button>
      ))}
    </div>
  )
}

