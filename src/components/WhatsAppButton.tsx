import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { APP_CONTENT } from "../constants";

export function WhatsAppButton() {
  const phoneNumber = APP_CONTENT.footer.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      drag
      dragMomentum={false}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl cursor-grab active:cursor-grabbing"
      title="Contactar por WhatsApp (Arrastra para mover)"
    >
      <MessageCircle className="h-7 w-7 fill-current" />
      <span className="absolute -top-2 -right-2 flex h-5 w-5 animate-bounce items-center justify-center rounded-full bg-red-500 text-[10px] font-bold">
        1
      </span>
    </motion.a>
  );
}
