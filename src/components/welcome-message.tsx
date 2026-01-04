"use client"

import { Sparkles, Gift, Wine, Church, Cake, Heart } from "lucide-react"

export default function WelcomeMessage() {
  return (
    <section className="relative py-20 px-4 bg-[#eae4cc] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mariposas */}
        <div className="absolute top-10 left-[15%] opacity-20 animate-float">
          <Sparkles className="w-12 h-12 text-[#c19a7f]" />
        </div>
        <div className="absolute top-20 left-[10%] opacity-15 animate-float-slow">
          <Sparkles className="w-8 h-8 text-[#c19a7f]" />
        </div>
        <div className="absolute top-32 left-[12%] opacity-10 animate-float">
          <Sparkles className="w-6 h-6 text-[#c19a7f]" />
        </div>

        {/* Iconos decorativos - Lado derecho */}
        <div className="absolute top-16 right-[15%] opacity-15 animate-float-slow">
          <Church className="w-16 h-16 text-[#a88872]" />
        </div>
        <div className="absolute top-32 right-[10%] opacity-20 animate-float">
          <Gift className="w-12 h-12 text-[#c19a7f]" />
        </div>
        <div className="absolute top-48 right-[18%] opacity-15 animate-float-slow">
          <Wine className="w-14 h-14 text-[#a88872]" />
        </div>
        <div className="absolute bottom-32 right-[12%] opacity-20 animate-float">
          <Cake className="w-16 h-16 text-[#c19a7f]" />
        </div>
        <div className="absolute bottom-20 right-[20%] opacity-15 animate-float-slow">
          <Heart className="w-10 h-10 text-[#e8b4a0]" />
        </div>

        {/* Iconos decorativos - Lado izquierdo inferior */}
        <div className="absolute bottom-32 left-[15%] opacity-15 animate-float">
          <Wine className="w-14 h-14 text-[#a88872]" />
        </div>
        <div className="absolute bottom-20 left-[10%] opacity-20 animate-float-slow">
          <Gift className="w-12 h-12 text-[#c19a7f]" />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-lg border border-[#e8b4a0]/30">
          {/* Título */}
          <h2 className="great-vibes-regular text-4xl md:text-5xl font-serif text-center mb-8 bg-gradient-to-r from-[#a88872] via-[#c19a7f] to-[#a88872] bg-clip-text text-transparent tracking-wide">
            Queridas Almas Luminosas
          </h2>

          {/* Texto */}
          <p className="text-lg md:text-xl text-[#5a4a3a] leading-relaxed text-center font-light">
            Estamos muy felices de dar este paso en nuestra vida y hoy queremos compartir nuestra alegría junto a
            ustedes. Por eso hemos elegido a las personas más cercanas en nuestra vida. ¡Sería un gusto tenerte en
            nuestro gran día!
          </p>
        </div>
      </div>

      {/* Elementos decorativos adicionales en las esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#e8b4a0]/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#c19a7f]/10 to-transparent rounded-full blur-2xl"></div>
    </section>
  )
}
