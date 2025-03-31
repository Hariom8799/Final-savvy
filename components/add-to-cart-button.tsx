"use client"

import { useRecoilState } from "recoil"
import { ShoppingCart, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cartState } from "@/lib/atoms/cart"

interface AddToCartButtonProps {
  productId: string
  variant?: "default" | "icon"
}

export function AddToCartButton({ productId, variant = "default" }: AddToCartButtonProps) {
  const [cart, setCart] = useRecoilState(cartState)

  // Sample product data - in a real app, you would fetch this from your database
  const products = {
    "bag-1": {
      id: "bag-1",
      name: "Canvas Tote Bag",
      price: 39.99,
      image: "/images/bag-1.jpg",
      color: "Black",
      size: "Medium",
    },
    "bag-2": {
      id: "bag-2",
      name: "Leather Business Tote",
      price: 49.99,
      image: "/images/bag-2.jpg",
      color: "Brown",
      size: "Large",
    },
    "bag-3": {
      id: "bag-3",
      name: "Travel Weekender Tote",
      price: 59.99,
      image: "/images/bag-3.jpg",
      color: "Navy",
      size: "Large",
    },
    "bag-4": {
      id: "bag-4",
      name: "Casual Canvas Tote",
      price: 34.99,
      image: "/images/casual-tote.jpg",
      color: "Beige",
      size: "Medium",
    },
    "bag-5": {
      id: "bag-5",
      name: "Executive Tote",
      price: 69.99,
      image: "/images/business-tote.jpg",
      color: "Black",
      size: "Large",
    },
    "bag-6": {
      id: "bag-6",
      name: "Adventure Tote",
      price: 54.99,
      image: "/images/travel-tote.jpg",
      color: "Green",
      size: "Medium",
    },
    "featured-bag": {
      id: "featured-bag",
      name: "Premium Canvas Tote",
      price: 49.99,
      image: "/images/bag-1.jpg",
      color: "Black",
      size: "Medium",
    },
  }

  const addToCart = () => {
    const product = products[productId as keyof typeof products] || {
      id: productId,
      name: "Tote Bag",
      price: 49.99,
      image: "/images/bag-1.jpg",
      color: "Black",
      size: "Medium",
    }

    setCart((prev) => {
      const existingItem = prev.items.find((item) => item.id === productId)

      if (existingItem) {
        return {
          ...prev,
          items: prev.items.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)),
        }
      } else {
        return {
          ...prev,
          items: [...prev.items, { ...product, quantity: 1 }],
        }
      }
    })
  }

  if (variant === "icon") {
    return (
      <Button size="icon" onClick={addToCart} aria-label="Add to cart">
        <Plus className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button onClick={addToCart} className="w-full">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  )
}

