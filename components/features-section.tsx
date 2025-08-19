"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Mic,
  Zap,
  BarChart3,
  FileText,
  Smartphone,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Shield,
    title: "Secure Authentication",
    description:
      "Firebase-powered secure sign-up and sign-in with enterprise-grade security.",
    color: "text-primary",
  },
  {
    icon: Mic,
    title: "AI-Powered Interviews",
    description:
      "Conduct realistic interviews with Vapi AI voice assistants that adapt to your responses.",
    color: "text-secondary",
  },
  {
    icon: Zap,
    title: "Instant Feedback",
    description:
      "Get real-time AI-driven feedback with detailed transcripts and improvement suggestions.",
    color: "text-accent",
  },
  {
    icon: BarChart3,
    title: "Smart Dashboard",
    description:
      "Track and manage all your interviews in one comprehensive, intuitive dashboard.",
    color: "text-primary",
  },
  {
    icon: FileText,
    title: "ATS Resume Evaluator",
    description:
      "Upload your resume and job description to get ATS match insights and keyword suggestions.",
    color: "text-secondary",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Practice anywhere with our modern, responsive UI that works seamlessly across all devices.",
    color: "text-accent",
  },
];

export function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...prev, cardIndex]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to master job interviews with cutting-edge AI
            technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-index={index}
              className={`glassmorphism-card hover:scale-105 transition-all duration-500 cursor-pointer group border-gray-700/50 ${
                visibleCards.includes(index) ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg bg-black from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
