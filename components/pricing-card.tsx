"use client"

import { useState, useEffect } from "react"
import { Check } from "lucide-react"

export default function PricingCard() {
  const [isHovered, setIsHovered] = useState(false)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="relative max-w-md w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border */}
      <div
        className="absolute -inset-0.5 rounded-2xl bg-transparent z-0 overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0.7, transition: "opacity 0.3s ease" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
          style={{
            transform: `rotate(${rotation}deg)`,
            transformOrigin: "center",
            scale: isHovered ? "1.5" : "1",
            transition: "scale 0.5s ease",
          }}
        />
      </div>

      {/* Card content */}
      <div className="bg-gray-900 p-8 rounded-xl relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Acesso Vitalício – Oferta Relâmpago</h3>
          <div className="flex justify-center items-baseline">
            <span className="text-5xl font-extrabold text-white">R$19,70</span>
            <span className="text-gray-400 ml-1">/Vitalício</span>
          </div>
        </div>

        <ul className="space-y-4 mb-8">
          {[
            "ChatGPT 4.0 (com navegação)",
            "Perplexity AI",
            "Claude 3.5",
            "Midjourney & Leonardo AI (imagens surrealistas)",
            "DreamFace e Voice Clone (vídeo + voz)",
            "Gamma.App, Copy Generator, Notion AI",
            "Prime Voice (voz realista)",
            "Canva PRO, CapCut PRO, Freepik, Envato Elements",
            "E MUITO mais...",
          ].map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-cyan-400 mr-2 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
            isHovered
              ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]"
              : "bg-purple-600 text-white"
          }`}
        >
          GARANTIR MEU ACESSO AGORA
        </button>

        <p className="text-center text-gray-400 text-sm mt-4">🔐 Vitalício | 🎁 Sem mensalidade | 🕒 Limitado aos 50 primeiros
        </p>
      </div>
    </div>
  )
}

