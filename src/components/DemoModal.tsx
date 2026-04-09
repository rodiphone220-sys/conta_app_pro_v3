import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileText, CheckCircle2, Download, Send, Plus, Trash2, Search, FileSpreadsheet, Users, Truck, TrendingUp, BarChart3, Wallet, Sparkles } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  title: string;
}

export function DemoModal({ isOpen, onClose, type, title }: DemoModalProps) {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsProcessing(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  const handleProcess = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  const renderContent = () => {
    if (isSuccess) {
      return (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center text-center py-10"
        >
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
            <CheckCircle2 size={48} />
          </div>
          <h3 className="text-2xl font-bold text-brand-navy">¡Acción Completada con Éxito!</h3>
          <p className="mt-4 text-slate-600 max-w-xs">
            La operación de <strong>{title}</strong> se ha procesado correctamente siguiendo los estándares del SAT.
          </p>
          <button 
            onClick={onClose}
            className="mt-8 rounded-xl bg-brand-navy px-8 py-3 font-bold text-white transition-all hover:bg-slate-800"
          >
            Finalizar Demo
          </button>
        </motion.div>
      );
    }

    if (isProcessing) {
      return (
        <div className="flex flex-col items-center text-center py-20">
          <div className="relative h-16 w-16">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="h-full w-full rounded-full border-4 border-slate-100 border-t-brand-gold"
            />
          </div>
          <p className="mt-6 font-medium text-brand-navy">Procesando con tecnología Pro AI...</p>
          <p className="text-xs text-slate-400 mt-2">Validando sellos y certificados SAT</p>
        </div>
      );
    }

    // Specific Demos
    switch (type) {
      case 'excel':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-brand-navy">Previsualización de Datos a Exportar</h4>
                <span className="text-[10px] bg-brand-gold/20 text-brand-navy px-2 py-0.5 rounded-full font-bold">482 Registros Encontrados</span>
              </div>
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="p-2 font-bold">Fecha</th>
                      <th className="p-2 font-bold">Concepto</th>
                      <th className="p-2 font-bold text-right">Monto</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-2">08/04/2026</td>
                      <td className="p-2">PAGO FACTURA A-102</td>
                      <td className="p-2 text-right text-brand-green font-bold">$15,400.00</td>
                    </tr>
                    <tr>
                      <td className="p-2">07/04/2026</td>
                      <td className="p-2">NOMINA QUINCENAL</td>
                      <td className="p-2 text-right text-red-500">-$42,000.00</td>
                    </tr>
                    <tr>
                      <td className="p-2">07/04/2026</td>
                      <td className="p-2">VENTA PUBLICO GRAL</td>
                      <td className="p-2 text-right text-brand-green font-bold">$3,250.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] text-slate-400">
                <Sparkles size={10} />
                <span>La IA ha categorizado automáticamente el 98% de los movimientos.</span>
              </div>
            </div>
            <button 
              onClick={handleProcess}
              className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
            >
              <FileSpreadsheet size={20} className="text-brand-gold" />
              Generar Reporte Excel Pro
            </button>
          </div>
        );

      case 'facturacion':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase">Conexión SAT: Estable</span>
                </div>
                <span className="text-[10px] font-bold text-brand-navy">FOLIO: A-2026-001</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Receptor</label>
                  <p className="text-sm font-bold text-brand-navy">CLIENTE VIP MÉXICO S.A.</p>
                  <p className="text-[10px] text-slate-500">RFC: CVM123456789</p>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Régimen</label>
                  <p className="text-sm text-brand-navy">601 - General de Ley Personas Morales</p>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-200">
                  <div className="text-xs">
                    <p className="font-bold">Servicios de Consultoría TI</p>
                    <p className="text-slate-400">Clave: 81111508</p>
                  </div>
                  <p className="font-bold text-brand-navy">$25,000.00</p>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-200">
                  <div className="text-xs">
                    <p className="font-bold">IVA (16%)</p>
                  </div>
                  <p className="font-bold text-brand-navy">$4,000.00</p>
                </div>
              </div>
              <div className="mt-6 text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase">Total CFDI 4.0</p>
                <p className="text-3xl font-bold text-brand-navy">$29,000.00</p>
              </div>
            </div>
            <button 
              onClick={handleProcess}
              className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
            >
              <Zap size={20} className="text-brand-gold" />
              Timbrar Factura Certificada
            </button>
          </div>
        );

      case 'xml':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-900 p-6 text-brand-green font-mono text-[10px] overflow-hidden relative">
              <div className="absolute top-0 right-0 p-2 opacity-20"><Download size={40} /></div>
              <p className="mb-2 text-white/40 border-b border-white/10 pb-2">Sincronizando con WebService SAT...</p>
              <p>&lt;cfdi:Comprobante Version="4.0" Serie="A" Folio="123" ...&gt;</p>
              <p className="ml-4">&lt;cfdi:Emisor Rfc="ABC123456789" Nombre="CONTA APP PRO" .../&gt;</p>
              <p className="ml-4">&lt;cfdi:Receptor Rfc="XYZ987654321" Nombre="CLIENTE DEMO" .../&gt;</p>
              <p className="ml-4">&lt;cfdi:Conceptos&gt; ... &lt;/cfdi:Conceptos&gt;</p>
              <p className="ml-4">&lt;tfd:TimbreFiscalDigital UUID="550e8400-e29b-41d4-a716-446655440000" .../&gt;</p>
              <p>&lt;/cfdi:Comprobante&gt;</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Facturas Hoy</p>
                <p className="text-xl font-bold text-brand-navy">12</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-4 border border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Monto Total</p>
                <p className="text-xl font-bold text-brand-navy">$142,500</p>
              </div>
            </div>
            <button 
              onClick={handleProcess}
              className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
            >
              <Download size={20} className="text-brand-gold" />
              Sincronizar Bóveda XML
            </button>
          </div>
        );

      case 'clientes':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center font-bold">JD</div>
                <div>
                  <h4 className="font-bold text-brand-navy">Juan Delgado S.A.</h4>
                  <p className="text-xs text-slate-500">Saldo Pendiente: <span className="text-red-500 font-bold">$12,450.00</span></p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-200">
                  <div className="text-[10px]">
                    <p className="font-bold">Factura A-882</p>
                    <p className="text-slate-400">Vence en 2 días</p>
                  </div>
                  <span className="text-xs font-bold text-orange-500">Por Vencer</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-slate-200 opacity-50">
                  <div className="text-[10px]">
                    <p className="font-bold">Factura A-870</p>
                    <p className="text-slate-400">Pagada el 01/04</p>
                  </div>
                  <span className="text-xs font-bold text-brand-green">Pagada</span>
                </div>
              </div>
            </div>
            <button 
              onClick={handleProcess}
              className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
            >
              <Send size={20} className="text-brand-gold" />
              Enviar Recordatorio de Pago
            </button>
          </div>
        );

      case 'flujo':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex items-end gap-2 mb-6 h-32">
                <motion.div initial={{ height: 0 }} animate={{ height: '60%' }} className="flex-1 bg-slate-200 rounded-t-lg" />
                <motion.div initial={{ height: 0 }} animate={{ height: '80%' }} className="flex-1 bg-brand-navy rounded-t-lg" />
                <motion.div initial={{ height: 0 }} animate={{ height: '40%' }} className="flex-1 bg-brand-gold rounded-t-lg" />
                <motion.div initial={{ height: 0 }} animate={{ height: '90%' }} className="flex-1 bg-brand-green rounded-t-lg" />
                <motion.div initial={{ height: 0 }} animate={{ height: '70%' }} className="flex-1 bg-brand-navy rounded-t-lg" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Entradas</p>
                  <p className="text-lg font-bold text-brand-green">$85,200</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Salidas</p>
                  <p className="text-lg font-bold text-red-500">$32,100</p>
                </div>
              </div>
            </div>
            <button 
              onClick={handleProcess}
              className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
            >
              <TrendingUp size={20} className="text-brand-gold" />
              Generar Proyección Financiera
            </button>
          </div>
        );

      case 'gastos':
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-brand-navy">Categorización de Gastos</h4>
                <Wallet className="text-brand-gold" size={20} />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] font-bold mb-1">
                    <span>OPERATIVOS</span>
                    <span>65%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '65%' }} className="h-full bg-brand-navy" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold mb-1">
                    <span>ADMINISTRATIVOS</span>
                    <span>25%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '25%' }} className="h-full bg-brand-gold" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-[10px] font-bold mb-1">
                    <span>IMPUESTOS</span>
                    <span>10%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: '10%' }} className="h-full bg-brand-green" />
                  </div>
                </div>
              </div>
            </div>
            <button 
              onClick={handleProcess}
              className="w-full rounded-2xl bg-brand-navy py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 active:scale-95 flex items-center justify-center gap-2"
            >
              <Search size={20} className="text-brand-gold" />
              Analizar Eficiencia de Gastos
            </button>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div className="rounded-2xl bg-brand-navy/5 p-8 text-center">
              <Sparkles size={40} className="mx-auto text-brand-gold mb-4" />
              <p className="text-slate-700 font-medium">Esta es una vista previa de la función:</p>
              <h4 className="text-xl font-bold text-brand-navy mt-2">{title}</h4>
              <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                Nuestra plataforma automatiza este proceso conectándose directamente con las APIs del SAT y sistemas bancarios para ofrecerte control total en segundos.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={handleProcess}
                className="rounded-xl bg-brand-navy py-3 font-bold text-white transition-all hover:bg-slate-800"
              >
                Ejecutar Demo
              </button>
              <button 
                onClick={onClose}
                className="rounded-xl border border-slate-200 py-3 font-bold text-slate-600 transition-all hover:bg-slate-50"
              >
                Cerrar
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-[2.5rem] bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-brand-gold">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-navy">Demo: {title}</h2>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green">Entorno de Pruebas Seguro</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="rounded-full bg-slate-100 p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-500"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              {renderContent()}
            </div>

            {/* Footer Info */}
            <div className="bg-slate-50 px-8 py-4 text-center">
              <p className="text-[10px] text-slate-400">
                © 2026 CONTA App Pro • Tecnología de Timbrado Certificada por el SAT
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Re-using icons for the switch
const Zap = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
