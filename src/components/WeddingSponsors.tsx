"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles, Award, Users } from "lucide-react"
import Image from "next/image"

interface Sponsor {
  id: number
  name: string
  role: string
  image: string
  description?: string
}

export default function WeddingSponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "Padrinos de Anillo",
      role: "Anillos",
      image: "/anillos.jpeg",
      description: "Con su bendición, nuestros anillos simbolizan el amor eterno.",
    },
    {
      id: 2,
      name: "Padrinos de Lazo",
      role: "Lazo",
      image: "/lazo.jpeg",
      description: "Su guía nos une en este lazo sagrado de amor y compromiso.",
    },
    {
      id: 3,
      name: "Padrinos de Arras",
      role: "Arras",
      image: "/arras.jpeg",
      description: "Su generosidad es el fundamento de nuestro nuevo hogar.",
    },
    {
      id: 4,
      name: "Padrinos de Ramo",
      role: "Ramo",
      image: "/ramo.jpeg",
      description: "Su amor florece en cada pétalo de nuestro ramo nupcial.",
    },
    {
      id: 5,
      name: "Padrinos de Biblia",
      role: "Biblia",
      image: "/biblia.jpeg",
      description: "Su fe nos guía en este camino de bendición.",
    },
    {
      id: 6,
      name: "Padrinos de Cojines",
      role: "Cojines",
      image: "/cojines.jpeg",
      description: "Su apoyo es el soporte de nuestra unión.",
    },
    {
      id: 7,
      name: "Padrinos de Musica",
      role: "Musica",
      image: "/musica.jpeg",
      description: "Que su alegría sea el vino que celebre nuestro amor.",
    },
    {
      id: 8,
      name: "Padrinos de Brindis",
      role: "Brindis",
      image: "/brindis.jpeg",
      description: "Su cariño será recordado en cada detalle.",
    },
    {
      id: 9,
      name: "Padrinos de Velación",
      role: "Velación",
      image: "/velacion.jpeg",
      description: "Luz y guía en nuestro camino juntos.",
    },
  ]

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
      id="padrinos"
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #fefbf8 0%, #f5f1eb 50%, #fef5f1 100%)",
      }}
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#e8b4a0]/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-40 right-10 w-40 h-40 bg-[#f4d9da]/30 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#c19a7f]/10 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 animate-fade-in-up opacity-100`}>
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-4 w-4 text-[#e8b4a0] mr-3" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#e8b4a0] to-transparent"></div>
            <Sparkles className="h-5 w-5 text-[#c19a7f] mx-3 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#e8b4a0] to-transparent"></div>
            <Heart className="h-4 w-4 text-[#e8b4a0] ml-3" />
          </div>
          <h2
            className="great-vibes-regular text-4xl md:text-5xl font-light mb-4 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #c19a7f 0%, #e8b4a0 50%, #a88872 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 4px rgba(225, 180, 160, 0.1)",
            }}
          >
            Nuestros Padrinos
          </h2>
          <p className="habibi-regular text-lg text-[#8b7355]">
            Personas especiales que nos acompañan en este día tan importante
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 animate-fade-in-up opacity-100`}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#e8b4a0]/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-48 bg-gradient-to-br from-[#f5f1eb] via-[#fef5f1] to-[#e8b4a0]/20 overflow-hidden">
                {sponsor.image ? (
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-contain h-full p-2 w-full transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-[#e8b4a0]/40" />
                  </div>
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(232, 180, 160, 0.8) 0%, rgba(232, 180, 160, 0.4) 50%, transparent 100%)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white/80 rounded-full">
                      <Award className="h-4 w-4 text-[#c19a7f]" />
                    </div>
                    <span className="habibi-regular text-white font-medium text-shadow">{sponsor.role}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-[#fefbf8] to-white/80">
                <h3
                  className="great-vibes-regular text-2xl mb-2"
                  style={{
                    background: "linear-gradient(135deg, #c19a7f 0%, #e8b4a0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {sponsor.name}
                </h3>
                {sponsor.description && (
                  <p className="habibi-regular text-[#8b7355] text-sm leading-relaxed">{sponsor.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
