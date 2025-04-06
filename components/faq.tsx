"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqItems = [
  {
    question: "Esse combo é vitalício mesmo?",
    answer:
      "Sim! Você paga uma única vez e tem acesso vitalício às ferramentas inclusas.",
  },
  {
    question: "Vai aumentar de preço?",
    answer:
      "Sim. Essa condição é exclusiva para os primeiros 50 acessos. Depois será por assinatura de R$49,90/mês.",
  },
  {
    question: "Preciso instalar algo?",
    answer:
      "Sim, mas é super simples! Você vai precisar instalar o GoLogin, uma ferramenta leve e segura que permite acessar as plataformas de forma organizada e sem riscos. Em poucos cliques, tudo estará pronto pra você começar a usar.",
  },
  {
    question: "Tem garantia?",
    answer:
      "Sim! Se você não curtir, pode pedir reembolso dentro de 7 dias.",
  },
  {
    question: "Tem suporte se eu tiver dificuldade?",
    answer:
      "Sim. Nosso suporte é simples, direto e te ajuda em qualquer dúvida.",
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900 hover:border-purple-500/30 transition-all duration-300"
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium text-white">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-purple-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-400" />
            )}
          </button>
          <div
            className={`px-4 overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-400">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

