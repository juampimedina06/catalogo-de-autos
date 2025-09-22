import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const BotonWasap = () => {
    const [phone] = useState("5493513921220"); 
    const [message] = useState("Hola! Quisiera más info 😃");

    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;
  
    return (
        <a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 z-[2000] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
>
  <FaWhatsapp size={28} />
</a>

  )
}

export default BotonWasap