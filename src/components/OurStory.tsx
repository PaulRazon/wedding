"use client"

import { useEffect, useRef, useState } from "react"
import { BellRing, Heart, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function OurStory() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

 
  return (
    <section
      ref={sectionRef}
      id="historia"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-[#f5f1eb] to-[#fef9f3] dark:from-[#2d2824] dark:to-[#3a3330]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-[#9dc3e6]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-[#b8d8ea]/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-[#7fb5d1]/10 rounded-full blur-2xl animate-pulse"></div>

        {/* Floating hearts decoration */}
        <Heart className="absolute top-10 right-10 w-5 h-5 text-[#9dc3e6]/40 animate-pulse" />
        <Heart className="absolute top-32 right-1/4 w-4 h-4 text-[#b8d8ea]/30 animate-bounce-slow" />
        <Heart className="absolute bottom-32 left-10 w-4 h-4 text-[#b8d8ea]/40 animate-pulse" />
        <Heart className="absolute bottom-1/3 right-20 w-3 h-3 text-[#9dc3e6]/30 animate-bounce-slow" />
        <Heart className="absolute top-1/2 left-1/4 w-3 h-3 text-[#7fb5d1]/35 animate-pulse" />
      </div>

      <article className="max-w-5xl mx-auto relative z-10">
        {/* Logo with enhanced animation */}
        <div
          className={`w-full flex justify-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="relative group">
            {/* Updated blur of background to pastel blue */}
            <div className="absolute inset-0 bg-[#9dc3e6]/30 rounded-full blur-xl group-hover:bg-[#9dc3e6]/40 transition-all duration-500"></div>
            <Image
              src="/logo-erizos.png"
              width={140}
              height={140}
              alt="Logo"
              className="w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Section Title with enhanced decorations */}
        <section
          className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Changed decorators to pastel blue */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#9dc3e6] to-[#9dc3e6]"></div>
            <Heart className="w-6 h-6 text-[#9dc3e6] fill-[#b8d8ea]/40 animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-[#9dc3e6] to-[#9dc3e6]"></div>
          </div>

          <h2 className="great-vibes-regular text-6xl md:text-7xl font-light text-[#6b5d54] dark:text-[#e8dfd5] mb-10 tracking-wide drop-shadow-md">
            Un amor bonito y eterno
          </h2>

          
        </section>

        {/* Couple Information Card with enhanced design */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Changed borders, shadows, and decorations to pastel blue */}
          <div className="bg-[#fefbf8]/80 dark:bg-[#3a3330]/80 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-[#9dc3e6]/40 dark:border-[#7fb5d1]/40 shadow-2xl shadow-[#7fb5d1]/10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#9dc3e6]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#b8d8ea]/10 rounded-full blur-3xl"></div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center mb-14 relative z-10">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#9dc3e6]"></div>
              <BellRing className="h-7 w-7 mx-6 text-[#9dc3e6] animate-pulse drop-shadow-lg" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#9dc3e6]"></div>
            </div>

            {/* Couple Grid with enhanced cards */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 relative z-10">
              {/* Bride */}
              <div className="text-center group">
                {/* Changed borders, shadows, and hover effects to pastel blue */}
                <div className="mb-8 p-8 rounded-2xl bg-[#f5f1eb]/90 dark:bg-[#2d2824]/90 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#9dc3e6]/20 group-hover:scale-105 group-hover:bg-[#f5f1eb] dark:group-hover:bg-[#2d2824] border border-[#9dc3e6]/20 dark:border-[#7fb5d1]/20">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#9dc3e6]/20 rounded-full blur-xl group-hover:bg-[#9dc3e6]/30 transition-all duration-500"></div>
                    <Heart className="w-10 h-10 mx-auto text-[#9dc3e6] fill-[#b8d8ea]/40 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="great-vibes-regular text-4xl md:text-5xl font-medium text-[#6b5d54] dark:text-[#e8dfd5] mb-8 leading-tight drop-shadow-sm">
                    Anahí Rosario
                    <br />
                    Pérez Jara
                  </h3>
                  <div className="space-y-4">
                    <p className="habibi-regular text-xs uppercase tracking-widest text-[#5a8aad] dark:text-[#9dc3e6] font-semibold">
                      Padres de la novia
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#9dc3e6] to-transparent mx-auto"></div>
                    <p className="habibi-regular text-base md:text-lg text-[#6b5d54] dark:text-[#d4c4b0] leading-relaxed font-medium">
                      Sra. Rosario Jara Pérez
                      <br />
                      Sr. Mario Pérez Casillas
                    </p>
                  </div>
                </div>
              </div>

              {/* Groom */}
              <div className="text-center group">
                {/* Changed borders, shadows, and hover effects to pastel blue */}
                <div className="mb-8 p-8 rounded-2xl bg-[#f5f1eb]/90 dark:bg-[#2d2824]/90 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#b8d8ea]/20 group-hover:scale-105 group-hover:bg-[#f5f1eb] dark:group-hover:bg-[#2d2824] border border-[#b8d8ea]/20 dark:border-[#7fb5d1]/20">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-[#b8d8ea]/20 rounded-full blur-xl group-hover:bg-[#b8d8ea]/30 transition-all duration-500"></div>
                    <Heart className="w-10 h-10 mx-auto text-[#b8d8ea] fill-[#b8d8ea]/40 relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="great-vibes-regular text-4xl md:text-5xl font-medium text-[#6b5d54] dark:text-[#e8dfd5] mb-8 leading-tight drop-shadow-sm">
                    Eduardo Bladimir
                    <br />
                    Razón Machain
                  </h3>
                  <div className="space-y-4">
                    <p className="habibi-regular text-xs uppercase tracking-widest text-[#5a8aad] dark:text-[#9dc3e6] font-semibold">
                      Padres del novio
                    </p>
                    <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#b8d8ea] to-transparent mx-auto"></div>
                    <p className="habibi-regular text-base md:text-lg text-[#6b5d54] dark:text-[#d4c4b0] leading-relaxed font-medium">
                      Sra. Patricia Machain Carvajal
                      <br />
                      Sr. Carlos Eduardo Razón González
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
