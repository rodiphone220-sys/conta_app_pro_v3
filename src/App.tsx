import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { SplashScreen } from "./components/SplashScreen";
import LandingPage from "./components/LandingPage";
import { WhatsAppButton } from "./components/WhatsAppButton";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [view, setView] = useState<'splash' | 'landing' | 'auth' | 'dashboard'>('splash');
  const [selectedPackageId, setSelectedPackageId] = useState<number>(1); // Default to basic

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {view === 'splash' && (
          <SplashScreen key="splash" onComplete={() => setView('landing')} />
        )}
        
        {view === 'landing' && (
          <div key="landing">
            <LandingPage 
              onLoginClick={() => setView('auth')} 
              onSelectPackage={(id) => {
                setSelectedPackageId(id);
                setView('auth');
              }}
            />
            <WhatsAppButton />
          </div>
        )}

        {view === 'auth' && (
          <div key="auth">
            <AuthPage 
              onBack={() => setView('landing')} 
              onLoginSuccess={() => {
                setView('dashboard');
              }} 
            />
          </div>
        )}

        {view === 'dashboard' && (
          <div key="dashboard">
            <Dashboard 
              packageId={selectedPackageId}
              onLogout={() => setView('landing')} 
            />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
