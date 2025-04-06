"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 3000);
    const hideTimer = setTimeout(() => setShowMessage(false), 10000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {showMessage && (
        <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg animate-bounce transition-all duration-500">
          Oi! Precisa de ajuda? Me chama aqui no WhatsApp! 💬
        </div>
      )}
      <a
        href="https://wa.me/+5519986048155"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-xl"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}
