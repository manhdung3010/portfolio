"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  contentClassName?: string;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
};

export default function Modal({
  open,
  onClose,
  children,
  contentClassName,
  showCloseButton = true,
  closeOnOverlayClick = true,
}: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="absolute inset-0"
            onClick={() => {
              if (closeOnOverlayClick) onClose();
            }}
          />
          <motion.div
            className={
              "bg-background rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide shadow-xl p-6 relative " +
              (contentClassName ?? "")
            }
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
          >
            {showCloseButton && (
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


