import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import WhatsappButton from "@/components/WhatsappButton";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FyConex - O Futuro da Tecnologia",
  description: "Transforme sua experiência digital com nossa solução inovadora de ponta a ponta",
    generator: 'sQuiiter'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <WhatsappButton />
      </body>
    </html>
  )
}



import './globals.css'