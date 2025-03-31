import Image from "next/image"
import { notFound } from "next/navigation"
import { BagViewer3D } from "@/components/bag-viewer-3d"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { ColorSelector } from "@/components/color-selector"
import { SizeSelector } from "@/components/size-selector"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // Sample product data - in a real app, you would fetch this from your database
  const products = {
    "bag-1": {
      id: "bag-1",
      name: "Canvas Tote Bag",
      price: 39.99,
      description:
        "Our premium canvas tote bag is perfect for everyday use. Made with high-quality materials, it's designed to last for years. The spacious interior can fit all your essentials, while the sturdy handles make it comfortable to carry.",
      features: [
        "100% premium cotton canvas",
        "Reinforced handles",
        "Interior pocket",
        "Water-resistant lining",
        "Magnetic closure",
      ],
      colors: ["Black", "Navy", "Beige"],
      sizes: ["Small", "Medium", "Large"],
      images: ["/images/bag-1.jpg", "/images/bag-2.jpg", "/images/bag-3.jpg"],
    },
    "bag-2": {
      id: "bag-2",
      name: "Leather Business Tote",
      price: 49.99,
      description:
        "Our leather business tote is perfect for the professional on the go. With dedicated compartments for your laptop, documents, and personal items, it keeps you organized throughout your day.",
      features: [
        "Premium vegan leather",
        'Laptop compartment (fits up to 15")',
        "Multiple interior pockets",
        "Detachable shoulder strap",
        "Metal feet for protection",
      ],
      colors: ["Black", "Brown", "Navy"],
      sizes: ["Medium", "Large"],
      images: ["/images/bag-2.jpg", "/images/business-tote.jpg", "/images/bag-1.jpg"],
    },
    "bag-3": {
      id: "bag-3",
      name: "Travel Weekender Tote",
      price: 59.99,
      description:
        "The perfect companion for weekend getaways or as a carry-on for longer trips. Spacious enough for a few days' worth of clothes and essentials, yet compact enough to fit under an airplane seat.",
      features: [
        "Durable water-resistant material",
        "Expandable main compartment",
        "Shoe compartment",
        "Trolley sleeve for easy attachment to luggage",
        "Removable shoulder strap",
      ],
      colors: ["Black", "Navy", "Green"],
      sizes: ["Medium", "Large"],
      images: ["/images/bag-3.jpg", "/images/travel-tote.jpg", "/images/bag-1.jpg"],
    },
    "bag-4": {
      id: "bag-4",
      name: "Casual Canvas Tote",
      price: 34.99,
      description:
        "A lightweight, casual tote perfect for shopping trips, beach days, or casual outings. Simple yet stylish design with enough room for all your daily essentials.",
      features: [
        "Lightweight cotton canvas",
        "Open top design",
        "Interior zip pocket",
        "Comfortable shoulder straps",
        "Machine washable",
      ],
      colors: ["Beige", "Blue", "Pink"],
      sizes: ["Small", "Medium"],
      images: ["/images/casual-tote.jpg", "/images/bag-1.jpg", "/images/bag-2.jpg"],
    },
    "bag-5": {
      id: "bag-5",
      name: "Executive Tote",
      price: 69.99,
      description:
        "A sophisticated tote designed for the modern professional. Combines elegance with functionality to keep you organized during busy workdays.",
      features: [
        "Premium structured design",
        "Padded laptop sleeve",
        "Document organizer",
        "Key leash",
        "RFID-blocking pocket",
      ],
      colors: ["Black", "Burgundy", "Navy"],
      sizes: ["Medium", "Large"],
      images: ["/images/business-tote.jpg", "/images/bag-2.jpg", "/images/bag-3.jpg"],
    },
    "bag-6": {
      id: "bag-6",
      name: "Adventure Tote",
      price: 54.99,
      description:
        "Built for adventure, this rugged tote can handle anything from hiking trips to urban exploration. Weather-resistant and durable with plenty of organization options.",
      features: [
        "Rugged water-resistant material",
        "Reinforced bottom",
        "Multiple exterior pockets",
        "Adjustable straps",
        "Hidden security pocket",
      ],
      colors: ["Green", "Black", "Brown"],
      sizes: ["Medium", "Large"],
      images: ["/images/travel-tote.jpg", "/images/bag-3.jpg", "/images/bag-1.jpg"],
    },
  }

  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images[0] || `/api/placeholder?text=${encodeURIComponent(product.name)}`}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.images.slice(1).map((image, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={image || `/api/placeholder?text=${encodeURIComponent(product.name)}`}
                  alt={`${product.name} view ${i + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>

          <div>
            <p className="text-muted-foreground">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <ColorSelector colors={product.colors} />
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <SizeSelector sizes={product.sizes} />
            </div>
          </div>

          <AddToCartButton productId={product.id} />

          <div className="mt-8">
            <h3 className="font-medium mb-2">Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, i) => (
                <li key={i} className="text-muted-foreground">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">View in 3D</h2>
        <div className="h-[400px] bg-muted rounded-lg">
          <BagViewer3D productId={product.id} />
        </div>
      </div>
    </div>
  )
}

