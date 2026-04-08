import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, ChevronLeft, CheckCircle2, Sparkles, ShieldCheck, BarChart3, Users } from "lucide-react";
import React, { useState } from "react";
import { APP_CONTENT } from "../constants";

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    packageId: number;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "¿Cuál es la etapa actual de tu negocio?",
    options: [
      { text: "Emprendimiento o negocio nuevo", packageId: 1 },
      { text: "Operación constante y establecida", packageId: 2 },
      { text: "En crecimiento acelerado", packageId: 4 },
      { text: "Empresa consolidada con múltiples áreas", packageId: 5 },
    ],
  },
  {
    id: 2,
    text: "¿Cuál es tu mayor reto financiero hoy?",
    options: [
      { text: "Poner orden y entender mis ingresos/egresos", packageId: 1 },
      { text: "Controlar la cobranza y el flujo de efectivo diario", packageId: 2 },
      { text: "Evitar riesgos con el SAT y calcular mis impuestos", packageId: 3 },
      { text: "Tomar decisiones basadas en datos y rentabilidad", packageId: 4 },
      { text: "Automatización total y dirección inteligente", packageId: 5 },
    ],
  },
  {
    id: 3,
    text: "¿Qué nivel de acompañamiento buscas?",
    options: [
      { text: "Guía básica inicial", packageId: 1 },
      { text: "Asesoría mensual operativa", packageId: 2 },
      { text: "Seguridad fiscal trimestral", packageId: 3 },
      { text: "Estrategia trimestral de alto nivel", packageId: 4 },
      { text: "Soporte VIP y asistente AI 24/7", packageId: 5 },
    ],
  },
];

export function DiagnosisModal({ isOpen, onClose, onSelectPackage }: { isOpen: boolean; onClose: () => void; onSelectPackage: (id: number) => void }) {
  const [step, setStep] = useState(0); // 0: Intro, 1-3: Questions, 4: Contact Form, 5: Result
  const [answers, setAnswers] = useState<number[]>([]);
  const [recommendedPackage, setRecommendedPackage] = useState<any>(null);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });

  const handleAnswer = (packageId: number) => {
    const newAnswers = [...answers, packageId];
    setAnswers(newAnswers);
    
    if (step < QUESTIONS.length) {
      setStep(step + 1);
    } else {
      setStep(QUESTIONS.length + 1); // Go to contact form
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateResult(answers);
  };

  const calculateResult = (finalAnswers: number[]) => {
    // Count occurrences of each packageId
    const counts: Record<number, number> = {};
    finalAnswers.forEach(id => {
      counts[id] = (counts[id] || 0) + 1;
    });

    // Find the package with the most votes
    let winnerId = 1;
    let maxCount = 0;
    
    // Priority to higher packages in case of tie
    [5, 4, 3, 2, 1].forEach(id => {
      if ((counts[id] || 0) > maxCount) {
        maxCount = counts[id];
        winnerId = id;
      }
    });

    const pkg = APP_CONTENT.packages.find(p => p.id === winnerId);
    setRecommendedPackage(pkg);
    setStep(QUESTIONS.length + 2);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setRecommendedPackage(null);
    setContactInfo({ name: '', email: '', phone: '' });
  };

  const handleSelectRecommended = () => {
    if (recommendedPackage) {
      onSelectPackage(recommendedPackage.id);
      onClose();
      reset();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-brand-navy"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 md:p-12">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <h2 className="font-display text-3xl font-bold text-brand-navy md:text-4xl">
                  Diagnóstico Empresarial
                </h2>
                <p className="mt-4 text-lg text-slate-600">
                  Responde 3 preguntas rápidas para descubrir qué nivel de control necesita tu negocio hoy.
                </p>
                <button 
                  onClick={() => setStep(1)}
                  className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800"
                >
                  Comenzar ahora
                  <ChevronRight className="h-5 w-5" />
                </button>
              </motion.div>
            )}

            {step > 0 && step <= QUESTIONS.length && (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pregunta {step} de {QUESTIONS.length}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map(i => (
                      <div key={i} className={`h-1.5 w-8 rounded-full transition-colors ${i <= step ? 'bg-brand-green' : 'bg-slate-100'}`} />
                    ))}
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
                  {QUESTIONS[step - 1].text}
                </h3>
                <div className="mt-8 space-y-3">
                  {QUESTIONS[step - 1].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleAnswer(opt.packageId)}
                      className="group flex w-full items-center justify-between rounded-2xl border-2 border-slate-100 p-5 text-left transition-all hover:border-brand-navy hover:bg-slate-50"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-brand-navy">{opt.text}</span>
                      <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-brand-navy" />
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setStep(step - 1)}
                  className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-navy"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Regresar
                </button>
              </motion.div>
            )}

            {step === QUESTIONS.length + 1 && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-brand-navy">¡Casi listo!</h3>
                  <p className="mt-2 text-sm text-slate-500">Déjanos tus datos para enviarte el diagnóstico detallado y una propuesta personalizada.</p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="mt-1 w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-navy"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Correo Electrónico</label>
                      <input
                        required
                        type="email"
                        value={contactInfo.email}
                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                        placeholder="juan@empresa.com"
                        className="mt-1 w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-navy"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Teléfono / WhatsApp</label>
                      <input
                        required
                        type="tel"
                        value={contactInfo.phone}
                        onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                        placeholder="81 1234 5678"
                        className="mt-1 w-full rounded-xl border-2 border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand-navy"
                      />
                    </div>
                  </div>
                  <button 
                    type="submit"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800"
                  >
                    Obtener mi Resultado
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </form>
                <button 
                  onClick={() => setStep(step - 1)}
                  className="mt-6 flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-navy"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Regresar
                </button>
              </motion.div>
            )}

            {step === QUESTIONS.length + 2 && recommendedPackage && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-green uppercase">
                  <Sparkles className="h-3 w-3" />
                  Diagnóstico Completado
                </div>
                <h2 className="font-display text-3xl font-bold text-brand-navy">
                  ¡Gracias, {contactInfo.name.split(' ')[0]}! Tu paquete ideal es:
                </h2>
                
                <div className="mt-8 rounded-3xl border-2 border-brand-navy bg-slate-50 p-8 text-left">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-white font-bold`}>
                      {recommendedPackage.id}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-navy">{recommendedPackage.name}</h4>
                      <p className="text-sm text-slate-500">{recommendedPackage.target}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <p className="text-sm font-bold text-brand-navy uppercase tracking-widest">Beneficio Clave:</p>
                    <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                      <p className="font-medium text-slate-700">{recommendedPackage.result}</p>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Enfoque</p>
                      <p className="text-xs font-bold text-brand-navy">{recommendedPackage.objective}</p>
                    </div>
                    <div className="rounded-xl bg-white p-3">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Soporte</p>
                      <p className="text-xs font-bold text-brand-navy">{recommendedPackage.support[0]}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  <button 
                    onClick={handleSelectRecommended}
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800"
                  >
                    Seleccionar este plan
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={reset}
                    className="text-sm font-bold text-slate-400 hover:text-brand-navy"
                  >
                    Repetir diagnóstico
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
