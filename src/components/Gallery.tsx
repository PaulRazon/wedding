"use client"

import { useEffect, useRef, useState } from "react"
import { Camera, Heart, Sparkles } from "lucide-react"
import Image from "next/image"

// Sample image data with different aspect ratios for the masonry effect
const images = [
  { id: 1, src: "/resource-photo-6.jpg", aspect: "aspect-[3/4]" },
  { id: 2, src: "/resource-photo-8.jpg", aspect: "aspect-[4/3]" },
  { id: 3, src: "/resource-photo-9.jpg", aspect: "aspect-square" },
  { id: 4, src: "/resource-photo-10.jpg", aspect: "aspect-[5/4]" },
  { id: 5, src: "/resource-photo-11.jpg", aspect: "aspect-[3/4]" },
  { id: 6, src: "/resource-photo-12.jpg", aspect: "aspect-[4/5]" },
  { id: 7, src: "/resource-photo-5.jpg", aspect: "aspect-[3/4]" },
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
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#5a8aad] to-[#5a8aad]"></div>
            <Camera className="w-6 h-6 text-[#5a8aad] animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-[#5a8aad] to-[#5a8aad]"></div>
          </div>

          <h2 className="great-vibes-regular text-6xl md:text-7xl font-light text-[#5a8aad] mb-4 tracking-wide drop-shadow-md">
            Galería
          </h2>
          <p className="habibi-regular text-lg text-[#a88872] max-w-2xl mx-auto">
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
                className={`relative group break-inside-avoid mb-4 md:mb-6 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#5a8aad]/30 ${image.aspect}`}
              >
                <Image
                  loading="lazy"
                  src={image.src || "/placeholder.svg"}
                  alt={`Wedding photo ${image.id}`}
                  fill
                  quality={80}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const parent = target.parentElement;
                    if (parent) {
                      target.style.display = "none";
                      parent.style.background = "linear-gradient(135deg, #f5f1eb 0%, #e8b4a0 50%, #c19a7f 100%)";
                      parent.classList.add("flex", "items-center", "justify-center");
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
            ))}
          </div>

      
        </div>
      </div>
    </section>
  )
}
