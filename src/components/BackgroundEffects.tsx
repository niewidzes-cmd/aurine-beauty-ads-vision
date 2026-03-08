import { useEffect, useRef } from "react";

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  type: "circle" | "ring" | "dot";
}

const BackgroundEffects = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-primary/[0.04] rounded-full blur-[100px] animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute top-[60%] right-[10%] w-[250px] h-[250px] bg-primary/[0.03] rounded-full blur-[80px] animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
      <div className="absolute top-[30%] right-[30%] w-[200px] h-[200px] bg-primary/[0.025] rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "4s" }} />
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />
    </div>
  );
};

export default BackgroundEffects;
