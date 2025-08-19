"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for getting started",
    features: ["Limited interview attempts", "Basic AI feedback", "Standard question bank", "Email support"],
    buttonText: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Best for serious job seekers",
    features: [
      "Unlimited interviews",
      "ATS resume evaluator",
      "Detailed AI feedback",
      "Custom question sets",
      "Priority support",
      "Interview analytics",
    ],
    buttonText: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team dashboard",
      "Advanced analytics",
      "Custom integrations",
      "Dedicated support",
      "White-label options",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include our core AI interview features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              data-index={index}
              className={`relative glassmorphism-card border-gray-700/50 hover:scale-105 transition-all duration-500 ${
                plan.popular ? "ring-2 ring-purple-500 animate-pulse-glow" : ""
              } ${visibleCards.includes(index) ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-gray-100">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-100">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                <CardDescription className="mt-2 text-gray-300">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "animate-pulse-glow bg-gradient-to-r from-purple-500 to-cyan-500" : "border-gray-600 text-gray-200 hover:bg-gray-700"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.popular && <Zap className="w-4 h-4 mr-2" />}
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
