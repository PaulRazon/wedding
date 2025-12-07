"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Send, Heart, Mail } from "lucide-react"
import HedgehogDecoration from "./HedgehogDecoration"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

export default function RSVP() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    attendance: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.attendance) {
      alert("Por favor completa todos los campos requeridos")
      return
    }

    const attendanceText =
      {
        solo: "Asistiré solo/a",
        acompanante: "Asistiré con acompañante",
        no: "No podré asistir",
      }[formData.attendance] || formData.attendance

    const message = `¡Hola! Soy ${formData.name}. 

${attendanceText} a su boda el 11 de Abril del 2026.

${formData.message ? `Mensaje: ${formData.message}` : ""}

¡Felicidades por su compromiso!

---
Detalles del evento:
📅 Sábado, 11 de Abril del 2026
⛪ Ceremonia: 4:00 PM - Parroquia de San Cayetano, Xalisco
🎉 Recepción: 5:30 PM - La Muralla Jardín Campestre, Xalisco
📍 https://share.google/0ANQdueTDcglVTguH`

    const whatsappUrl = `https://wa.me/523111064708?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleInputChange = (e: string, field: string) => {
    setFormData({
      ...formData,
      [field]: e,
    })
  }

  return (
    <section
      ref={sectionRef}
      id="rsvp"
      className="py-16 px-4 relative overflow-hidden"
     
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-32 right-10 w-36 h-36 rounded-full opacity-20 animate-float"
          style={{ background: "radial-gradient(circle, #f4d9da 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 left-16 w-44 h-44 rounded-full opacity-15 animate-float-delayed"
          style={{ background: "radial-gradient(circle, #e8b4a0 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-28 h-28 rounded-full opacity-10 animate-float-slow"
          style={{ background: "radial-gradient(circle, #c19a7f 0%, transparent 70%)" }}
        />
      </div>

      <HedgehogDecoration position="bottom-right" size="medium" variant={1} className="hidden lg:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-4 w-4 mr-3" style={{ color: "#e8b4a0" }} />
            <div className="w-12 h-px" style={{ background: "#e8b4a0" }}></div>
            <Heart className="h-5 w-5 mx-3" style={{ color: "#e8b4a0" }} />
            <div className="w-12 h-px" style={{ background: "#e8b4a0" }}></div>
            <Mail className="h-4 w-4 ml-3" style={{ color: "#e8b4a0" }} />
          </div>
          <h2
            className="great-vibes-regular text-3xl md:text-4xl font-light mb-4 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #c19a7f 0%, #e8b4a0 50%, #c19a7f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 8px rgba(200, 154, 127, 0.15)",
            }}
          >
            Confirmación RSVP
          </h2>
          <p className="habibi-regular text-lg" style={{ color: "#a88872" }}>
            Por favor confirma tu asistencia
          </p>
        </div>

        {/* RSVP Form */}
        <div
          className={`rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-1000 delay-300 relative ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            border: "2px solid rgba(232, 180, 160, 0.3)",
            boxShadow: "0 8px 32px rgba(200, 154, 127, 0.15)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block habibi-regular text-base font-medium mb-2"
                style={{ color: "#6b5447" }}
              >
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e.target.value, "name")}
                required
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 habibi-regular text-base focus:outline-none focus:ring-2"
                style={{
                  border: "2px solid rgba(232, 180, 160, 0.3)",
                  background: "rgba(253, 232, 233, 0.3)",
                  color: "#6b5447",
                }}
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Attendance Selection */}
            <div>
              <label
                htmlFor="attendance"
                className="block habibi-regular text-base font-medium mb-2"
                style={{ color: "#6b5447" }}
              >
                Confirmación de asistencia *
              </label>
              <Select
                name="attendance"
                value={formData.attendance}
                required
                onValueChange={(value) => handleInputChange(value, "attendance")}
              >
                <SelectTrigger
                  style={{
                    border: "2px solid rgba(232, 180, 160, 0.3)",
                    background: "rgba(253, 232, 233, 0.3)",
                    color: "#6b5447",
                  }}
                >
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="solo">Asistiré solo/a</SelectItem>
                  <SelectItem value="acompanante">Asistiré con acompañante</SelectItem>
                  <SelectItem value="no">No podré asistir</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block habibi-regular text-base font-medium mb-2"
                style={{ color: "#6b5447" }}
              >
                Mensaje (opcional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => handleInputChange(e.target.value, "message")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg transition-all duration-300 habibi-regular text-base resize-none focus:outline-none focus:ring-2"
                style={{
                  border: "2px solid rgba(232, 180, 160, 0.3)",
                  background: "rgba(253, 232, 233, 0.3)",
                  color: "#6b5447",
                }}
                placeholder="Escribe un mensaje especial para los novios..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full habibi-regular text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #e8b4a0 0%, #d4a088 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(232, 180, 160, 0.3)",
                }}
              >
                <MessageCircle className="h-5 w-5" />
                Enviar por WhatsApp
                <Send className="h-4 w-4" />
              </button>
            </div>

            {/* Info Text */}
            <div
              className="text-center pt-4 rounded-lg p-3"
              style={{ borderTop: "2px solid rgba(232, 180, 160, 0.3)" }}
            >
              <p className="habibi-regular text-sm" style={{ color: "#a88872" }}>
                Tu confirmación se enviará directamente por WhatsApp a los novios
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
