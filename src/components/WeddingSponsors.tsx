
"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles, Award, Users } from "lucide-react"
import Image from "next/image"

interface Sponsor {
  id: number
  sponsor: string
  name: string
  role: string
  images: string[]
  description?: string
}

export default function WeddingSponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const sponsors: Sponsor[] = [
    {
      id: 9,
      name: "Padrinos de Velación",
      sponsor: "Rosy Jara & Ángel Ramírez",
      role: "Velación",
      images: ["/velacio2.jpeg", "/velacion.jpeg"],
      description: "Luz y guía en nuestro camino juntos.",
    },
    {
      id: 1,
      name: "Padrinos de Anillo",
      sponsor: "Lulu Machain & Samuel López",
      role: "Anillos",
      images: ["/anillos.jpeg", "/anillos2.jpeg"],
      description: "Con su bendición, nuestros anillos simbolizan el amor eterno.",
    },
    {
      id: 2,
      name: "Padrinos de Lazo",
      sponsor: "María Jara & Hugo Navarro",
      role: "Lazo",
      images: ["/lazo.jpeg", "/lazo2.jpeg"],
      description: "Su guía nos une en este lazo sagrado de amor y compromiso.",
    },
    {
      id: 3,
      name: "Madrina de Arras",
      sponsor: "Cuca Jara",
      role: "Arras",
      images: ["/arras.jpeg", "/arras2.jpeg"],
      description: "Su generosidad es el fundamento de nuestro nuevo hogar.",
    },
    {
      id: 5,
      name: "Padrino de Biblia",
      sponsor: "Chuy Jara",
      role: "Biblia",
      images: ["/biblia.jpeg", "/biblia2.jpeg"],
      description: "Su fe nos guía en este camino de bendición.",
    },
    {
      id: 6,
      name: "Padrinos de Cojines",
      sponsor: "Isabel López & Chendo Machain",
      role: "Cojines",
      images: ["/coines.jpeg", "/coines.jpeg"],
      description: "Su apoyo es el soporte de nuestra unión.",
    },
    {
      id: 4,
      name: "Padrinos de Ramo",
      sponsor: "Andrea Pérez & Alex Ramírez",
      role: "Ramo",
      images: ["/ramo.jpeg", "/ramo2.jpeg"],
      description: "Su amor florece en cada pétalo de nuestro ramo nupcial.",
    },
    {
      id: 8,
      name: "Madrina de Brindis",
      sponsor: "Fer González",
      role: "Brindis",
      images: ["/brindis.jpeg", "/brindis2.jpeg"],
      description: "Su cariño será recordado en cada detalle.",
    },
    {
      id: 7,
      name: "Padrino de Música",
      sponsor: "Carlos Razón",
      role: "Musica",
      images: ["/musica.jpeg", "/musica2.jpeg"],
      description: "Que su alegría sea el vino que celebre nuestro amor.",
    },
    {
      id: 10,
      name: "Invitado Especial",
      sponsor: "Fabito",
      role: "Cumpleañero",
      images: ["/cumpleanero.jpeg", "/cumpleanero.jpeg"],
      description: "Celebrando un año más de vida en nuestro día especial.",
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
    
    >
      

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 animate-fade-in-up opacity-100`}>
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-4 w-4 text-[#a8d8f0] mr-3" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#a8d8f0] to-transparent"></div>
            <Sparkles className="h-5 w-5 text-[#8cc9e0] mx-3 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#a8d8f0] to-transparent"></div>
            <Heart className="h-4 w-4 text-[#a8d8f0] ml-3" />
          </div>
          <h2
            className="great-vibes-regular pt-3 text-4xl md:text-5xl font-light mb-4 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #8cc9e0 0%, #a8d8f0 50%, #7ba3c8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 2px 4px rgba(157, 195, 230, 0.1)",
            }}
          >
            Nuestros Padrinos
          </h2>
          <p className="habibi-regular text-lg text-[#7ba3c8]">
            Personas especiales que nos acompañan en este día tan importante
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 animate-fade-in-up opacity-100`}
        >
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.id}
              className="group bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#a8d8f0]/30"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="relative h-78 bg-gradient-to-br from-[#f0f9fd] via-[#f5fbfd] to-[#a8d8f0]/20 overflow-hidden">
                {sponsor.images? (
                  <Image
                    src={sponsor.images[1] || sponsor.images[0]}
                    alt={sponsor.name}
                    fill
                    loading="lazy"
                    quality={80}
                    className=""
                    
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-[#a8d8f0]/40" />
                  </div>
                )}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(157, 195, 230, 0.8) 0%, rgba(157, 195, 230, 0.4) 50%, transparent 100%)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-white/80 rounded-full">
                      <Award className="h-4 w-4 text-[#8cc9e0]" />
                    </div>
                    <span className="habibi-regular text-white font-medium text-shadow">{sponsor.role}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-[#f5fbfd] to-white/80">
                <h3
                  className="great-vibes-regular text-2xl mb-2"
                  style={{
                    background: "linear-gradient(135deg, #8cc9e0 0%, #a8d8f0 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {sponsor.name}
                </h3>
                <h4 className="habibi-regular text-[#7ba3c8] mb-4 italic">{sponsor.sponsor}</h4>
                {sponsor.description && (
                  <p className="habibi-regular text-[#7ba3c8] text-sm leading-relaxed">{sponsor.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
