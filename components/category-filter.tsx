"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CategoryFilter() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedSizes, setSelectedSizes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])

  const categories = [
    { id: "casual", name: "Casual" },
    { id: "business", name: "Business" },
    { id: "travel", name: "Travel" },
  ]

  const colors = [
    { id: "black", name: "Black" },
    { id: "brown", name: "Brown" },
    { id: "beige", name: "Beige" },
    { id: "navy", name: "Navy" },
    { id: "green", name: "Green" },
  ]

  const sizes = [
    { id: "small", name: "Small" },
    { id: "medium", name: "Medium" },
    { id: "large", name: "Large" },
  ]

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleColor = (colorId: string) => {
    setSelectedColors((prev) => (prev.includes(colorId) ? prev.filter((id) => id !== colorId) : [...prev, colorId]))
  }

  const toggleSize = (sizeId: string) => {
    setSelectedSizes((prev) => (prev.includes(sizeId) ? prev.filter((id) => id !== sizeId) : [...prev, sizeId]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedColors([])
    setSelectedSizes([])
    setPriceRange([0, 200])
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <Button variant="outline" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      <Separator />

      <Accordion type="multiple" defaultValue={["categories", "colors", "sizes", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center">
                  <Button
                    variant="ghost"
                    className="justify-start px-2 w-full"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center">
                      <div className="h-4 w-4 border rounded-sm mr-2 flex items-center justify-center">
                        {selectedCategories.includes(category.id) && <Check className="h-3 w-3" />}
                      </div>
                      {category.name}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {colors.map((color) => (
                <div key={color.id} className="flex items-center">
                  <Button variant="ghost" className="justify-start px-2 w-full" onClick={() => toggleColor(color.id)}>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border rounded-sm mr-2 flex items-center justify-center">
                        {selectedColors.includes(color.id) && <Check className="h-3 w-3" />}
                      </div>
                      {color.name}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sizes">
          <AccordionTrigger>Sizes</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {sizes.map((size) => (
                <div key={size.id} className="flex items-center">
                  <Button variant="ghost" className="justify-start px-2 w-full" onClick={() => toggleSize(size.id)}>
                    <div className="flex items-center">
                      <div className="h-4 w-4 border rounded-sm mr-2 flex items-center justify-center">
                        {selectedSizes.includes(size.id) && <Check className="h-3 w-3" />}
                      </div>
                      {size.name}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                className="w-full"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

