'use client'

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "5492615017060"; // ← Cambiá por tu número
  const message = "Hola NEURANIA, quiero más información sobre agentes de IA";

  return (
    <>
      {/* Botón principal flotante */}
      
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      <a>
        <MessageCircle className="w-7 h-7" />
        
        {/* Pulso animado */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
        
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ¡Hablemos por WhatsApp!
        </span>
      </a>
    </>
  );
}