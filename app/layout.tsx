import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from './analytics'
import { WhatsAppFloat } from './components/WhatsAppFloat'

export const metadata: Metadata = {
  title: "NEURANIA - Agentes de IA para tu Negocio | Automatización Inteligente",
  description: "Transformá tu negocio con GPTs personalizados, automatizaciones y agentes AI. Soluciones de IA para educación y PyMEs en Argentina.",
  keywords: "agentes ia, gpt personalizado, automatización, inteligencia artificial, chatbot, neurania",
  openGraph: {
    title: "NEURANIA - Agentes de IA",
    description: "Soluciones eficientes con IA para tu organización",
    url: "https://neurania.online",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body 
      className="antialiased">
      <Analytics />
      <WhatsAppFloat /> 
      {children}

      </body>
    </html>
  );
}

