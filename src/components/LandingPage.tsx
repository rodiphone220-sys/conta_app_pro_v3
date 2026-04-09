import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, CheckCircle2, Users, BarChart3, ShieldCheck, Clock, HelpCircle, ArrowRight, Sparkles, MessageSquare, Send, MessageCircle, Zap, FileText, X, TrendingUp, ScanLine, MapPin, ArrowUp, FileSpreadsheet, Download, Truck, Wallet } from "lucide-react";
import { APP_CONTENT } from "../constants";
import { useState, useEffect, useRef } from "react";
import { DiagnosisModal } from "./DiagnosisModal";
import { ChatBot } from "./ChatBot";
import { DemoModal } from "./DemoModal";

// --- Navbar ---
export function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-brand-gold font-display font-bold italic">RM</div>
          <span className="text-xl font-bold tracking-tight text-brand-navy">{APP_CONTENT.brand.name}</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#filosofia" className="text-sm font-medium text-slate-600 hover:text-brand-navy">Filosofía</a>
          <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-brand-navy">Beneficios</a>
          <a href="#planes" className="text-sm font-medium text-slate-600 hover:text-brand-navy">Planes</a>
          <a href="#proximos-pasos" className="text-sm font-medium text-slate-600 hover:text-brand-navy">Pasos</a>
          <button 
            onClick={onLoginClick}
            className="rounded-full bg-brand-navy px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
}

// --- Hero ---
export function Hero({ onOpenDiagnosis }: { onOpenDiagnosis: () => void }) {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-32">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-green/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-brand-gold/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-green uppercase">
              <Sparkles className="h-3 w-3" />
              {APP_CONTENT.brand.tagline}
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.1] text-brand-navy md:text-7xl">
              {APP_CONTENT.hero.title}
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
              {APP_CONTENT.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button 
                onClick={onOpenDiagnosis}
                className="group flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl"
              >
                {APP_CONTENT.hero.cta}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('planes');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full border-2 border-slate-200 px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:border-brand-navy hover:text-brand-navy"
              >
                {APP_CONTENT.hero.secondaryCta}
              </button>
              <button 
                onClick={() => {
                  const element = document.getElementById('configuracion-inicial');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-full bg-brand-gold/10 px-8 py-4 text-lg font-bold text-brand-gold transition-all hover:bg-brand-gold/20"
              >
                {APP_CONTENT.hero.configCta}
              </button>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User"
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-500">
                <span className="font-bold text-brand-navy">+500 empresarios</span> ya confían en nosotros
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50">
                {/* Mock Dashboard Preview */}
                <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Dashboard Pro</div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Ingresos Mensuales</p>
                      <p className="mt-1 text-xl font-bold text-brand-green">$142,500.00</p>
                      <div className="mt-2 h-1 w-full rounded-full bg-slate-100">
                        <div className="h-full w-[75%] rounded-full bg-brand-green" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-sm">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Egresos Mensuales</p>
                      <p className="mt-1 text-xl font-bold text-red-500">$84,200.00</p>
                      <div className="mt-2 h-1 w-full rounded-full bg-slate-100">
                        <div className="h-full w-[45%] rounded-full bg-red-500" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 rounded-xl bg-brand-navy p-4 text-white">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium opacity-70">Utilidad Proyectada</p>
                      <BarChart3 className="h-4 w-4 text-brand-gold" />
                    </div>
                    <p className="mt-1 text-2xl font-display font-bold text-brand-gold">$58,300.00</p>
                    <p className="mt-2 text-[10px] opacity-50">+12% vs mes anterior</p>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-gold/10 text-brand-gold">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold">Cumplimiento SAT</p>
                          <p className="text-[10px] text-slate-400">Opinión Positiva</p>
                        </div>
                      </div>
                      <div className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold text-green-600">ACTIVO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-brand-gold/20 blur-xl" />
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full border-4 border-brand-green/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Stellar Feature ---
export function StellarFeature({ onOpenDemo }: { onOpenDemo: (type: string, title: string) => void }) {
  return (
    <section className="bg-brand-navy py-24 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-gold/20 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-gold uppercase">
              <Zap className="h-3 w-3" />
              Función Estelar
            </div>
            <h2 className="font-display text-4xl font-bold md:text-5xl">
              {APP_CONTENT.stellarFeature.title}
            </h2>
            <p className="mt-6 text-xl text-slate-300">
              {APP_CONTENT.stellarFeature.subtitle}
            </p>
            <p className="mt-4 text-slate-400">
              {APP_CONTENT.stellarFeature.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {APP_CONTENT.stellarFeature.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <button 
                onClick={() => onOpenDemo('facturacion', 'Facturación y Timbrado SAT')}
                className="group flex items-center gap-3 rounded-2xl bg-brand-gold px-8 py-4 text-lg font-bold text-brand-navy transition-all hover:bg-white hover:scale-105 active:scale-95"
              >
                Probar Facturador Ahora
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Nueva Factura</p>
                    <p className="text-sm font-bold">CFDI 4.0 Generado</p>
                  </div>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                  Timbrado Exitoso
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-3/4 rounded-full bg-white/10" />
                <div className="h-2 w-1/2 rounded-full bg-white/10" />
                <div className="mt-8 flex justify-center">
                  <div className="h-32 w-32 rounded-2xl border-2 border-dashed border-brand-gold/30 flex items-center justify-center text-brand-gold/50">
                    <ShieldCheck size={48} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- Initial Configuration ---
export function InitialConfig() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const stepDetails = [
    {
      title: "Carga de Sellos Digitales (CSD)",
      fullDesc: "Los Certificados de Sello Digital son indispensables para emitir facturas. Nuestro equipo te guía en la descarga desde el portal del SAT y los configuramos en la plataforma para que tu facturación sea inmediata y legal.",
      cta: "Configurar mis Sellos ahora",
      icon: <ShieldCheck className="h-12 w-12 text-brand-gold" />
    },
    {
      title: "Sincronización Inteligente SAT",
      fullDesc: "Conectamos tu e.firma de forma segura para recuperar hasta 5 años de historial de facturación. Esto nos permite crear tu línea de tiempo financiera y detectar discrepancias antes que el SAT.",
      cta: "Sincronizar mi historial",
      icon: <Zap className="h-12 w-12 text-brand-gold" />
    },
    {
      title: "Tour de Dominio Total",
      fullDesc: "No te dejamos solo con un manual. Agendamos una videollamada personalizada para mostrarte cómo navegar tu dashboard, emitir facturas y leer tus reportes de rentabilidad según tu plan.",
      cta: "Agendar mi Tour",
      icon: <BarChart3 className="h-12 w-12 text-brand-gold" />
    },
    {
      title: "Capacitación Fiscal Estratégica",
      fullDesc: "Entiende el juego de los impuestos. Te enseñamos qué gastos son deducibles para tu actividad específica y cómo optimizar tu carga tributaria legalmente desde el primer mes.",
      cta: "Iniciar Capacitación",
      icon: <Users className="h-12 w-12 text-brand-gold" />
    }
  ];

  return (
    <section id="configuracion-inicial" className="bg-white py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            {APP_CONTENT.initialConfig.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {APP_CONTENT.initialConfig.subtitle}
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {APP_CONTENT.initialConfig.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedStep(i)}
              className="group cursor-pointer rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy text-white transition-transform group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-navy">
                <span className="text-lg font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-navy opacity-0 transition-opacity group-hover:opacity-100">
                Saber más <ChevronRight className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3D FX Popup Modal */}
      <AnimatePresence>
        {selectedStep !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStep(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: -20, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ perspective: "1000px" }}
              className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.5),0_30px_60px_-30px_rgba(0,0,0,0.3)] border border-slate-100"
            >
              <button 
                onClick={() => setSelectedStep(null)}
                className="absolute right-6 top-6 rounded-full bg-slate-100 p-2 text-slate-400 transition-colors hover:bg-brand-navy hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-navy/5 shadow-inner">
                  {stepDetails[selectedStep].icon}
                </div>
                
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-brand-gold uppercase mb-4">
                  Paso {selectedStep + 1} de la Configuración
                </div>
                
                <h3 className="text-3xl font-bold text-brand-navy">
                  {stepDetails[selectedStep].title}
                </h3>
                
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  {stepDetails[selectedStep].fullDesc}
                </p>

                <div className="mt-10 w-full space-y-4">
                  <button 
                    onClick={() => setSelectedStep(null)}
                    className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] transition-all hover:bg-slate-800 hover:shadow-[0_15px_30px_-5px_rgba(15,23,42,0.4)] active:scale-95"
                  >
                    {stepDetails[selectedStep].cta}
                  </button>
                  <button 
                    onClick={() => setSelectedStep(null)}
                    className="w-full py-2 text-sm font-bold text-slate-400 hover:text-brand-navy transition-colors"
                  >
                    Cerrar ventana
                  </button>
                </div>
              </div>

              {/* Decorative 3D elements */}
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-brand-gold/5 blur-2xl" />
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-navy/5 blur-2xl" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
export function Philosophy() {
  return (
    <section id="filosofia" className="bg-brand-navy py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl font-bold text-brand-gold md:text-5xl">
            {APP_CONTENT.philosophy.title}
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-brand-green" />
          <p className="mt-10 text-xl leading-relaxed text-slate-300 md:text-2xl">
            {APP_CONTENT.philosophy.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --- Benefits ---
export function Benefits({ onSelectPackage }: { onSelectPackage: (id: number) => void }) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="beneficios" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            {APP_CONTENT.benefits.title}
          </h2>
          <p className="mt-4 text-slate-500">Transformamos funciones tradicionales en valor real para tu negocio.</p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {APP_CONTENT.benefits.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveId(activeId === index ? null : index)}
              className={`group relative cursor-pointer rounded-2xl p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                activeId === index ? 'bg-brand-navy text-white ring-4 ring-brand-gold/20' : 'bg-white text-brand-navy'
              }`}
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                activeId === index ? 'bg-brand-gold text-brand-navy' : 'bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white'
              }`}>
                {index === 0 && <ShieldCheck className="h-6 w-6" />}
                {index === 1 && <BarChart3 className="h-6 w-6" />}
                {index === 2 && <Clock className="h-6 w-6" />}
                {index === 3 && <ShieldCheck className="h-6 w-6" />}
                {index === 4 && <Users className="h-6 w-6" />}
              </div>
              <p className={`text-xs font-bold uppercase tracking-widest ${activeId === index ? 'text-brand-gold' : 'text-slate-400'}`}>
                {item.function}
              </p>
              <p className="mt-2 text-lg font-bold">{item.value}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold transition-all group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeId !== null && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="mt-12 overflow-hidden"
            >
              <div className="rounded-3xl bg-white p-8 border-2 border-brand-navy shadow-2xl md:p-12">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-navy/5 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-navy uppercase">
                      <Sparkles className="h-3 w-3" />
                      Detalle del Beneficio
                    </div>
                    <h3 className="mt-6 text-3xl font-bold text-brand-navy">
                      {APP_CONTENT.benefits.items[activeId].function}: <span className="text-brand-green">{APP_CONTENT.benefits.items[activeId].value}</span>
                    </h3>
                    <p className="mt-6 text-xl text-slate-600 leading-relaxed">
                      {APP_CONTENT.benefits.items[activeId].description}
                    </p>
                    <p className="mt-4 text-slate-500">
                      {APP_CONTENT.benefits.items[activeId].details}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-8 border border-slate-100">
                    <h4 className="text-lg font-bold text-brand-navy">¿Listo para transformar tu negocio?</h4>
                    <p className="mt-2 text-slate-500">Este beneficio es pilar fundamental en nuestro plan recomendado para ti.</p>
                    
                    <div className="mt-8 flex flex-col gap-4">
                      <button 
                        onClick={() => onSelectPackage(APP_CONTENT.benefits.items[activeId].targetPackageId)}
                        className="flex items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800"
                      >
                        Contratar Plan Recomendado
                        <ChevronRight className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={() => onSelectPackage(APP_CONTENT.benefits.items[activeId].targetPackageId)}
                        className="flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:border-brand-navy hover:text-brand-navy"
                      >
                        Probar Demo de este Nivel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// --- Audience ---
export function Audience() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/biz1/400/500" alt="Business" className="rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/biz2/400/300" alt="Business" className="rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="mt-8 space-y-4">
              <img src="https://picsum.photos/seed/biz3/400/300" alt="Business" className="rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/biz4/400/500" alt="Business" className="rounded-2xl object-cover shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </motion.div>
          
          <div>
            <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
              {APP_CONTENT.audience.title}
            </h2>
            <div className="mt-10 space-y-6">
              {APP_CONTENT.audience.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-lg font-medium text-slate-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Pricing ---
export function Pricing({ onSelectPackage }: { onSelectPackage: (id: number) => void }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const colorMap: Record<string, string> = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
  };

  return (
    <section id="planes" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            Planes de Servicio CONTA App Pro
          </h2>
          <p className="mt-6 text-lg text-slate-600">Cada nivel incluye: Tecnología Inteligente + Capacitación + Acompañamiento</p>
        </div>
        
        <div className="mt-16 space-y-6">
          {APP_CONTENT.packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              layout
              className={`overflow-hidden rounded-3xl border-2 transition-all ${
                expandedId === pkg.id ? 'border-brand-navy bg-white shadow-2xl' : 'border-white bg-white shadow-sm hover:border-slate-200'
              }`}
            >
              <div 
                className="flex cursor-pointer flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center"
                onClick={() => setExpandedId(expandedId === pkg.id ? null : pkg.id)}
              >
                <div className="flex items-center gap-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${colorMap[pkg.color]}`}>
                    <span className="text-2xl font-bold">{pkg.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy">{pkg.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold text-brand-green">${pkg.price}</span>
                      <span className="text-xs text-slate-400">/{pkg.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Objetivo</p>
                    <p className="font-medium text-brand-navy">{pkg.objective}</p>
                  </div>
                  <button className={`rounded-full p-2 transition-transform ${expandedId === pkg.id ? 'rotate-180 bg-brand-navy text-white' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              {expandedId === pkg.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="border-t border-slate-100 p-8"
                >
                  <div className="grid gap-12 lg:grid-cols-3">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-brand-navy uppercase tracking-widest">
                        <ShieldCheck className="h-4 w-4 text-brand-green" />
                        Tecnología Inteligente
                      </h4>
                      <ul className="mt-6 space-y-3">
                        {pkg.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-brand-navy uppercase tracking-widest">
                        <Users className="h-4 w-4 text-brand-gold" />
                        Capacitación
                      </h4>
                      <ul className="mt-6 space-y-3">
                        {pkg.training.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-brand-navy uppercase tracking-widest">
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                        Acompañamiento
                      </h4>
                      <ul className="mt-6 space-y-3">
                        {pkg.support.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-12 flex items-center justify-between rounded-2xl bg-slate-50 p-6">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Resultado Garantizado</p>
                      <p className="mt-1 text-lg font-bold text-brand-navy">{pkg.result}</p>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPackage(pkg.id);
                      }}
                      className="rounded-full bg-brand-navy px-8 py-3 font-bold text-white transition-all hover:bg-slate-800"
                    >
                      Seleccionar Plan
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Promise ---
export function Promise() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-32 text-white">
      <div className="absolute top-0 left-0 h-full w-full opacity-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-brand-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-green blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-gold/20 text-brand-gold">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h2 className="font-display text-4xl font-bold text-brand-gold md:text-6xl">
            {APP_CONTENT.promise.title}
          </h2>
          <p className="mt-10 text-2xl font-light leading-relaxed text-slate-300 md:text-3xl">
            "{APP_CONTENT.promise.content}"
          </p>
          <div className="mt-12 flex justify-center gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-white">🔒</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Confianza</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">📈</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Rentabilidad</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white">🎯</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-slate-400">Control Total</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- CFO Virtual (AI Assistant Simulation) ---
export function AIChat() {
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hola, soy tu CFO Virtual. ¿En qué puedo ayudarte hoy con las finanzas de tu negocio?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let aiResponse = "Analizando tus datos... Según tu flujo actual y proyecciones fiscales, te recomiendo esperar al próximo trimestre para esa inversión.";
      if (input.toLowerCase().includes('empleado')) {
        aiResponse = "He analizado tu flujo, impuestos y proyecciones. Sí, puedes contratar a un nuevo empleado. Tu punto de equilibrio se ajustará en un 5%, pero la rentabilidad proyectada subirá un 12% en 6 meses.";
      }
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 1000);
  };

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-red-400 uppercase">
              <Sparkles className="h-3 w-3" />
              Paquete Corporativo AI
            </div>
            <h2 className="font-display text-4xl font-bold text-white md:text-6xl">
              CFO Virtual 24/7
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-slate-400">
              Imagina tener un director financiero inteligente que conoce cada centavo de tu empresa y te ayuda a tomar decisiones estratégicas en segundos.
            </p>
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                Análisis predictivo de impuestos
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                Simulación de decisiones empresariales
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <CheckCircle2 className="h-5 w-5 text-brand-green" />
                Auditoría preventiva automática
              </li>
            </ul>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-800 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800/50 px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">CFO Virtual AI</p>
                    <p className="text-[10px] text-green-400">● En línea</p>
                  </div>
                </div>
                <HelpCircle className="h-5 w-5 text-slate-500" />
              </div>
              
              <div ref={scrollRef} className="h-80 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === 'user' ? 'bg-brand-navy text-white' : 'bg-slate-700 text-slate-200'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="border-t border-slate-700 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Pregunta algo... (ej: ¿Puedo contratar?)"
                    className="flex-1 rounded-full bg-slate-900 px-4 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-brand-green"
                  />
                  <button 
                    onClick={handleSend}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white transition-transform hover:scale-105 active:scale-95"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            {/* Decorative background glow */}
            <div className="absolute -inset-4 z-[-1] rounded-[40px] bg-red-500/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer ---
export function Footer() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-navy font-display font-bold italic">RM</div>
              <span className="text-2xl font-bold tracking-tight">{APP_CONTENT.brand.name}</span>
            </div>
            <p className="mt-6 max-w-sm text-slate-400">
              {APP_CONTENT.footer.subtext}
            </p>
            <div className="mt-8 flex gap-4">
              {/* Social icons placeholders */}
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors cursor-pointer">
                <Users className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors cursor-pointer">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-green transition-colors cursor-pointer">
                <BarChart3 className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Enlaces</h4>
            <ul className="mt-6 space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white">Inicio</a></li>
              <li><a href="#filosofia" className="hover:text-white">Filosofía</a></li>
              <li><a href="#planes" className="hover:text-white">Planes</a></li>
              <li><a href="#beneficios" className="hover:text-white">Beneficios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-brand-gold">Contacto</h4>
            <ul className="mt-6 space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-brand-green" />
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Ventas y Servicios</p>
                  <p className="text-white">{APP_CONTENT.footer.whatsapp}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Send className="h-5 w-5 text-brand-green" />
                contacto@contaapppro.mx
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 border-t border-slate-800 pt-10 text-center text-sm text-slate-500">
          <p>© 2026 RM Tecnologías Contables. Todos los derechos reservados.</p>
          <p className="mt-2 font-bold text-brand-gold uppercase tracking-widest text-[10px]">Ventas y Servicios: {APP_CONTENT.footer.whatsapp}</p>
          <p className="mt-2 italic">Diseñado para el éxito empresarial en México.</p>
        </div>
      </div>
    </footer>
  );
}

// --- Exclusive Features ---
export function ExclusiveFeatures() {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<string[]>([]);
  const [quizResult, setQuizResult] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageSquare": return <MessageSquare className="h-12 w-12 text-brand-gold" />;
      case "Users": return <Users className="h-12 w-12 text-brand-gold" />;
      case "ShieldCheck": return <ShieldCheck className="h-12 w-12 text-brand-gold" />;
      case "Zap": return <Zap className="h-12 w-12 text-brand-gold" />;
      case "TrendingUp": return <TrendingUp className="h-12 w-12 text-brand-gold" />;
      case "ScanLine": return <ScanLine className="h-12 w-12 text-brand-gold" />;
      case "MapPin": return <MapPin className="h-12 w-12 text-brand-gold" />;
      default: return <Sparkles className="h-12 w-12 text-brand-gold" />;
    }
  };

  const quizQuestions = [
    {
      q: "¿Cuál es tu actividad principal?",
      options: ["Servicios Profesionales", "Comercio / Ventas", "Arrendamiento", "Plataformas Digitales"]
    },
    {
      q: "¿Tus ingresos anuales superan los 3.5 millones de pesos?",
      options: ["Sí", "No"]
    },
    {
      q: "¿Eres socio o accionista de alguna empresa?",
      options: ["Sí", "No"]
    }
  ];

  const handleQuizAnswer = (answer: string) => {
    const newAnswers = [...quizAnswers, answer];
    setQuizAnswers(newAnswers);
    
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Simple logic for result
      if (newAnswers[1] === "No" && newAnswers[2] === "No") {
        setQuizResult("RESICO (Régimen Simplificado de Confianza)");
      } else if (newAnswers[0] === "Servicios Profesionales") {
        setQuizResult("Persona Física con Actividad Profesional");
      } else {
        setQuizResult("Actividad Empresarial");
      }
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizResult(null);
  };

  return (
    <section id="funciones-exclusivas" className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            {APP_CONTENT.exclusiveFeatures.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {APP_CONTENT.exclusiveFeatures.subtitle}
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {APP_CONTENT.exclusiveFeatures.items.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                setSelectedFeature(i);
                if (feature.id === 'regimen') resetQuiz();
              }}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:border-brand-navy hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy transition-all group-hover:bg-brand-navy group-hover:text-white">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{feature.title}</h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                {feature.shortDesc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-navy">
                Explorar función <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3D FX Popup Modal for Exclusive Features */}
      <AnimatePresence>
        {selectedFeature !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeature(null)}
              className="absolute inset-0 bg-brand-navy/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20, y: 50 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -20, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{ perspective: "1000px" }}
              className="relative w-full max-w-xl overflow-hidden rounded-[3rem] bg-white p-10 shadow-[0_50px_100px_-20px_rgba(15,23,42,0.5)] border border-slate-100"
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute right-8 top-8 rounded-full bg-slate-100 p-2 text-slate-400 transition-colors hover:bg-brand-navy hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] bg-brand-navy text-brand-gold shadow-xl">
                  {getIcon(APP_CONTENT.exclusiveFeatures.items[selectedFeature].icon)}
                </div>
                
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-[10px] font-bold tracking-widest text-brand-green uppercase mb-6">
                  Función Exclusiva Pro
                </div>
                
                <h3 className="text-4xl font-bold text-brand-navy">
                  {APP_CONTENT.exclusiveFeatures.items[selectedFeature].title}
                </h3>
                
                {/* Special Content for Regimen Quiz */}
                {APP_CONTENT.exclusiveFeatures.items[selectedFeature].id === 'regimen' ? (
                  <div className="mt-8 w-full text-left">
                    {!quizResult ? (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pregunta {quizStep + 1} de {quizQuestions.length}</span>
                          <div className="h-1 w-24 bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-gold transition-all" style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }} />
                          </div>
                        </div>
                        <p className="text-xl font-bold text-brand-navy">{quizQuestions[quizStep].q}</p>
                        <div className="grid gap-3">
                          {quizQuestions[quizStep].options.map((opt, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleQuizAnswer(opt)}
                              className="w-full rounded-xl border-2 border-slate-100 p-4 text-left font-medium text-slate-700 transition-all hover:border-brand-navy hover:bg-slate-50"
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                      >
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green mb-4">
                          <CheckCircle2 size={32} />
                        </div>
                        <p className="text-slate-500 font-medium">Tu régimen ideal es:</p>
                        <h4 className="text-2xl font-bold text-brand-navy mt-2">{quizResult}</h4>
                        <p className="mt-4 text-slate-600">Este régimen te permitirá optimizar tu carga fiscal. ¿Quieres que un experto valide este resultado?</p>
                        <button 
                          onClick={resetQuiz}
                          className="mt-6 text-sm font-bold text-brand-gold hover:underline"
                        >
                          Reiniciar cuestionario
                        </button>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <p className="mt-8 text-xl text-slate-600 leading-relaxed">
                    {APP_CONTENT.exclusiveFeatures.items[selectedFeature].fullDesc}
                  </p>
                )}

                <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-slate-800 active:scale-95"
                  >
                    Solicitar Acceso
                  </button>
                  <button 
                    onClick={() => setSelectedFeature(null)}
                    className="rounded-2xl border-2 border-slate-200 py-4 text-lg font-bold text-slate-700 transition-all hover:border-brand-navy hover:text-brand-navy"
                  >
                    Ver Demo
                  </button>
                </div>
              </div>

              {/* Decorative 3D elements */}
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />
              <div className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-brand-navy/5 blur-3xl" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// --- Next Steps ---
export function NextSteps({ onOpenDiagnosis, onSelectPackage }: { onOpenDiagnosis: () => void, onSelectPackage: (id: number) => void }) {
  const handleAction = (action: string) => {
    switch (action) {
      case 'diagnosis':
        onOpenDiagnosis();
        break;
      case 'pricing':
        document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'config':
        document.getElementById('configuracion-inicial')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'demo':
        onSelectPackage(2); // Default to Gestión Operativa for demo
        break;
    }
  };

  return (
    <section id="proximos-pasos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            {APP_CONTENT.nextSteps.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {APP_CONTENT.nextSteps.subtitle}
          </p>
        </div>
        
        <div className="mt-20 relative">
          {/* Connecting Line */}
          <div className="absolute left-[2.25rem] top-0 h-full w-0.5 bg-slate-100 md:left-1/2 md:-ml-px" />
          
          <div className="space-y-12">
            {APP_CONTENT.nextSteps.steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col gap-8 md:flex-row md:items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Number Circle */}
                <div className="absolute left-0 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white border-4 border-slate-50 shadow-lg md:left-1/2 md:-ml-[2.25rem] z-10">
                  <span className="text-2xl font-bold text-brand-navy">{i + 1}</span>
                </div>
                
                {/* Content Card */}
                <div className="ml-24 md:ml-0 md:w-1/2">
                  <div className={`rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl ${i % 2 === 1 ? 'md:mr-16' : 'md:ml-16'}`}>
                    <h3 className="text-2xl font-bold text-brand-navy">{step.title}</h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                    <button 
                      onClick={() => handleAction(step.action)}
                      className="mt-6 flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-gold transition-colors"
                    >
                      {step.cta}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Featured Functions ---
export function FeaturedFunctions({ onOpenDemo }: { onOpenDemo: (type: string, title: string) => void }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileSpreadsheet": return <FileSpreadsheet className="h-8 w-8 text-brand-gold" />;
      case "FileText": return <FileText className="h-8 w-8 text-brand-gold" />;
      case "Download": return <Download className="h-8 w-8 text-brand-gold" />;
      case "Users": return <Users className="h-8 w-8 text-brand-gold" />;
      case "Truck": return <Truck className="h-8 w-8 text-brand-gold" />;
      case "TrendingUp": return <TrendingUp className="h-8 w-8 text-brand-gold" />;
      case "BarChart3": return <BarChart3 className="h-8 w-8 text-brand-gold" />;
      case "Wallet": return <Wallet className="h-8 w-8 text-brand-gold" />;
      default: return <Sparkles className="h-8 w-8 text-brand-gold" />;
    }
  };

  const getDemoType = (title: string) => {
    if (title.includes('Excel')) return 'excel';
    if (title.includes('Facturador')) return 'facturacion';
    return 'default';
  };

  return (
    <section id="funciones-destacadas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-brand-navy md:text-5xl">
            {APP_CONTENT.featuredFunctions.title}
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            {APP_CONTENT.featuredFunctions.subtitle}
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {APP_CONTENT.featuredFunctions.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onOpenDemo(getDemoType(item.title), item.title)}
              className="group cursor-pointer rounded-3xl border border-slate-100 bg-slate-50 p-8 transition-all hover:bg-white hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-white transition-all group-hover:bg-brand-gold group-hover:text-brand-navy">
                {getIcon(item.icon)}
              </div>
              <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-navy opacity-0 transition-opacity group-hover:opacity-100">
                Ver Demo <ArrowRight size={12} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function LandingPage({ onLoginClick, onSelectPackage }: { onLoginClick: () => void, onSelectPackage: (id: number) => void }) {
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [demoState, setDemoState] = useState<{ isOpen: boolean, type: string, title: string }>({
    isOpen: false,
    type: '',
    title: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openDemo = (type: string, title: string) => {
    setDemoState({ isOpen: true, type, title });
  };

  return (
    <div className="relative">
      <Navbar onLoginClick={onLoginClick} />
      <Hero onOpenDiagnosis={() => setIsDiagnosisOpen(true)} />
      <StellarFeature onOpenDemo={openDemo} />
      <FeaturedFunctions onOpenDemo={openDemo} />
      <Philosophy />
      <Benefits onSelectPackage={onSelectPackage} />
      <InitialConfig />
      <ExclusiveFeatures />
      <Audience />
      <NextSteps onOpenDiagnosis={() => setIsDiagnosisOpen(true)} onSelectPackage={onSelectPackage} />
      <Pricing onSelectPackage={onSelectPackage} />
      <AIChat />
      <Promise />
      <Footer />

      <ChatBot />

      {/* Scroll to Top Button - Left Side */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            drag
            dragMomentum={false}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-2xl transition-all hover:bg-brand-gold hover:text-brand-navy active:scale-90 cursor-grab active:cursor-grabbing"
            aria-label="Subir al inicio (Arrastra para mover)"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <DiagnosisModal 
        isOpen={isDiagnosisOpen} 
        onClose={() => setIsDiagnosisOpen(false)} 
        onSelectPackage={onSelectPackage}
      />

      <DemoModal 
        isOpen={demoState.isOpen}
        type={demoState.type}
        title={demoState.title}
        onClose={() => setDemoState({ ...demoState, isOpen: false })}
      />
    </div>
  );
}
