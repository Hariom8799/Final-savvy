import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import { connectToDatabase } from "@/lib/db"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const { db } = await connectToDatabase()
    const collection = db.collection("products")

    let product
    try {
      // Try to find by ObjectId
      product = await collection.findOne({ _id: new ObjectId(id) })
    } catch {
      // If not a valid ObjectId, try to find by string id
      product = await collection.findOne({ id })
    }

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id
    const updates = await request.json()

    const { db } = await connectToDatabase()
    const collection = db.collection("products")

    let result
    try {
      // Try to update by ObjectId
      result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updates })
    } catch {
      // If not a valid ObjectId, try to update by string id
      result = await collection.updateOne({ id }, { $set: updates })
    }

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    const updatedProduct = (await collection.findOne({ _id: new ObjectId(id) })) || (await collection.findOne({ id }))

    return NextResponse.json(updatedProduct)
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = params.id

    const { db } = await connectToDatabase()
    const collection = db.collection("products")

    let result
    try {
      // Try to delete by ObjectId
      result = await collection.deleteOne({ _id: new ObjectId(id) })
    } catch {
      // If not a valid ObjectId, try to delete by string id
      result = await collection.deleteOne({ id })
    }

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}
