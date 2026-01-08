"use client"

import { useEffect, useRef, useState } from "react"
import { Gift, Heart } from "lucide-react"

export default function GiftsSection() {
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
      id="regalos"
      className="py-16 px-4 relative overflow-hidden"
    
    >
  

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Gift className="h-4 w-4 mr-3" style={{ color: "#9dc3e6" }} />
            <div className="w-12 h-px" style={{ background: "#9dc3e6" }}></div>
            <Heart className="h-5 w-5 mx-3" style={{ color: "#9dc3e6" }} />
            <div className="w-12 h-px" style={{ background: "#9dc3e6" }}></div>
            <Gift className="h-4 w-4 ml-3" style={{ color: "#9dc3e6" }} />
          </div>
          <h2
            className="great-vibes-regular text-3xl md:text-4xl font-light mb-4 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #7fb5d1 0%, #9dc3e6 50%, #7fb5d1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 8px rgba(127, 181, 209, 0.15)",
            }}
          >
            Regalos
          </h2>
          <p className="habibi-regular text-lg" style={{ color: "#5a8aad" }}>
            Su presencia es nuestro mejor regalo
          </p>
        </div>

        {/* Gifts Content */}
        <div
          className={`rounded-2xl p-8 md:p-10 max-w-3xl mx-auto shadow-lg transition-all duration-500 relative group ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(157, 195, 230, 0.3)",
            boxShadow: "0 8px 32px rgba(127, 181, 209, 0.15)",
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle at top left, rgba(157, 195, 230, 0.1) 0%, transparent 60%)",
            }}
          />

          <div className="text-center relative z-10">
            <div className="relative inline-flex items-center justify-center mb-6">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{ background: "radial-gradient(circle, rgba(157, 195, 230, 0.3) 0%, transparent 70%)" }}
              />
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, #d4ebf2 0%, #b8d8ea 100%)",
                  boxShadow: "0 4px 16px rgba(157, 195, 230, 0.25)",
                }}
              >
                <Gift className="h-10 w-10" style={{ color: "#7fb5d1" }} strokeWidth={1.5} />
              </div>
            </div>

            <p className="habibi-regular text-lg mb-6 leading-relaxed" style={{ color: "#4a6b7c" }}>
              Su presencia en nuestro día especial es el mejor regalo que podríamos recibir. Sin embargo, si desean
              hacernos un obsequio, agradeceríamos mucho su apoyo en efectivo para nuestro futuro juntos.
            </p>

            <div
              className="mt-8 p-6 rounded-xl relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(212, 235, 242, 0.4) 0%, rgba(184, 216, 234, 0.4) 100%)",
                border: "2px solid rgba(157, 195, 230, 0.3)",
                boxShadow: "0 4px 16px rgba(157, 195, 230, 0.1)",
              }}
            >
              <div className="absolute top-2 right-2 opacity-20">
                <Heart className="h-8 w-8" style={{ color: "#9dc3e6" }} />
              </div>
              <div className="absolute bottom-2 left-2 opacity-20">
                <Heart className="h-6 w-6" style={{ color: "#b8d8ea" }} />
              </div>

              <p className="habibi-regular text-sm relative z-10" style={{ color: "#5a8aad" }}>
                Usa tu creatividad y envuélvelo tu mismo. Podrás depositarlo dentro de la recepción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
