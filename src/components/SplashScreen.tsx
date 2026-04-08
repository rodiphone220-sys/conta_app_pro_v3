import { motion } from "motion/react";
import { APP_CONTENT } from "../constants";

interface SplashScreenProps {
  onComplete: () => void;
  key?: string;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 2500);
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-navy text-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div className="mb-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-brand-green to-brand-gold p-0.5 shadow-2xl">
          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-brand-navy">
            <span className="font-display text-4xl font-bold text-brand-gold italic">RM</span>
          </div>
        </div>
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-2xl font-bold tracking-tight text-brand-gold"
        >
          {APP_CONTENT.brand.logo}
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
          className="mt-4 h-0.5 bg-brand-green"
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
          className="mt-2 text-xs uppercase tracking-widest"
        >
          {APP_CONTENT.brand.tagline}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
