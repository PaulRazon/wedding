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
        si: "Sí, no me lo perdería",
        no: "Híjole, no voy a poder",
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
      

      <HedgehogDecoration position="bottom-right" size="medium" variant={1} className="hidden lg:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-4 w-4 mr-3" style={{ color: "#a8d8f0" }} />
            <div className="w-12 h-px" style={{ background: "#a8d8f0" }}></div>
            <Heart className="h-5 w-5 mx-3" style={{ color: "#a8d8f0" }} />
            <div className="w-12 h-px" style={{ background: "#a8d8f0" }}></div>
            <Mail className="h-4 w-4 ml-3" style={{ color: "#a8d8f0" }} />
          </div>
          <h2
            className="great-vibes-regular pt-3 text-3xl md:text-4xl font-light mb-4 tracking-wide"
            style={{
              background: "linear-gradient(135deg, #8cc9e0 0%, #a8d8f0 50%, #8cc9e0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 2px 8px rgba(127, 181, 209, 0.15)",
            }}
          >
            Confirmación RSVP
          </h2>
          <p className="habibi-regular text-lg" style={{ color: "#7ba3c8" }}>
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
            border: "2px solid rgba(157, 195, 230, 0.3)",
            boxShadow: "0 8px 32px rgba(127, 181, 209, 0.15)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block habibi-regular text-base font-medium mb-2"
                style={{ color: "#6b8fa3" }}
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
                  border: "2px solid rgba(157, 195, 230, 0.3)",
                  background: "rgba(212, 235, 242, 0.3)",
                  color: "#6b8fa3",
                }}
                placeholder="Tu nombre completo"
              />
            </div>

            {/* Attendance Selection */}
            <div>
              <label
                htmlFor="attendance"
                className="block habibi-regular text-base font-medium mb-2"
                style={{ color: "#6b8fa3" }}
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
                    border: "2px solid rgba(157, 195, 230, 0.3)",
                    background: "rgba(212, 235, 242, 0.3)",
                    color: "#6b8fa3",
                  }}
                >
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="si">Sí, no me lo perdería</SelectItem>
                  <SelectItem value="no">Híjole, no voy a poder</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block habibi-regular text-base font-medium mb-2"
                style={{ color: "#6b8fa3" }}
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
                  border: "2px solid rgba(157, 195, 230, 0.3)",
                  background: "rgba(212, 235, 242, 0.3)",
                  color: "#6b8fa3",
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
                  background: "linear-gradient(135deg, #a8d8f0 0%, #8cc9e0 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 16px rgba(157, 195, 230, 0.3)",
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
              style={{ borderTop: "2px solid rgba(157, 195, 230, 0.3)" }}
            >
              <p className="habibi-regular text-sm" style={{ color: "#7ba3c8" }}>
                Tu confirmación se enviará directamente por WhatsApp a los novios
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
