"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Story {
  id: number
  title: string
  image: string
  text: string
  emoji: string
}

export default function LoveStoryCard() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFullStory, setShowFullStory] = useState(false)
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0)
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

  const stories: Story[] = [
    {
      id: 1,
      title: "Un amor bonito y eterno",
      emoji: "📖",
      image: "/resource-photo-6.jpg",
      text:  "Comprobamos que el amor llega a tu vida de muchas maneras y se queda cuando dos almas están preparadas en el nombre de Dios. Así nos sucedió. Nos conocíamos de vista y de nombre en secundaria y preparatoria, pero fue hasta en nivel universitario que todo se acomodó para que lo nuestro fluyera. Dios nos permitió adquirir esas cualidades que tanto buscábamos en ese alguien, eso lo hizo mágico y dio paso a nuestra química. El 05 de abril de 2018 tuvimos una bella cita romántica en una cafetería, donde Eduard declaró su amor con un ramo de rosas y palabras bonitas, ese día iniciamos nuestro noviazgo llenos de ilusiones y emociones, desde entonces el 05 de cada mes es un genuino homenaje a nuestro amor y ni se diga los 05 de abril, pues no hay aniversario que no celebremos llenos de aun más emoción que el primer día. Desde hace años somos un equipo y sabíamos que queríamos compartir la vida, juntos, solo que Eduard buscaba el momento especial, después de tanto pensarlo, vaya que tanto, el 05 de octubre de 2024 me propuso matrimonio, honrando el estilo de nuestra relación: romántica, mágica y llena de emoción, pues así fue esa cita, con el factor sorpresa de que yo no sabía que era nuestro gran día. Hubo lágrimas de felicidad, risas, miradas llenas de amor y una fuerte conexión de anhelos. Juntos iniciamos el proceso de boda, disfrutando cada momento, convirtiéndonos en los wedding planners que mejor comprendían el concepto mágico de nuestro amor. Hoy estamos tan felices de unir nuestras vidas, de celebrar el amor bonito y eterno que nos tenemos.",
    }
  ]

  const currentStory = stories[currentStoryIndex]

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length)
    setShowFullStory(false)
  }

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + stories.length) % stories.length)
    setShowFullStory(false)
  }

  const goToStory = (index: number) => {
    setCurrentStoryIndex(index)
    setShowFullStory(false)
  }

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-[#eae4cc] relative flex justify-center overflow-hidden">
      <button
        onClick={prevStory}
        className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
        aria-label="Historia anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      <button
        onClick={nextStory}
        className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/80 hover:bg-white shadow-lg transition-all hover:scale-110"
        aria-label="Siguiente historia"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Love Story Card */}
      <article
        className={`transition-all duration-1000 max-w-4xl w-full rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden mx-auto ${
          isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
        }`}
      >
        {/* Decorative Background Pattern */}
        <section className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-4 w-12 h-12 border border-white/15 rounded-full"></div>
        </section>

        {/* Title */}
        <section className="text-center mb-8 relative z-10">
          <h2 className="great-vibes-regular text-4xl md:text-5xl mb-2 tracking-wide">Páginas de dos corazones entrelazados</h2>
          <div className="flex items-center justify-center mt-4">
            <div className="w-8 h-px bg-[#8B7355]"></div>
            <Heart className="h-4 w-4 mx-3 text-[#8B7355]" />
            <div className="w-8 h-px bg-[#8B7355]"></div>
          </div>
        </section>

        <div className="flex justify-center gap-2 mb-6 relative z-10">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => goToStory(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentStoryIndex ? "bg-[#8B7355] w-8" : "bg-[#8B7355]/30 hover:bg-[#8B7355]/50"
              }`}
              aria-label={`Ir a historia ${index + 1}`}
            />
          ))}
        </div>

        {/* Story Image */}
        <section className="mb-8 relative z-10">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              loading="lazy"
              src={currentStory.image || "/placeholder.svg"}
              alt={currentStory.title}
              quality={80}
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Story Content */}
        <section className="relative z-10">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-full">
               

                <div className="relative">
                  <p
                    className={`habibi-regular text-sm md:text-base leading-relaxed text-gray-700 ${
                      !showFullStory ? "line-clamp-[8] md:line-clamp-[6]" : ""
                    }`}
                  >
                    {currentStory.text}
                  </p>

                  {!showFullStory && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#eae4cc] backdrop-blur-[2px] flex items-end justify-center pb-4">
                      <button
                        onClick={() => setShowFullStory(true)}
                        className="group flex items-center gap-2 bg-[#8B7355] hover:bg-[#6B5335] text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl habibi-regular"
                      >
                        <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                        <span>Leer más</span>
                        <BookOpen className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      </button>
                    </div>
                  )}
                </div>

                {showFullStory && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowFullStory(false)}
                      className="group flex items-center gap-2 bg-[#8B7355]/20 hover:bg-[#8B7355]/30 text-[#8B7355] border border-[#8B7355]/30 hover:border-[#8B7355]/50 px-6 py-3 rounded-full transition-all duration-300 habibi-regular"
                    >
                      <span>Cerrar historia</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

       
      </article>
    </section>
  )
}
