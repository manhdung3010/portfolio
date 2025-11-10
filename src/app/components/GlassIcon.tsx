// GlassIcon.tsx - Optimized version with CSS transitions
import React, { useMemo } from "react";

export interface GlassIconProps {
  name: string;
  icon: JSX.Element;
  background: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({ name, icon, background }) => {
  // Memoize tooltipId to avoid recalculation on every render
  const tooltipId = useMemo(
    () => `tooltip-${name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`,
    [name]
  );

  return (
    <button
      type="button"
      aria-label={name}
      aria-describedby={tooltipId}
      className="group relative z-10 h-12 w-12 sm:h-14 sm:w-14 bg-transparent outline-none [-webkit-tap-highlight-color:transparent] transition-transform duration-200 ease-out hover:scale-105 hover:-translate-y-0.5 active:scale-95 will-change-transform"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 rounded-xl ${background} shadow-lg transition-shadow duration-200 group-hover:shadow-xl`}
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />

      {/* Glass Layer - Reduced backdrop blur for better performance */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/20 transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.08)",
          // Reduced blur from 8px to 4px for better performance
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: "0 0 0 1px hsla(0,0%,100%,0.1) inset",
        }}
      >
        <span className="text-white text-xl sm:text-2xl drop-shadow-sm transition-transform duration-200 ease-out group-hover:scale-110">
          {icon}
        </span>
      </div>
      
      {/* Tooltip */}
      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-[999] -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black/80" />
        <span>{name}</span>
      </div>
    </button>
  );
};

// Memoize component to prevent unnecessary re-renders
export default React.memo(GlassIcon);
