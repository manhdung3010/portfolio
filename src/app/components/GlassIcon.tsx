// GlassIcon.tsx
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import React, { useRef } from "react";

export interface GlassIconProps {
  name: string;
  icon: JSX.Element;
  background: string;
}

const GlassIcon: React.FC<GlassIconProps> = ({ name, icon, background }) => {
  const ref = useRef<HTMLButtonElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring mềm mại hơn
  const springConfig = { stiffness: 100, damping: 18, mass: 1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Giảm độ nghiêng
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  // Icon di chuyển nhẹ
  const iconTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-3px", "3px"]);
  const iconTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-3px", "3px"]);

  // Spotlight
  const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const containerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08 },
    tap: { scale: 0.95 },
  };

  const glassVariants = {
    initial: { transform: "translateZ(0px)" },
    hover: { transform: "translateZ(25px)" },
  };

  const backgroundVariants = {
    initial: { transform: "translateZ(0px) rotate(10deg)" },
    hover: { transform: "translateZ(18px) rotate(14deg)" },
  };

  const smoothTransition = { type: "spring", stiffness: 120, damping: 22 };

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={name}
      className="group relative h-14 w-14 sm:h-18 sm:w-18 bg-transparent outline-none [-webkit-tap-highlight-color:transparent]"
      style={{
        transformStyle: "preserve-3d",
        perspective: "900px",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={smoothTransition}
    >
      {/* Background Layer */}
      <motion.div
        className={`absolute inset-0 rounded-2xl ${background}`}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 12px 32px -8px rgba(0,0,0,0.25)",
        }}
        variants={backgroundVariants}
        transition={smoothTransition}
      />

      {/* Glass Layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/20"
        style={{
          transformStyle: "preserve-3d",
          background:
            "radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow:
            "0 0 0 1px hsla(0,0%,100%,0.2) inset, 0 8px 32px rgba(0,0,0,0.15), inset 0 8px 24px rgba(255,255,255,0.1)",
          "--x": spotlightX,
          "--y": spotlightY,
        } as React.CSSProperties}
        variants={glassVariants}
        transition={smoothTransition}
      >
        <motion.span
          className="text-white text-2xl sm:text-3xl drop-shadow-lg"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(20px)",
            x: iconTranslateX,
            y: iconTranslateY,
          }}
          transition={smoothTransition}
        >
          {icon}
        </motion.span>
      </motion.div>
    </motion.button>
  );
};

export default GlassIcon;
