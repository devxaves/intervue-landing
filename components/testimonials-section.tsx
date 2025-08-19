"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    content:
      "InterVue helped me practice technical interviews with realistic AI conversations. The feedback was incredibly detailed and helped me land my dream job!",
    rating: 5,
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager",
    company: "Microsoft",
    content:
      "The ATS resume evaluator was a game-changer. It showed me exactly what keywords I was missing and helped optimize my resume for each application.",
    rating: 5,
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Airbnb",
    content:
      "As someone with interview anxiety, practicing with AI first gave me the confidence I needed. The voice interactions felt so natural and helpful.",
    rating: 5,
    avatar: "/professional-designer-avatar.png",
  },
  {
    name: "David Kim",
    role: "Data Scientist",
    company: "Netflix",
    content:
      "The analytics dashboard helped me track my progress over time. I could see exactly where I was improving and what areas needed more work.",
    rating: 5,
    avatar: "/data-scientist-avatar.png",
  },
]

const useCases = [
  { title: "Students", description: "Prepare for your first job interviews with confidence" },
  { title: "Job Seekers", description: "Practice and refine your interview skills between applications" },
  { title: "Professionals", description: "Stay sharp and ready for career advancement opportunities" },
  { title: "Recruiters", description: "Help candidates prepare and improve their interview performance" },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gray-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Perfect For Everyone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card
                key={index}
                className="glassmorphism-card border-gray-700/50 hover:scale-105 transition-all duration-300 text-center"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{useCase.title}</h3>
                  <p className="text-gray-300 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glassmorphism-card border-gray-700/50 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center">
                <Quote className="w-12 h-12 text-cyan-400/30 mx-auto mb-6" />

                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
                  "{testimonials[currentTestimonial].content}"
                </p>

                <div className="flex items-center justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-semibold text-gray-100">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-cyan-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
