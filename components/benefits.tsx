import { Cpu, Shield, Zap, BarChart, Globe, Clock } from "lucide-react"

const benefits = [
  {
    icon: <Cpu className="h-10 w-10 text-cyan-400" />,
    title: "Tecnologia Premium, Sem Limites",
    description: "Acesse as ferramentas mais avançadas do mercado digital — sem assinatura mensal.",
  },
  {
    icon: <Shield className="h-10 w-10 text-purple-400" />,
    title: "Liberdade Criativa Total",
    description: "De textos com IA a vídeos com voz realista, tenha tudo na palma da mão.",
  },
  {
    icon: <Zap className="h-10 w-10 text-pink-400" />,
    title: "Velocidade e Eficiência",
    description: "Crie em minutos o que antes levava horas — com desempenho ultrarrápido.",
  },
  {
    icon: <BarChart className="h-10 w-10 text-cyan-400" />,
    title: "Interface Amigável",
    description: "Tudo organizado de forma simples, intuitiva e acessível. Nada de complicação.",
  },
  {
    icon: <Globe className="h-10 w-10 text-purple-400" />,
    title: "Uso Ilimitado",
    description: "Sem restrições, sem planos mensais, sem taxas escondidas.",
  },
  {
    icon: <Clock className="h-10 w-10 text-pink-400" />,
    title: "Suporte Ágil e Direto",
    description: "Tem dúvida? A gente resolve rápido, no seu tempo.",
  },
]

export default function Benefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
        >
          <div className="mb-4 p-3 rounded-full bg-gray-800 inline-block group-hover:bg-gray-800/50 transition-all duration-300">
            {benefit.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
            {benefit.title}
          </h3>
          <p className="text-gray-400">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}

