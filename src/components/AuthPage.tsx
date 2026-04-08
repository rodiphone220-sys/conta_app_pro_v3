import { motion } from "motion/react";
import React, { useState } from "react";
import { ChevronLeft, Mail, Lock, User, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import { APP_CONTENT } from "../constants";

interface AuthPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export default function AuthPage({ onBack, onLoginSuccess }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    console.log("Auth attempt:", { email, password, name, isLogin });
    onLoginSuccess();
  };

  const handleDemoLogin = () => {
    setEmail("demo@contaapppro.mx");
    setPassword("demo123");
    setTimeout(onLoginSuccess, 500);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Attempt");
    // Simulate success
    setTimeout(onLoginSuccess, 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Left Side - Branding/Info */}
      <div className="hidden md:flex md:w-1/2 bg-brand-navy p-12 flex-col justify-between text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl" />
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex items-center gap-3 cursor-pointer"
          onClick={onBack}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-brand-navy font-display font-bold italic">RM</div>
          <span className="text-2xl font-bold tracking-tight">{APP_CONTENT.brand.name}</span>
        </motion.div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-gold uppercase">
              <Sparkles className="h-3 w-3" />
              Control Total
            </div>
            <h1 className="font-display text-5xl font-bold leading-tight">
              Bienvenido al futuro de tu <span className="text-brand-gold">administración</span>.
            </h1>
            <p className="mt-6 text-xl text-slate-400 max-w-md">
              Accede a tu panel de control y toma las riendas de tu crecimiento empresarial hoy mismo.
            </p>
          </motion.div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-green">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold">Seguridad Nivel Bancario</p>
                <p className="text-sm text-slate-500">Tus datos están protegidos y encriptados.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-sm text-slate-500">
          © 2026 RM Tecnologías Contables. Todos los derechos reservados.
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full mx-auto"
        >
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-navy transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver al inicio
          </button>

          <h2 className="text-3xl font-bold text-brand-navy">
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </h2>
          <p className="mt-2 text-slate-500">
            {isLogin 
              ? "¿Nuevo en CONTA App Pro? " 
              : "¿Ya tienes una cuenta? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-brand-green font-bold hover:underline"
            >
              {isLogin ? "Regístrate aquí" : "Inicia sesión"}
            </button>
          </p>

          <div className="mt-8 space-y-4">
            <button 
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border-2 border-slate-100 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-[0.98]"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
              Continuar con Google
            </button>

            <button 
              onClick={handleDemoLogin}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-brand-gold/10 text-brand-gold border-2 border-brand-gold/20 rounded-xl font-bold hover:bg-brand-gold/20 transition-all active:scale-[0.98]"
            >
              <User className="w-5 h-5" />
              Acceso Demo (Rápido)
            </button>
          </div>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-slate-400 font-bold tracking-widest">O con tu correo</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nombre Completo</label>
                <div className="mt-1 relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Pérez"
                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-brand-navy transition-all"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Correo Electrónico</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@empresa.com"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-brand-navy transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Contraseña</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl outline-none focus:border-brand-navy transition-all"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <button type="button" className="text-xs font-bold text-slate-400 hover:text-brand-navy">
                  ¿Olvidaste tu contraseña?
                </button>
              </div>
            )}

            <button 
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-lg shadow-brand-navy/20"
            >
              {isLogin ? "Entrar al Panel" : "Crear mi Cuenta"}
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-slate-400">
            Al continuar, aceptas nuestros <button className="underline">Términos de Servicio</button> y <button className="underline">Política de Privacidad</button>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
