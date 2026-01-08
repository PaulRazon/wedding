"use client"

import { useEffect, useRef, useState } from "react"
import { Ban, Clock, Camera, Sparkles, Heart } from "lucide-react"

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
      className="py-20 px-4 bg-[#eae4cc]  relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#b8d8ea]/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#9dc3e6]/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#c3e5f3]/40 rounded-full blur-2xl animate-bounce-slow"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6" aria-hidden="true">
            <Sparkles className="h-4 w-4 text-[#9dc3e6] mr-3 animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#9dc3e6] to-transparent"></div>
            <Heart className="h-6 w-6 text-[#7fb5d1] mx-3 animate-bounce-slow" />
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#9dc3e6] to-transparent"></div>
            <Sparkles className="h-4 w-4 text-[#9dc3e6] ml-3 animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
          <h2 className="great-vibes-regular text-5xl md:text-6xl py-1 font-light mb-6 tracking-wide text-[#6b5d54] drop-shadow-lg">
            Código de vestimenta
          </h2>
          <p className="habibi-regular text-lg text-[#5a4a3a] max-w-3xl mx-auto leading-relaxed mb-4">
            Viste formal. Además el color distintivo de nuestra boda es el{" "}
            <span className="font-semibold text-blue-700">azul</span>, por lo que te pedimos no utilizarlo.
          </p>
          <p className="habibi-regular text-lg text-[#5a4a3a] max-w-3xl mx-auto leading-relaxed">
            Nuestro evento es en un jardín al aire libre, te recomendamos usar tacón grueso y llevar abrigo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div
            className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#b8d8ea]/60 shadow-2xl shadow-[#9dc3e6]/20 transition-all duration-1000 delay-200 hover:shadow-3xl hover:scale-[1.02] ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="mb-6 text-center">
              <h3 className="great-vibes-regular text-4xl font-medium text-[#5a8aad] mb-4">Mujeres</h3>
              <p className="habibi-regular text-base text-[#5a4a3a]">
                Te sugerimos usar tonos pastel en amarillo, verde, rosa, lila, anaranjado o gris.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {suggestedColors.map((colorItem, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-full w-full aspect-square transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer border-2 border-white"
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

          <div
            className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#b8d8ea]/60 shadow-2xl shadow-[#9dc3e6]/20 transition-all duration-1000 delay-300 hover:shadow-3xl hover:scale-[1.02] ${
              isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="text-center">
              <h3 className="great-vibes-regular text-4xl font-medium text-[#5a8aad] mb-6">Hombres</h3>

              <div className="flex items-start gap-3 bg-[#f0f8fc]/60 rounded-lg p-6 border-2 border-[#b8d8ea]">
                <Ban className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <p className="habibi-regular text-base text-[#5a4a3a] leading-relaxed">
                    Solo te pedimos que evites vestir traje o camisa{" "}
                    <span className="font-semibold text-blue-700">azul</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#b8d8ea]/60 shadow-2xl shadow-[#9dc3e6]/20 transition-all duration-1000 delay-400 mb-8 hover:shadow-3xl hover:scale-[1.02] ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9dc3e6] to-[#7fb5d1] rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#f0f8fc] to-[#e8f3f8] flex items-center justify-center flex-shrink-0 shadow-md">
                <Clock className="h-8 w-8 text-[#5a8aad]" />
              </div>
            </div>
            <div>
              <h4 className="great-vibes-regular text-4xl font-medium text-[#5a8aad] mb-4">Llega puntual</h4>
              <p className="habibi-regular text-base text-[#5a4a3a] leading-relaxed max-w-3xl mx-auto">
               Elegimos un horario con la luz más bonita para capturar momentos inolvidables a la luz del atardecer.
              </p>
              <p className="great-vibes-regular text-2xl text-[#5a8aad] mt-3">
                Llegar temprano será parte de la magia.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 border-2 border-[#b8d8ea]/60 shadow-2xl shadow-[#9dc3e6]/20 transition-all duration-1000 delay-500 hover:shadow-3xl hover:scale-[1.02] ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9dc3e6] to-[#7fb5d1] rounded-full blur-xl opacity-40 animate-pulse"></div>
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#f0f8fc] to-[#e8f3f8] flex items-center justify-center flex-shrink-0 shadow-md">
                <Camera className="h-8 w-8 text-[#5a8aad]" />
              </div>
            </div>
            <div>
              <h4 className="great-vibes-regular text-4xl font-medium text-[#5a8aad] mb-4">Momentos mágicos</h4>
              <p className="habibi-regular text-base text-[#5a4a3a] leading-relaxed max-w-3xl mx-auto mb-4">
                Nos llenaría el alma que capturen momentos desde su mirada. Si deciden grabar o tomar fotos, sólo
                háganlo sin obstruir el trabajo del fotógrafo.
              </p>
              <p className="habibi-regular text-base text-[#5a4a3a] leading-relaxed max-w-3xl mx-auto mb-4">
                No olvides enviarnos las fotos y videos que hayas tomado; en la recepción te compartiremos un enlace
                para subirlas. Nos encantará ver cómo viviste nuestro gran día.
              </p>
              <p className="habibi-regular text-base text-[#5a4a3a] leading-relaxed max-w-3xl mx-auto">
                Sabemos que también te vas a ver espectacular, por lo que si deseas una foto por parte del fotógrafo, no dudes en pedírsela si está desocupado. Es un servicio gratis; después te enviamos tu foto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
