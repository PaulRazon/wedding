"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Clock, Church, Sparkles, Heart } from "lucide-react"
import HedgehogDecoration from "./HedgehogDecoration"

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
      className="py-20 px-4  relative overflow-hidden"
      aria-labelledby="ceremony-heading"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#f4d5c6]/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#e8c5b5]/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#fde8e9]/40 rounded-full blur-2xl animate-bounce-slow"></div>
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
            <Sparkles className="h-4 w-4 text-[#e8b4a0] dark:text-[#f4d5c6] mr-3 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#e8b4a0] to-transparent"></div>
            <Heart className="h-6 w-6 text-[#d4a89a] dark:text-[#e8b4a0] mx-3 animate-bounce-slow" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#e8b4a0] to-transparent"></div>
            <Sparkles
              className="h-4 w-4 text-[#e8b4a0] dark:text-[#f4d5c6] ml-3 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          <h2
            id="ceremony-heading"
            className="great-vibes-regular pt-2 text-5xl md:text-6xl font-light bg-gradient-to-r from-[#c19a7f] via-[#e8b4a0] to-[#f5c7c1] dark:from-[#e8c5b5] dark:via-[#f4d5c6] dark:to-[#fde8e9] bg-clip-text text-transparent mb-4 tracking-wide drop-shadow-lg"
          >
            Ceremonia Religiosa
          </h2>
          <p className="habibi-regular text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Dios está aquí y bendice nuestro amor en:
          </p>
        </header>

        <section
          className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 md:p-12 border-2 border-[#f4d5c6]/60 dark:border-[#e8c5b5]/30 shadow-2xl shadow-[#e8b4a0]/20 dark:shadow-[#c19a7f]/20 transition-all duration-1000 delay-300 hover:shadow-3xl hover:scale-[1.02] ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
          aria-labelledby="ceremony-details"
        >
          <div className="text-center space-y-10">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e8b4a0] to-[#d4a89a] rounded-full blur-xl opacity-40 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-[#fef4ed] to-[#fde8e9] dark:from-[#c19a7f]/20 dark:to-[#d4a89a]/20 p-6 rounded-full">
                  <Church className="h-14 w-14 text-[#c19a7f] dark:text-[#e8b4a0]" aria-hidden="true" />
                </div>
              </div>
              <h3 id="ceremony-details" className="sr-only">
                Detalles de la ceremonia
              </h3>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-3 mb-2">
                  <div className="bg-[#fef4ed] dark:bg-[#c19a7f]/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-[#c19a7f] dark:text-[#e8b4a0]" aria-hidden="true" />
                  </div>
                  <p className="habibi-regular text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Parroquia de San Cayetano
                  </p>
                </div>
                <address className="not-italic habibi-regular text-lg text-gray-600 dark:text-gray-400">
                  Plaza principal de Xalisco, Nayarit
                </address>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 pt-8 border-t-2 border-gradient-to-r from-transparent via-[#f4d5c6] to-transparent dark:via-[#e8c5b5]/30">
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3 bg-gradient-to-r from-[#fef4ed] to-[#fde8e9] dark:from-[#c19a7f]/10 dark:to-[#e8b4a0]/10 px-6 py-3 rounded-full border border-[#f4d5c6] dark:border-[#c19a7f]/40">
                    <div className="bg-[#f4d5c6] dark:bg-[#c19a7f]/50 p-2 rounded-full">
                      <Calendar className="h-5 w-5 text-[#c19a7f] dark:text-[#fef4ed]" aria-hidden="true" />
                    </div>
                    <time
                      dateTime="2026-04-11T16:00:00"
                      className="habibi-regular text-base md:text-lg font-medium text-gray-900 dark:text-gray-100"
                    >
                      Sábado, 11 de Abril del 2026
                    </time>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#fde8e9] to-[#fef4ed] dark:from-[#d4a89a]/10 dark:to-[#e8b4a0]/10 px-6 py-3 rounded-full border border-[#e8c5b5] dark:border-[#d4a89a]/40">
                  <div className="bg-[#e8c5b5] dark:bg-[#d4a89a]/50 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-[#c19a7f] dark:text-[#fef4ed]" aria-hidden="true" />
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
