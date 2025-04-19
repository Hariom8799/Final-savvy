import { NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const skip = (page - 1) * limit

    const { db } = await connectToDatabase()
    const collection = db.collection("products")

    const query = category ? { category } : {}
    const products = await collection.find(query).skip(skip).limit(limit).toArray()

    const total = await collection.countDocuments(query)

    return NextResponse.json({
      products,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json()

    const { db } = await connectToDatabase()
    const collection = db.collection("products")

    const result = await collection.insertOne(product)

    return NextResponse.json(
      {
        id: result.insertedId,
        ...product,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
