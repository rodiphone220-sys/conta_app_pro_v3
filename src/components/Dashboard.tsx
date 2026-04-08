import { motion } from "motion/react";
import React from "react";
import { 
  LayoutDashboard, 
  FileText, 
  TrendingUp, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Calendar,
  PieChart,
  Sparkles,
  Bot,
  ShieldAlert,
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";
import { APP_CONTENT } from "../constants";

interface DashboardProps {
  packageId: number;
  onLogout: () => void;
}

export default function Dashboard({ packageId, onLogout }: DashboardProps) {
  const pkg = APP_CONTENT.packages.find(p => p.id === packageId) || APP_CONTENT.packages[0];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-navy text-white flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-brand-navy font-display font-bold italic">RM</div>
          <span className="text-xl font-bold tracking-tight">CONTA App Pro</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <NavItem icon={<LayoutDashboard size={20} />} label="Panel Principal" active />
          <NavItem icon={<FileText size={20} />} label="Facturación (XML)" />
          <NavItem icon={<TrendingUp size={20} />} label="Flujo de Caja" />
          
          {/* Plan Specific Nav Items */}
          {packageId >= 2 && <NavItem icon={<Users size={20} />} label="Clientes y Cobranza" />}
          {packageId >= 3 && <NavItem icon={<PieChart size={20} />} label="Impuestos (SAT)" />}
          {packageId >= 4 && <NavItem icon={<Target size={20} />} label="Estrategia y Metas" />}
          {packageId >= 5 && <NavItem icon={<Bot size={20} />} label="Asistente AI" />}
          
          <NavItem icon={<Settings size={20} />} label="Configuración" />
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={onLogout}
            className="flex w-full items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            <LogOut size={20} />
            <span className="font-medium">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Buscar facturas, clientes o reportes..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-brand-navy transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-brand-navy relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-brand-navy">Usuario Demo</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Plan {pkg.name}</p>
              </div>
              <img src="https://picsum.photos/seed/demo/100/100" alt="Avatar" className="h-10 w-10 rounded-full border-2 border-brand-gold/20" />
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          {/* Welcome Section */}
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-brand-navy`}>
                  {pkg.name}
                </span>
                {packageId === 5 && (
                  <span className="flex items-center gap-1 rounded-full bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                    <Sparkles size={10} />
                    AI Enabled
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-brand-navy">Hola, Usuario Demo 👋</h1>
              <p className="text-slate-500 mt-1">Tu objetivo hoy: <span className="font-bold text-brand-navy">{pkg.objective}</span></p>
            </div>
            <div className="flex gap-4">
              {packageId >= 2 && (
                <button className="flex items-center gap-2 bg-white border-2 border-slate-100 text-brand-navy px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
                  <Plus size={20} />
                  Nueva Factura
                </button>
              )}
              {packageId >= 5 && (
                <button className="flex items-center gap-2 bg-brand-gold text-brand-navy px-6 py-3 rounded-xl font-bold hover:bg-brand-gold/80 transition-all shadow-lg shadow-brand-gold/20">
                  <Bot size={20} />
                  Consultar AI
                </button>
              )}
            </div>
          </div>

          {/* Stats Grid - Dynamic based on plan */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Ingresos del Mes" 
              value="$124,500.00" 
              trend="+12.5%" 
              trendUp={true} 
              icon={<ArrowUpRight className="text-emerald-500" />} 
            />
            <StatCard 
              title="Egresos del Mes" 
              value="$45,200.00" 
              trend="-2.4%" 
              trendUp={false} 
              icon={<ArrowDownRight className="text-rose-500" />} 
            />
            
            {/* Conditional Stats */}
            {packageId >= 3 ? (
              <StatCard 
                title="IVA por Pagar (Est.)" 
                value="$8,430.00" 
                trend="SAT" 
                trendUp={null} 
                icon={<ShieldAlert className="text-brand-gold" />} 
              />
            ) : (
              <StatCard 
                title="Facturas XML" 
                value="128" 
                trend="Descargadas" 
                trendUp={null} 
                icon={<FileText className="text-brand-navy" />} 
              />
            )}

            {packageId >= 4 ? (
              <StatCard 
                title="Rentabilidad" 
                value="64.2%" 
                trend="+5% vs mes ant." 
                trendUp={true} 
                icon={<Zap className="text-brand-gold" />} 
              />
            ) : (
              <StatCard 
                title="Saldo en Bancos" 
                value="$342,100.00" 
                trend="Actualizado" 
                trendUp={null} 
                icon={<Calendar className="text-blue-500" />} 
              />
            )}
          </div>

          {/* Special AI Section for Corporativo AI */}
          {packageId === 5 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-navy text-white p-8 rounded-3xl relative overflow-hidden mb-8"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-gold text-brand-navy">
                  <Bot size={40} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">Análisis Predictivo AI</h3>
                  <p className="text-slate-400 mt-2 max-w-2xl">
                    Basado en tu comportamiento de los últimos 3 meses, prevemos un aumento del 15% en gastos operativos para el próximo mes. 
                    <span className="text-brand-gold font-bold"> Sugerencia:</span> Revisa tus contratos de proveedores antes del 15 de julio.
                  </p>
                </div>
                <button className="bg-white text-brand-navy px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all whitespace-nowrap">
                  Ver Informe Completo
                </button>
              </div>
            </motion.div>
          )}

          {/* Stellar Feature: Facturación y Timbrado (Highlighted for all plans that can invoice) */}
          {packageId >= 2 && (
            <div className="bg-white rounded-3xl border-2 border-brand-navy/5 p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-navy text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                Función Estelar
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold">
                  <Zap size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-navy">Facturación y Timbrado Certificado</h3>
                  <p className="text-slate-500 mt-1">Genera tus CFDI 4.0 con validación automática del SAT y timbrado instantáneo.</p>
                </div>
                <div className="flex gap-3">
                  <button className="bg-brand-navy text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
                    Crear Factura XML
                  </button>
                  <button className="bg-slate-50 text-brand-navy border border-slate-200 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all">
                    Ver Historial
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Charts & Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Chart Area */}
            <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-brand-navy text-lg">
                  {packageId >= 4 ? "Análisis de Rentabilidad" : "Flujo de Efectivo"}
                </h3>
                <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1 text-xs font-bold text-slate-500 outline-none">
                  <option>Enero - Junio 2026</option>
                </select>
              </div>
              <div className="h-64 flex items-end justify-between gap-2 px-4">
                {[45, 60, 40, 75, 55, 90].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-slate-100 rounded-t-lg relative group overflow-hidden" style={{ height: '100%' }}>
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="absolute bottom-0 w-full bg-brand-navy group-hover:bg-brand-green transition-colors"
                      />
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity / Plan Specific Info */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-brand-navy text-lg mb-6">
                {packageId >= 3 ? "Estatus Fiscal" : "Actividad Reciente"}
              </h3>
              
              {packageId >= 3 ? (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center gap-4">
                    <CheckCircle2 className="text-emerald-500" />
                    <div>
                      <p className="text-sm font-bold text-emerald-900">Opinión Positiva</p>
                      <p className="text-xs text-emerald-700">Actualizado hace 2 días</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Próximos Vencimientos</p>
                    <ActivityItem title="Declaración Mensual" desc="ISR / IVA" amount="17 Jun" time="Faltan 10 días" type="info" />
                    <ActivityItem title="Pago de Nómina" desc="Retenciones" amount="15 Jun" time="Faltan 8 días" type="expense" />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <ActivityItem 
                    title="Factura Emitida" 
                    desc="Cliente: Tech Solutions SA" 
                    amount="+$12,000" 
                    time="Hace 2 horas" 
                    type="income" 
                  />
                  <ActivityItem 
                    title="Pago de Renta" 
                    desc="Proveedor: Inmobiliaria RM" 
                    amount="-$8,500" 
                    time="Hace 5 horas" 
                    type="expense" 
                  />
                  <ActivityItem 
                    title="Nueva Factura SAT" 
                    desc="Descarga automática XML" 
                    amount="+$3,400" 
                    time="Ayer" 
                    type="income" 
                  />
                </div>
              )}
              
              <button className="w-full mt-8 py-3 text-sm font-bold text-brand-navy hover:bg-slate-50 rounded-xl transition-all border border-slate-100">
                {packageId >= 3 ? "Ver Expediente Fiscal" : "Ver todo el historial"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex w-full items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${active ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatCard({ title, value, trend, trendUp, icon }: { title: string, value: string, trend: string, trendUp: boolean | null, icon: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-slate-50 rounded-xl">{icon}</div>
        {trendUp !== null && (
          <span className={`text-xs font-bold ${trendUp ? 'text-emerald-500' : 'text-rose-500'}`}>
            {trend}
          </span>
        )}
        {trendUp === null && <span className="text-[10px] font-bold text-slate-400 uppercase">{trend}</span>}
      </div>
      <p className="text-sm font-medium text-slate-500">{title}</p>
      <h4 className="text-2xl font-bold text-brand-navy mt-1">{value}</h4>
    </div>
  );
}

function ActivityItem({ title, desc, amount, time, type }: { title: string, desc: string, amount: string, time: string, type: 'income' | 'expense' | 'info' }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`h-2 w-2 rounded-full ${type === 'income' ? 'bg-emerald-500' : type === 'expense' ? 'bg-rose-500' : 'bg-blue-500'}`} />
        <div>
          <p className="text-sm font-bold text-brand-navy">{title}</p>
          <p className="text-xs text-slate-400">{desc}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-bold ${type === 'income' ? 'text-emerald-500' : type === 'expense' ? 'text-rose-500' : 'text-brand-navy'}`}>
          {amount}
        </p>
        <p className="text-[10px] text-slate-400 font-medium">{time}</p>
      </div>
    </div>
  );
}
