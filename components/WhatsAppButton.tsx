import React from 'react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919680494400"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 left-5 z-50 bg-[#25D366] text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <img
  width="48"
  height="48"
  src="icons8-whatsapp-96.png"
  alt="whatsapp"
/>
    </a>
  );
}
