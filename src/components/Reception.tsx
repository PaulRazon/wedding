"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, MapPin, Music, Utensils, Sparkles, PartyPopper } from "lucide-react"
import HedgehogDecoration from "./HedgehogDecoration"

export default function Reception() {
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
    <section
      ref={sectionRef}
      id="recepcion"
      className="py-16 px-4 relative overflow-hidden"
      
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, #e8b4a0 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full opacity-15 animate-float-delayed"
          style={{ background: "radial-gradient(circle, #f4d9da 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full opacity-10 animate-float-slow"
          style={{ background: "radial-gradient(circle, #c19a7f 0%, transparent 70%)" }}
        />
      </div>

      <HedgehogDecoration position="bottom-left" size="medium" variant={1} className="hidden lg:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <PartyPopper className="h-4 w-4 mr-3" style={{ color: "#e8b4a0" }} />
            <div className="w-12 h-px" style={{ background: "#e8b4a0" }}></div>
            <Sparkles className="h-5 w-5 mx-3" style={{ color: "#e8b4a0" }} />
            <div className="w-12 h-px" style={{ background: "#e8b4a0" }}></div>
            <PartyPopper className="h-4 w-4 ml-3" style={{ color: "#e8b4a0" }} />
          </div>
          <h2
            className="great-vibes-regular text-3xl md:text-4xl font-light mb-4 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #c19a7f 0%, #e8b4a0 50%, #c19a7f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 8px rgba(200, 154, 127, 0.15)",
            }}
          >
            Recepción
          </h2>
          <p className="habibi-regular text-lg" style={{ color: "#a88872" }}>
            Celebremos juntos
          </p>
        </div>

        {/* Reception Details */}
        <div
          className={`rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-1000 delay-300 relative group ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(232, 180, 160, 0.3)",
            boxShadow: "0 8px 32px rgba(200, 154, 127, 0.15)",
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at top right, rgba(232, 180, 160, 0.1) 0%, transparent 60%)",
            }}
          />

          <div className="text-center space-y-8 relative z-10">
            <div className="relative inline-flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{ background: "radial-gradient(circle, rgba(232, 180, 160, 0.3) 0%, transparent 70%)" }}
              />
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, #fde8e9 0%, #f4d9da 100%)",
                  boxShadow: "0 4px 16px rgba(232, 180, 160, 0.25)",
                }}
              >
                <Utensils className="h-10 w-10" style={{ color: "#c19a7f" }} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4 group/item hover:scale-105 transition-transform duration-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fde8e9 0%, #f4d9da 100%)" }}
                >
                  <Clock className="h-5 w-5" style={{ color: "#e8b4a0" }} />
                </div>
                <span className="habibi-regular text-lg" style={{ color: "#6b5447" }}>
                  5:30 PM
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 group/item hover:scale-105 transition-transform duration-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fde8e9 0%, #f4d9da 100%)" }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#e8b4a0" }} />
                </div>
                <span className="habibi-regular text-lg" style={{ color: "#6b5447" }}>
                  La Muralla Jardín Campestre
                </span>
              </div>

              <div className="flex items-center justify-center gap-4 group/item hover:scale-105 transition-transform duration-300">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #fde8e9 0%, #f4d9da 100%)" }}
                >
                  <Music className="h-5 w-5" style={{ color: "#e8b4a0" }} />
                </div>
                <span className="habibi-regular text-lg" style={{ color: "#6b5447" }}>
                  Música, baile y celebración
                </span>
              </div>
            </div>

            <div
              className="pt-6 rounded-xl p-4"
              style={{
                borderTop: "2px solid rgba(232, 180, 160, 0.3)",
                background: "linear-gradient(to bottom, transparent 0%, rgba(253, 232, 233, 0.3) 100%)",
              }}
            >
              <p className="habibi-regular text-base mb-3" style={{ color: "#a88872" }}>
                Carretera al aeropuerto km. 2.5, Pantanal, Xalisco
              </p>
              <a
                href="https://share.google/0ANQdueTDcglVTguH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 habibi-regular text-sm px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  color: "#c19a7f",
                  background: "linear-gradient(135deg, #fde8e9 0%, #f4d9da 100%)",
                  border: "1px solid rgba(232, 180, 160, 0.4)",
                }}
              >
                <MapPin className="h-4 w-4" />
                Ver en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
