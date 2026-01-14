"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

export default function LoveQuote() {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-[#eae4cc]">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#f8e8d8] rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#e8d5c4] rounded-full opacity-20 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#f5e6d3] rounded-full opacity-30 blur-2xl animate-pulse delay-500" />

        {/* Figuras decorativas florales */}
        <Image
          src="/1.png"
          alt="Decoración floral"
          width={180}
          height={180}
          sizes="(max-width: 768px) 96px, 180px"
          className="absolute -top-4 right-6 w-24 md:w-40 h-auto opacity-70"
        />
        <Image
          src="/2.png"
          alt="Decoración floral"
          width={200}
          height={200}
          sizes="(max-width: 768px) 112px, 200px"
          className="absolute bottom-0 left-4 w-28 md:w-44 h-auto opacity-70"
        />
      </div>

      {/* Flores decorativas flotantes */}
      <div className="absolute top-20 left-10 text-[#d4b5a0] opacity-30 animate-float">
        <Heart className="w-8 h-8 fill-current" />
      </div>
      <div className="absolute bottom-32 right-16 text-[#e8d5c4] opacity-30 animate-float-delayed">
        <Heart className="w-6 h-6 fill-current" />
      </div>
      <div className="absolute top-40 right-24 text-[#c4a88a] opacity-20 animate-float-slow">
        <Heart className="w-5 h-5 fill-current" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Título decorativo */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#d4b5a0]" />
            <Heart className="w-8 h-8 text-[#d4b5a0] fill-[#d4b5a0] animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#d4b5a0]" />
          </div>
        </div>

        {/* Tarjeta principal con el texto */}
        <div className="relative group">
          {/* Resplandor de fondo */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#d4b5a0] via-[#f5e6d3] to-[#d4b5a0] rounded-2xl opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative bg-gradient-to-br from-[#faf6f0]/95 to-[#f8f4ed]/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-[#d4b5a0]/30">
            {/* Comillas decorativas */}
            <div className="absolute -top-4 -left-4 text-6xl text-[#d4b5a0] opacity-30 font-serif">
              {/* Quote */}
              &rdquo;
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-[#d4b5a0] opacity-30 font-serif">
              &ldquo;
            </div>
            {/* Texto romántico */}
            <div className="relative space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-[#5c4a3a] habibi-regular text-center">
                En el pueblo verde de{" "}
                <span className="text-[#b89a7e] font-semibold">Avonlea</span>,
                donde los caminos de tierra se cruzan con los sueños, una niña
                de ojos brillantes llamada{" "}
                <span className="text-[#d4b5a0] font-semibold">Ani</span>{" "}
                encontró su hogar en la imaginación y el corazón de{" "}
                <span className="text-[#d4b5a0] font-semibold">Eduard</span>.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-[#5c4a3a] habibi-regular text-center">
                Sus almas se entrelazaron como las ramas de los árboles en el
                bosque. Eduard le confesó solemnemente:
              </p>

              <div className="my-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5e6d3]/40 to-transparent" />
                <p className="text-xl md:text-2xl great-vibes-regular text-center text-[#b89a7e] font-semibold relative py-4">
                 &rdquo; Eres el objeto de mi afecto &ldquo;
                </p>
              </div>

              <p className="text-lg md:text-xl leading-relaxed text-[#5c4a3a] habibi-regular text-center">
                Y el destino escribió con la tinta de la amistad y el amor un:
              </p>

              {/* Felices para siempre con énfasis */}
              <div className="text-center pt-4">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4b5a0] to-[#f5e6d3] blur-xl opacity-40" />
                  <p className="text-2xl md:text-3xl pinyon-script-regular bg-gradient-to-r from-[#b89a7e] via-[#d4b5a0] to-[#b89a7e] bg-clip-text text-transparent relative">
                    &ldquo;Felices para siempre...&rdquo;
                  </p>
                </div>
              </div>
            </div>
            {/* Decoración inferior */}
            <div className="flex justify-center mt-8 gap-2">
              <Heart className="w-4 h-4 text-[#d4b5a0] fill-[#d4b5a0] animate-pulse" />
              <Heart className="w-5 h-5 text-[#e8d5c4] fill-[#e8d5c4] animate-pulse delay-200" />
              <Heart className="w-4 h-4 text-[#d4b5a0] fill-[#d4b5a0] animate-pulse delay-400" />
            </div>
          </div>
        </div>

        {/* Elementos decorativos inferiores */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d4b5a0] to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#d4b5a0] animate-pulse" />
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#d4b5a0] to-transparent" />
        </div>
      </div>
    </section>
  );
}
