"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRecoilState } from "recoil"
import { Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cartState } from "@/lib/atoms/cart"
import { formatCurrency } from "@/lib/utils"

export default function CartPage() {
  const [cart, setCart] = useRecoilState(cartState)

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return

    setCart((prev) => {
      const updatedItems = prev.items.map((item) => {
        if (item.id === id) {
          return { ...item, quantity }
        }
        return item
      })
      return { ...prev, items: updatedItems }
    })
  }

  const removeItem = (id: string) => {
    setCart((prev) => {
      const updatedItems = prev.items.filter((item) => item.id !== id)
      return { ...prev, items: updatedItems }
    })
  }

  const subtotal = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = subtotal > 0 ? 5.99 : 0
  const total = subtotal + shipping

  // For demo purposes, we'll add some items to the cart
  useEffect(() => {
    if (cart.items.length === 0) {
      setCart({
        items: [
          {
            id: "bag-1",
            name: "Canvas Tote Bag",
            price: 49.99,
            quantity: 1,
            image: "/images/bag-1.jpg",
            color: "Black",
            size: "Medium",
          },
          {
            id: "bag-2",
            name: "Leather Tote Bag",
            price: 79.99,
            quantity: 1,
            image: "/images/bag-2.jpg",
            color: "Brown",
            size: "Large",
          },
        ],
      })
    }
  }, [cart.items.length, setCart])

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Your Cart</h1>

      {cart.items.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border">
              <div className="p-6 space-y-6">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b last:border-0 last:pb-0">
                    <div className="relative w-full sm:w-24 h-24 rounded-md overflow-hidden bg-muted shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col sm:flex-row flex-1 gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.color}, {item.size}
                        </p>
                        <p className="font-medium mt-1">{formatCurrency(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-r-none"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value) || 1)}
                            className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-l-none"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-lg border p-6 space-y-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{formatCurrency(shipping)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(total)}</span>
                </div>
              </div>
              <Button className="w-full" size="lg" asChild>
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

