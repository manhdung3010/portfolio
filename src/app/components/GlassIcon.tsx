// GlassIcon.tsx - Optimized version
import { motion } from "framer-motion";
import React from "react";

export interface GlassIconProps {
  name: string;
  icon: JSX.Element;
  background: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({ name, icon, background }) => {
  const containerVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
  };

  const transition = { 
    type: "spring", 
    stiffness: 300, 
    damping: 20,
    mass: 0.8
  };

  const tooltipId = `tooltip-${name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

  return (
    <motion.button
      type="button"
      aria-label={name}
      aria-describedby={tooltipId}
      className="group relative z-10 h-12 w-12 sm:h-14 sm:w-14 bg-transparent outline-none [-webkit-tap-highlight-color:transparent]"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={transition}
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 rounded-xl ${background} shadow-lg`}
        style={{
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />

      {/* Glass Layer */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/20"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          boxShadow: "0 0 0 1px hsla(0,0%,100%,0.1) inset",
        }}
      >
        <motion.span
          className="text-white text-xl sm:text-2xl drop-shadow-sm"
          variants={iconVariants}
          transition={transition}
        >
          {icon}
        </motion.span>
      </div>
      {/* Tooltip */}
      <div
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] z-[999] -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white opacity-0 shadow-lg backdrop-blur-sm transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-black/80" />
        <span>{name}</span>
      </div>
    </motion.button>
  );
};

export default GlassIcon;
