"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

// Sample image data with different aspect ratios for the masonry effect
const images = [
  { id: 1, src: "/resource-photo-1.jpg", aspect: "aspect-[3/4]" },
  { id: 2, src: "/resource-photo-2.jpg", aspect: "aspect-[4/3]" },
  { id: 3, src: "/resource-photo-3.jpg", aspect: "aspect-square" },
  { id: 4, src: "/resource-photo-4.jpg", aspect: "aspect-[5/4]" },
  { id: 5, src: "/resource-photo-5.jpg", aspect: "aspect-[3/4]" },
  { id: 6, src: "/resource-photo-6.jpg", aspect: "aspect-[4/5]" },
]

// Shuffle the images for a more dynamic layout
const shuffledImages = [...images].sort(() => Math.random() - 0.5)

export default function Gallery() {
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
      id="galeria"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-[#e8b4a0]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-[#f4d9da]/10 rounded-full blur-3xl animate-float-delayed"></div>

        {/* Floating decorations */}
        <Heart className="absolute top-10 left-10 w-4 h-4 text-[#e8b4a0]/30 animate-pulse" />
        <Sparkles className="absolute top-32 right-1/4 w-5 h-5 text-[#f4d9da]/25 animate-bounce-slow" />
        <Heart className="absolute bottom-32 right-10 w-4 h-4 text-[#c19a7f]/30 animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#e8b4a0] to-[#e8b4a0]"></div>
            <Camera className="w-6 h-6 text-[#e8b4a0] animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-[#e8b4a0] to-[#e8b4a0]"></div>
          </div>

          <h2 className="great-vibes-regular text-6xl md:text-7xl font-light text-[#6b5d54] dark:text-[#e8dfd5] mb-4 tracking-wide drop-shadow-md">
            Galería
          </h2>
          <p className="habibi-regular text-lg text-[#a88872] dark:text-[#c7b299] max-w-2xl mx-auto">
            Momentos especiales que hemos compartido juntos
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
            {shuffledImages.map((image) => (
              <div
                key={image.id}
                className={`relative group break-inside-avoid mb-4 md:mb-6 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#e8b4a0]/30 ${image.aspect}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    loading="lazy"
                    src={image.src || "/placeholder.svg"}
                    alt={`Wedding photo ${image.id}`}
                    fill
                    quality={80}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = "none"
                      const parent = target.parentElement
                      if (parent) {
                        parent.style.background = "linear-gradient(135deg, #f5f1eb 0%, #e8b4a0 50%, #c19a7f 100%)"
                        parent.classList.add("flex", "items-center", "justify-center")
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b5d54]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Heart className="w-5 h-5 mb-1 fill-[#f4d9da]" />
                      <span className="text-sm font-medium habibi-regular">Nuestro momento</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Note */}
          <div className="text-center mt-12 pt-8 border-t border-[#e8b4a0]/30 dark:border-[#a88872]/30">
            <Sparkles className="w-6 h-6 text-[#e8b4a0] mx-auto mb-3 animate-pulse" />
            <p className="habibi-regular text-base text-[#a88872] dark:text-[#c7b299] italic">
              Próximamente compartiremos nuestras fotos más especiales
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
