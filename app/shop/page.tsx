import { BagCard } from "@/components/bag-card"
import { CategoryFilter } from "@/components/category-filter"
import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"

export default function ShopPage() {
  // Sample bag data
  const bags = [
    {
      id: "bag-1",
      name: "Canvas Tote Bag",
      price: 39.99,
      image: "/images/bag-1.jpg",
      category: "casual",
    },
    {
      id: "bag-2",
      name: "Leather Business Tote",
      price: 49.99,
      image: "/images/bag-2.jpg",
      category: "business",
    },
    {
      id: "bag-3",
      name: "Travel Weekender Tote",
      price: 59.99,
      image: "/images/bag-3.jpg",
      category: "travel",
    },
    {
      id: "bag-4",
      name: "Casual Canvas Tote",
      price: 34.99,
      image: "/images/casual-tote.jpg",
      category: "casual",
    },
    {
      id: "bag-5",
      name: "Executive Tote",
      price: 69.99,
      image: "/images/business-tote.jpg",
      category: "business",
    },
    {
      id: "bag-6",
      name: "Adventure Tote",
      price: 54.99,
      image: "/images/travel-tote.jpg",
      category: "travel",
    },
  ]

  return (
    <PageTransition>
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <AnimatedSection>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Shop Our Collection</h1>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-8">
          <AnimatedSection delay={0.2} className="w-full md:w-64 shrink-0">
            <CategoryFilter />
          </AnimatedSection>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bags.map((bag, index) => (
                <AnimatedSection key={bag.id} delay={0.3 + index * 0.1}>
                  <BagCard id={bag.id} name={bag.name} price={bag.price} image={bag.image} category={bag.category} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

