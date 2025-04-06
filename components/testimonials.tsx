import { Star } from "lucide-react"

const testimonials = [
  {
    name: "João S.",
    role: "Trabalhador Autônomo",
    image: "/joaos.jpeg?height=80&width=80",
    content:
      "Com esse combo, consegui montar projetos inteiros em horas. Economia absurda de tempo e dinheiro!",
    stars: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Estudante de Escola Pública",
    image: "/carlosmendes.jpeg?height=80&width=80",
    content:
      "Paguei R$19 e recebi ferramentas que custariam MILHARES. Mudou meu jogo.",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    role: "Mãe Solo Empreendedora",
    image: "/marianacosta.jpeg?height=80&width=80",
    content:
      "Simplesmente genial. Uso pra conteúdo, vendas e automações. Tudo no mesmo lugar.",
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
        >
          <div className="flex items-center mb-4">
            {Array(testimonial.stars)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
          </div>
          <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-bold text-white">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

