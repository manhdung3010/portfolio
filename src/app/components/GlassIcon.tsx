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

  // Các motion value để theo dõi vị trí chuột
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Cải thiện spring config để animation mượt mà hơn
  const springConfig = { stiffness: 120, damping: 20, mass: 1 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Giảm độ nghiêng để animation tự nhiên hơn
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  // Giảm hiệu ứng "nam châm" của icon
  const iconTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-2px", "2px"]);
  const iconTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-2px", "2px"]);
  
  // Biến đổi vị trí chuột cho hiệu ứng spotlight
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
  
  // Cải thiện variants với transition mượt mà hơn
  const containerVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const glassVariants = {
    initial: { transform: "translateZ(0px)" },
    hover: { transform: "translateZ(25px)" },
  };

  const backgroundVariants = {
    initial: { transform: "translateZ(0px) rotate(12deg)" },
    hover: { transform: "translateZ(15px) rotate(15deg)" },
  };

  // Transition config mượt mà hơn
  const smoothTransition = { 
    type: "spring", 
    stiffness: 150, 
    damping: 25, 
    mass: 1 
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label={name}
      className="group relative h-14 w-14 bg-transparent outline-none [-webkit-tap-highlight-color:transparent] sm:h-18 sm:w-18"
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
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
          boxShadow: "0 12px 32px -8px rgba(0,0,0,0.25)"
        }}
        variants={backgroundVariants}
        transition={smoothTransition}
      />

      {/* Glass Layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-2xl border border-white/25"
        style={{
          transformStyle: "preserve-3d",
          background: "radial-gradient(circle at var(--x) var(--y), hsla(0,0%,100%,0.2), hsla(0,0%,100%,0.1))",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow: "0 0 0 1px hsla(0, 0%, 100%, 0.2) inset, 0 8px 32px rgba(0, 0, 0, 0.15)",
          "--x": spotlightX,
          "--y": spotlightY,
        } as React.CSSProperties}
        variants={glassVariants}
        transition={smoothTransition}
      >
        <motion.span
          className="text-white text-2xl sm:text-3xl drop-shadow-lg"
          aria-hidden="true"
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