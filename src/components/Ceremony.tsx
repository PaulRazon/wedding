"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Clock, Church, Sparkles, Heart } from "lucide-react"
import HedgehogDecoration from "./HedgehogDecoration"
import Image from "next/image"

export default function Ceremony() {
  const [isVisible, setIsVisible] = useState(false)
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
    <article
      ref={sectionRef}
      id="ceremonia"
      className="py-20 px-4 dark:from-gray-900/80 dark:via-gray-800/80 dark:to-[#f5e6d3]/10 relative overflow-hidden"
      aria-labelledby="ceremony-heading"
       style={{
        backgroundImage: "url('/resource-photo-17.jpeg')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat"
      }}

    >

      {/* layer black */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#c5e3f5]/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#a8d8f0]/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#d0ecf8]/40 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      <HedgehogDecoration
        position="top-right"
        size="small"
        variant={2}
        className="hidden md:block"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <header
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6" aria-hidden="true">
            <Sparkles className="h-4 w-4 text-white dark:text-[#c5e3f5] mr-3 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <Heart className="h-6 w-6 text-white dark:text-[#a8d8f0] mx-3 animate-bounce-slow" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
            <Sparkles
              className="h-4 w-4 text-white dark:text-[#c5e3f5] ml-3 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <h2
            id="ceremony-heading"
            className="great-vibes-regular pt-2 text-5xl md:text-6xl font-light text-white mb-4 tracking-wide drop-shadow-lg"
          >
            Ceremonia Religiosa
          </h2>
          <p className="habibi-regular text-xl text-white max-w-2xl mx-auto">
            Dios está aquí y bendice nuestro amor en:
          </p>
        </header>

        <section
          className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border-2 border-[#c5e3f5]/60 dark:border-[#a8d8f0]/30 shadow-2xl shadow-[#a8d8f0]/20 dark:shadow-[#8cc9e0]/20 transition-all duration-1000 delay-300 hover:shadow-3xl hover:scale-[1.02] ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
          aria-labelledby="ceremony-details"
        >
          <div className="text-center space-y-10">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#a8d8f0] to-[#8cc9e0] rounded-full blur-xl opacity-40 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-[#f5fbfd] to-[#f0f9fd] dark:from-[#8cc9e0]/20 dark:to-[#a8d8f0]/20 p-6 rounded-full">
                  <Image src="/iglesia.png" width={56} height={56} alt="Church" aria-hidden="true" />
                </div>
              </div>
              <h3 id="ceremony-details" className="sr-only">
                Detalles de la ceremonia
              </h3>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-3 mb-2">
                  <div className="bg-[#f5fbfd] dark:bg-[#8cc9e0]/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#7ba3c8] dark:text-[#a8d8f0]" aria-hidden="true" />
                  </div>
                  <p className="habibi-regular text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Parroquia de San Cayetano
                  </p>
                </div>
                <address className="not-italic habibi-regular text-lg text-gray-600 dark:text-gray-400">
                  Plaza principal de Xalisco, Nayarit
                </address>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 pt-8 border-t-2 border-gradient-to-r from-transparent via-[#c5e3f5] to-transparent dark:via-[#a8d8f0]/30">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-[#f5fbfd] to-[#f0f9fd] dark:from-[#8cc9e0]/10 dark:to-[#a8d8f0]/10 px-6 py-3 rounded-full border border-[#c5e3f5] dark:border-[#8cc9e0]/40">
                    <div className="bg-[#c5e3f5] dark:bg-[#8cc9e0]/50 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-[#7ba3c8] dark:text-[#f5fbfd]" aria-hidden="true" />
                    </div>
                    <time
                      dateTime="2026-04-11T16:00:00"
                      className="habibi-regular text-base md:text-lg font-medium text-gray-900 dark:text-gray-100"
                    >
                      Sábado, 11 de Abril del 2026
                    </time>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#f0f9fd] to-[#f5fbfd] dark:from-[#a8d8f0]/10 dark:to-[#c5e3f5]/10 px-6 py-3 rounded-full border border-[#a8d8f0] dark:border-[#8cc9e0]/40">
                  <div className="bg-[#a8d8f0] dark:bg-[#8cc9e0]/50 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-[#7ba3c8] dark:text-[#f5fbfd]" aria-hidden="true" />
                  </div>
                  <span className="habibi-regular text-base md:text-lg font-medium text-gray-900 dark:text-gray-100">
                    4:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}
