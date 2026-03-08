import { motion } from "framer-motion";

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-[10%] left-[5%] w-[350px] h-[350px] bg-primary/[0.04] rounded-full blur-[120px]"
        animate={{ y: [0, 30, 0], x: [0, 15, 0], opacity: [0.04, 0.06, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[55%] right-[8%] w-[280px] h-[280px] bg-primary/[0.03] rounded-full blur-[100px]"
        animate={{ y: [0, -25, 0], x: [0, -10, 0], opacity: [0.03, 0.05, 0.03] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute top-[30%] right-[25%] w-[220px] h-[220px] bg-primary/[0.025] rounded-full blur-[130px]"
        animate={{ y: [0, 20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

export default BackgroundEffects;
