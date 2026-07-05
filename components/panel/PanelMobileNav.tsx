"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarDays,
  LayoutDashboard,
  MessageSquareText,
  Settings2,
} from "lucide-react";

const nav = [
  { href: "/painel", label: "Visão geral", icon: LayoutDashboard, exact: true },
  { href: "/painel/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/painel/conversas", label: "Conversas", icon: MessageSquareText },
  { href: "/painel/configuracao", label: "Configuração", icon: Settings2 },
];

export function PanelMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-surface/95 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        aria-expanded={open}
        aria-label="Menu do painel"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
        Menu
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            className="absolute bottom-full left-1/2 mb-2 w-[min(100vw-2rem,280px)] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-surface/98 p-2 shadow-2xl backdrop-blur-xl"
          >
            {nav.map((item) => {
              const active = item.exact
                ? pathname === item.href
                : pathname.startsWith(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                    active
                      ? "bg-accent/15 text-accent"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="size-4" />
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
