import { ChevronDown } from "lucide-react"
import Benefits from "@/components/benefits"
import Testimonials from "@/components/testimonials"
import Faq from "@/components/faq"
import PricingCard from "@/components/pricing-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 z-0" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 z-0" />

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
            O FUTURO DA PRODUTIVIDADE DIGITAL COMEÇA AQUI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforme sua rotina com as ferramentas mais poderosas de IA, design, vídeo, voz e automação — tudo em um só lugar, por um valor simbólico.
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-medium hover:shadow-[0_0_15px_rgba(124,58,237,0.8)] transition-all duration-300">
              CONTINUE LENDO
            </button>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              Benefícios Exclusivos
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <Benefits />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              O Que Nossos Clientes Dizem
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <Testimonials />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Perguntas Frequentes
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Faq />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10 z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Invista no Seu Potencial
            </span>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
          </h2>
          <div className="flex justify-center">
            <PricingCard />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 FyConex. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

