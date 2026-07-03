"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/content";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 flex size-14 items-center justify-center rounded-full bg-accent text-[#05130a] shadow-[0_10px_35px_-5px_rgba(34,197,94,0.55)]"
          aria-label="Falar com a gente no WhatsApp"
        >
          <MessageCircle className="size-6" strokeWidth={2.2} aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
