"use client";

import { Flower2, Wine, Mail } from "lucide-react";
import Image from "next/image";

export default function PajecitosSection() {
  return (
    <section className="relative py-16 px-4 bg-[#eae4cc] overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#e8b4a0] blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#f4d9da] blur-3xl animate-float-slow delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-[#c19a7f] blur-3xl animate-float-slow delay-2000" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Pajecitos */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg">
            <Image
              src={"/wedding-card.png"}
              alt="Flower Icon"
              width={32}
              height={32}
            />
          </div>
          <h3
            className="text-4xl font-serif text-[#8b7355] mb-6"
            style={{ fontFamily: "Edwardian Script ITC, cursive" }}
          >
            Pajecitos
          </h3>
          <div className="space-y-2">
            <p className="text-lg text-[#a88872] font-medium">Matías</p>
            <p className="text-lg text-[#a88872] font-medium">Sebastián</p>
            <p className="text-lg text-[#a88872] font-medium">Catalina</p>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="flex items-center justify-center my-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c19a7f] to-transparent" />
          <div className="mx-4 w-2 h-2 rounded-full bg-[#e8b4a0]" />
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c19a7f] to-transparent" />
        </div>

        {/* Pajes */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg">
            <Image
              src={"/decoration.png"}
              alt="Decoration Icon"
              width={32}
              height={32}
            />
          </div>
          <h3
            className="text-4xl font-serif text-[#8b7355] mb-6"
            style={{ fontFamily: "Edwardian Script ITC, cursive" }}
          >
            Pajes
          </h3>
          <div className="space-y-2">
            <p className="text-lg text-[#a88872] font-medium">Ximena</p>
            <p className="text-lg text-[#a88872] font-medium">Carito</p>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="flex items-center justify-center my-10">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c19a7f] to-transparent" />
          <div className="mx-4 w-2 h-2 rounded-full bg-[#e8b4a0]" />
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#c19a7f] to-transparent" />
        </div>

        {/* Embajadores erizo */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg">
            <Image
              src={"/wedding-invitation.png"}
              alt="Hedgehog Icon"
              width={32}
              height={32}
            />
          </div>
          <h3
            className="text-4xl font-serif text-[#8b7355] mb-6"
            style={{ fontFamily: "Edwardian Script ITC, cursive" }}
          >
            Embajadores erizo
          </h3>
          <div className="space-y-2">
            <p className="text-lg text-[#a88872] font-medium">Adamaris</p>
            <p className="text-lg text-[#a88872] font-medium">Erick</p>
          </div>
        </div>
      </div>
    </section>
  );
}
