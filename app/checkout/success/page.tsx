import Link from "next/link"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CheckoutSuccessPage() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-24 md:px-6">
      <div className="mx-auto max-w-md text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-6 text-3xl font-bold">Order Successful!</h1>
        <p className="mt-4 text-muted-foreground">
          Thank you for your purchase. Your order has been received and is being processed. You will receive an email
          confirmation shortly.
        </p>
        <div className="mt-8 flex flex-col space-y-2">
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

