import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"
import { getCurrentUser } from "@/lib/auth"
import { ObjectId } from "mongodb"

export async function GET(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { db } = await connectToDatabase()
    const collection = db.collection("carts")

    const cart = await collection.findOne({ userId: user.email })

    if (!cart) {
      return NextResponse.json({ items: [] })
    }

    return NextResponse.json(cart)
  } catch (error) {
    console.error("Error fetching cart:", error)
    return NextResponse.json({ error: "Failed to fetch cart" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { item } = await request.json()

    const { db } = await connectToDatabase()
    const collection = db.collection("carts")

    // Find the user's cart
    let cart = await collection.findOne({ userId: user.email })

    if (!cart) {
      // Create a new cart if it doesn't exist
      cart = {
        _id: new ObjectId(), // Add a new ObjectId for the _id field
        userId: user.email,
        items: [item],
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      await collection.insertOne(cart)
    } else {
      // Check if the item already exists in the cart
      const existingItemIndex = cart.items.findIndex((i: any) => i.id === item.id)

      if (existingItemIndex >= 0) {
        // Update the quantity if the item exists
        cart.items[existingItemIndex].quantity += item.quantity
      } else {
        // Add the new item to the cart
        cart.items.push(item)
      }

      cart.updatedAt = new Date()

      await collection.updateOne({ userId: user.email }, { $set: { items: cart.items, updatedAt: cart.updatedAt } })
    }

    return NextResponse.json(cart)
  } catch (error) {
    console.error("Error updating cart:", error)
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { items } = await request.json()

    const { db } = await connectToDatabase()
    const collection = db.collection("carts")

    await collection.updateOne(
      { userId: user.email },
      {
        $set: {
          items,
          updatedAt: new Date(),
        },
        $setOnInsert: {
          userId: user.email,
          createdAt: new Date(),
        },
      },
      { upsert: true },
    )

    const updatedCart = await collection.findOne({ userId: user.email })

    return NextResponse.json(updatedCart)
  } catch (error) {
    console.error("Error updating cart:", error)
    return NextResponse.json({ error: "Failed to update cart" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await getCurrentUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { db } = await connectToDatabase()
    const collection = db.collection("carts")

    await collection.deleteOne({ userId: user.email })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting cart:", error)
    return NextResponse.json({ error: "Failed to delete cart" }, { status: 500 })
  }
}
