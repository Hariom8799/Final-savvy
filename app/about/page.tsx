import Image from "next/image"
import { CheckCircle, Users, Heart, Award, Leaf, Clock } from "lucide-react"

import { PageTransition } from "@/components/page-transition"
import { AnimatedSection } from "@/components/animated-section"
import { GlassCard } from "@/components/ui/glass-card"
import { VectorIllustration } from "@/components/vector-illustration"

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passion for Quality",
      description: "We're obsessed with creating bags that exceed expectations in both form and function.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices throughout our production process.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer Focus",
      description: "Your satisfaction drives everything we do, from design to delivery and beyond.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Craftsmanship",
      description: "Each bag is meticulously crafted by skilled artisans who take pride in their work.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timeless Design",
      description: "We create bags that transcend trends and remain stylish for years to come.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      image: "/api/placeholder?text=Sarah",
      bio: "With over 15 years in fashion design, Sarah founded Savvy Bags with a vision to create beautiful, functional bags for everyday life.",
    },
    {
      name: "Michael Chen",
      role: "Head of Production",
      image: "/api/placeholder?text=Michael",
      bio: "Michael ensures that every bag meets our exacting standards for quality and craftsmanship.",
    },
    {
      name: "Olivia Rodriguez",
      role: "Design Lead",
      image: "/api/placeholder?text=Olivia",
      bio: "Olivia brings fresh, innovative designs to our collections while maintaining our signature aesthetic.",
    },
  ]

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden animated-gradient">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container px-4 md:px-6">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold neon-text mb-4">Our Story</h1>
              <p className="mt-4 max-w-xl text-white/90 text-lg md:text-xl">
                Crafting premium tote bags with passion and purpose since 2015.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <VectorIllustration type="bag" className="w-full h-full" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GlassCard neon>
              <h2 className="text-3xl font-bold mb-6 neon-text">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Savvy Bags, we believe that a great bag is more than just an accessory—it's an essential companion
                for life's journey. Our mission is to create beautiful, functional tote bags that enhance your everyday
                experiences.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We're committed to sustainable practices, exceptional craftsmanship, and designs that stand the test of
                time. Each bag is thoughtfully created to be both practical and stylish, meeting the needs of our
                diverse customers.
              </p>
              <ul className="space-y-2">
                {["Premium materials", "Ethical production", "Timeless design", "Customer satisfaction"].map(
                  (item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      <span>{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center neon-text">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <GlassCard neon className="h-full hoverable">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container px-4 py-16 md:px-6 md:py-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center neon-text">Meet Our Team</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedSection key={index} delay={0.3 + index * 0.1}>
              <GlassCard neon className="text-center hoverable">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-6">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-primary/10 z-0"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center neon-text">Our Journey</h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {[
              {
                year: "2015",
                title: "The Beginning",
                description: "Savvy Bags was founded with a vision to create beautiful, functional tote bags.",
              },
              {
                year: "2017",
                title: "Expanding Collections",
                description: "We introduced our first specialized collections for business and travel.",
              },
              {
                year: "2019",
                title: "Sustainability Initiative",
                description: "We committed to using eco-friendly materials and ethical production practices.",
              },
              {
                year: "2021",
                title: "Global Presence",
                description: "Our bags became available worldwide, reaching customers in over 30 countries.",
              },
              {
                year: "2023",
                title: "Innovation",
                description: "We launched our first collection of smart bags with integrated technology.",
              },
            ].map((event, index) => (
              <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                <GlassCard neon className="mb-8 last:mb-0 hoverable">
                  <div className="flex">
                    <div className="mr-4 md:mr-8">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                          {event.year.substring(2)}
                        </div>
                        {index < 4 && <div className="w-0.5 h-full bg-primary/30 mt-2"></div>}
                      </div>
                    </div>
                    <div className="pt-1.5">
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                      <p className="text-sm text-primary mb-1">{event.year}</p>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
