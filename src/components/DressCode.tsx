"use client"

import { useEffect, useRef, useState } from "react"
import { Shirt, User, Ban, Sparkles } from "lucide-react"

export default function DressCode() {
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

  const suggestedColors = [
    { name: "Amarillo", color: "#cfc272", textColor: "#744210" },
    { name: "Verde", color: "#94d091", textColor: "#22543D" },
    { name: "Rosa", color: "#e584c3", textColor: "#702459" },
    { name: "Lila", color: "#d991fc", textColor: "#44337A" },
    { name: "Naranja", color: "#e89d68", textColor: "#7B341E" },
    { name: "Gris", color: "#718096", textColor: "#2D3748" },
  ]

  return (
    <section
      ref={sectionRef}
      id="vestimenta"
      className="py-20 px-4 bg-gradient-to-br from-[#eae4cc] via-[#f5f0dc] to-[#eae4cc] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#8b7355] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-[#8b7355] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-[#8b7355] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#8b7355] to-transparent"></div>
            <Sparkles className="w-6 h-6 text-[#8b7355]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#8b7355] to-transparent"></div>
          </div>
          <h2 className="great-vibes-regular text-5xl md:text-6xl font-light text-[#5a4a3a] mb-4 tracking-wide">
            Código de Vestimenta
          </h2>
          <p className="habibi-regular text-xl text-[#6b5b4b] max-w-2xl mx-auto">
            Vístete elegante para la ocasión y ayúdanos a crear un ambiente mágico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#d4c5a9] shadow-lg transition-all duration-1000 delay-200 hover:shadow-xl hover:scale-[1.02] ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <User className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="great-vibes-regular text-3xl font-medium text-[#5a4a3a]">Hombres</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-transparent rounded-lg p-4 border-l-4 border-blue-400">
                <Ban className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="habibi-regular text-base text-[#5a4a3a] font-medium mb-2">Color Restringido</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full border-3 border-red-400 shadow-md"></div>
                    <span className="habibi-regular text-sm text-[#6b5b4b]">
                      Evita el color <strong>azul</strong> (nuestro color distintivo)
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-amber-50/50 rounded-lg p-4">
                <Shirt className="w-6 h-6 text-[#8b7355]" />
                <p className="habibi-regular text-sm text-[#6b5b4b]">Traje formal o semi-formal sugerido</p>
              </div>
            </div>
          </div>

          <div
            className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#d4c5a9] shadow-lg transition-all duration-1000 delay-300 hover:shadow-xl hover:scale-[1.02] ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-100 to-purple-200 flex items-center justify-center">
                <Sparkles className="h-7 w-7 text-pink-600" />
              </div>
              <h3 className="great-vibes-regular text-3xl font-medium text-[#5a4a3a]">Mujeres</h3>
            </div>

            <div>
              <h4 className="habibi-regular text-base font-medium text-[#5a4a3a] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#8b7355] rounded-full"></span>
                Colores Sugeridos
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {suggestedColors.map((colorItem, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl w-full aspect-square transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer border-2 border-white"
                    style={{ backgroundColor: colorItem.color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-semibold text-sm drop-shadow-sm transition-transform group-hover:scale-110"
                        style={{ color: colorItem.textColor }}
                      >
                        {colorItem.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/20 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-gradient-to-r from-amber-50/50 to-orange-50/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#d4c5a9] shadow-lg transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center flex-shrink-0">
              <Shirt className="h-8 w-8 text-amber-700" />
            </div>
            <div className="flex-1">
              <h4 className="habibi-regular text-lg font-medium text-[#5a4a3a] mb-2">Recomendaciones Especiales</h4>
              <p className="habibi-regular text-base text-[#6b5b4b] leading-relaxed">
                <strong>Evento al aire libre:</strong> Recomendamos usar tacón grueso o zapatos cómodos. Considera
                llevar un abrigo ligero para la noche, ya que la temperatura puede descender.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`text-center mt-10 transition-all duration-1000 delay-500 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <p className="great-vibes-regular text-2xl text-[#8b7355]">
            ¡Gracias por ayudarnos a hacer de este día algo inolvidable!
          </p>
        </div>
      </div>
    </section>
  )
}
