"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Database, Palette, Cpu } from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-800/30 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Built with Next.js, Firebase, Tailwind, and powered by Vapi +
              Gemini AI, InterVue helps students, developers, and professionals
              practice job interviews in a real conversational setting.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We believe that everyone deserves the opportunity to showcase
              their best self in interviews. Our AI-powered platform provides a
              safe, judgment-free environment to practice, learn, and improve.
            </p>

            {/* Tech Stack Icons */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Code className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="font-medium text-gray-200">
                  Next.js & React
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-purple-400" />
                </div>
                <span className="font-medium text-gray-200">Firebase</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Palette className="w-5 h-5 text-blue-400" />
                </div>
                <span className="font-medium text-gray-200">Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="font-medium text-gray-200">
                  Vapi + Gemini AI
                </span>
              </div>
            </div>
          </div>

          {/* Animated Illustration */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="glassmorphism-card rounded-2xl p-8 animate-float">
                <img
                  src="/ai-job-interview.png"
                  alt="AI Interview Assistant"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-black from-cyan-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse-glow">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-black from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
