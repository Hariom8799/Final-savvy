import { useRecoilValue } from "recoil"

import { cartState } from "@/lib/atoms/cart"
import { formatCurrency } from "@/lib/utils"

interface CheckoutSummaryProps {
  subtotal: number
  shipping: number
  total: number
}

export function CheckoutSummary({ subtotal, shipping, total }: CheckoutSummaryProps) {
  const cart = useRecoilValue(cartState)

  return (
    <div className="rounded-lg border p-6 space-y-6">
      <h2 className="text-lg font-semibold">Order Summary</h2>

      <div className="space-y-4">
        {cart.items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>{formatCurrency(item.price * item.quantity)}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4 pt-4 border-t">
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
    </div>
  )
}

