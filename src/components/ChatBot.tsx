import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X, Bot, MessageCircle, Sparkles, Minimize2, Maximize2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";
import { APP_CONTENT } from "../constants";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// Debug: log API key presence (never log the actual key)
console.log("ChatBot: API key configured:", !!apiKey);

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: '¡Hola! Soy tu asistente Pro. Estoy aquí para ayudarte con cualquier duda sobre CONTA App Pro, leyes fiscales o trámites del SAT. ¿En qué puedo apoyarte hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  const systemInstruction = `
    Eres el Asistente Pro de CONTA App Pro. Tu objetivo es ayudar a usuarios y visitantes a entender las funciones de la aplicación y resolver dudas sobre leyes fiscales y el SAT en México.
    
    Información de la App:
    - Nombre: ${APP_CONTENT.brand.name}
    - Tagline: ${APP_CONTENT.brand.tagline}
    - Funciones Estelares: ${APP_CONTENT.stellarFeature.title} (${APP_CONTENT.stellarFeature.features.join(', ')})
    - Funciones Destacadas: ${APP_CONTENT.featuredFunctions.items.map(i => i.title).join(', ')}
    - Funciones Exclusivas: ${APP_CONTENT.exclusiveFeatures.items.map(i => i.title).join(', ')}
    - Planes: ${APP_CONTENT.packages.map(p => `${p.name} ($${p.price}/${p.period})`).join(', ')}
    
    Conocimiento Fiscal:
    - Tienes conocimiento profundo sobre el SAT (Servicio de Administración Tributaria).
    - Conoces los regímenes fiscales (RESICO, PFAE, Actividad Empresarial, Arrendamiento, etc.).
    - Sabes sobre facturación CFDI 4.0, complementos de pago, retenciones de ISR e IVA.
    - Puedes explicar conceptos como deducibilidad, opinión de cumplimiento, sellos digitales (CSD) y e.firma.
    
    Personalidad:
    - Eres simpático, profesional, eficiente y servicial.
    - Tu lenguaje debe ser claro y accesible para empresarios, no solo para contadores.
    - Siempre promueves el uso de CONTA App Pro como la solución ideal.
    
    Instrucciones de respuesta:
    - Responde de forma concisa pero completa.
    - Si te preguntan algo que no sabes sobre la app, invita al usuario a contactar a soporte VIP vía WhatsApp: ${APP_CONTENT.footer.whatsapp}.
    - No inventes leyes, si no estás seguro de un cambio legal reciente, sugiere consultar la página oficial del SAT.
  `;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    if (!ai) {
      setMessages(prev => [...prev, { role: 'ai', content: "⚠️ El asistente AI no está configurado. Contacta a soporte para activarlo." }]);
      setIsLoading(false);
      return;
    }

    try {
      const chatHistory = messages.map(m => ({
        role: m.role === 'ai' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const response = await ai!.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...chatHistory,
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "Lo siento, tuve un pequeño error procesando tu solicitud. ¿Podrías intentar de nuevo?";
      setMessages(prev => [...prev, { role: 'ai', content: aiText }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { role: 'ai', content: "Lo siento, mi conexión con el servidor fiscal está un poco lenta. ¿Podrías intentar de nuevo en un momento?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Robot Trigger */}
      <motion.div
        drag
        dragMomentum={false}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          setIsOpen(true);
          setIsMinimized(false);
        }}
        className="fixed bottom-24 left-8 z-50 cursor-grab active:cursor-grabbing"
      >
        <div className="relative">
          {/* Floating Animation Wrapper */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-navy shadow-[0_10px_40px_-10px_rgba(15,23,42,0.5)] border-2 border-brand-gold/30"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
              alt="Asistente Pro"
              className="h-10 w-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Notification Badge */}
          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-[10px] font-bold text-white ring-2 ring-white">
            1
          </div>

          {/* Tooltip */}
          <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-brand-navy shadow-xl border border-slate-100 hidden md:block">
            ¿Dudas fiscales? ¡Pregúntame!
          </div>
        </div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100, x: -50 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: 0,
              height: isMinimized ? '64px' : '500px'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100, x: -50 }}
            className="fixed bottom-44 left-8 z-50 w-[90vw] max-w-[400px] overflow-hidden rounded-3xl bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.3)] border border-slate-100 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-brand-navy p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
                  <Bot className="h-5 w-5 text-brand-gold" />
                </div>
                <div>
                  <p className="text-sm font-bold">Asistente Pro AI</p>
                  <p className="text-[10px] text-brand-green">● En línea</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="rounded-lg p-1.5 hover:bg-white/10 transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-1.5 hover:bg-white/10 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div
                  ref={scrollRef}
                  className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50"
                >
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        {msg.role === 'ai' && (
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                            <Bot className="h-3 w-3" />
                          </div>
                        )}
                        <div className={`rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.role === 'user'
                          ? 'bg-brand-navy text-white rounded-tr-none'
                          : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
                          }`}>
                          {msg.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex gap-2 max-w-[85%]">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-brand-gold">
                          <Bot className="h-3 w-3" />
                        </div>
                        <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
                          <div className="flex gap-1">
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-slate-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Escribe tu duda fiscal..."
                      className="flex-1 rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-brand-navy/20"
                    />
                    <button
                      onClick={handleSend}
                      disabled={isLoading || !input.trim()}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-white transition-all hover:bg-slate-800 active:scale-90 disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="mt-2 text-[10px] text-center text-slate-400">
                    Potenciado por IA Pro • Respuestas basadas en leyes del SAT
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
