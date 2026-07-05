"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string | number;
  suffix?: string;
  icon: LucideIcon;
  trend?: string;
  accent?: "green" | "blue" | "violet" | "amber";
  delay?: number;
};

const accents = {
  green: "from-accent/20 to-accent/5 text-accent shadow-[0_0_40px_rgba(34,197,94,0.08)]",
  blue: "from-accent-2/20 to-accent-2/5 text-sky-400 shadow-[0_0_40px_rgba(59,130,246,0.08)]",
  violet: "from-violet-500/20 to-violet-500/5 text-violet-300 shadow-[0_0_40px_rgba(139,92,246,0.08)]",
  amber: "from-amber-500/20 to-amber-500/5 text-amber-300 shadow-[0_0_40px_rgba(245,158,11,0.08)]",
};

export function StatCard({
  label,
  value,
  suffix,
  icon: Icon,
  trend,
  accent = "green",
  delay = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={`gborder panel-scanline relative overflow-hidden rounded-2xl p-5 ${accents[accent]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-white/40">{label}</p>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-white">
            {value}
            {suffix && (
              <span className="ml-1 text-base font-medium text-white/40">{suffix}</span>
            )}
          </p>
          {trend && <p className="mt-1.5 text-xs text-white/45">{trend}</p>}
        </div>
        <div className={`rounded-xl bg-gradient-to-br p-2.5 ${accents[accent]}`}>
          <Icon className="size-5" />
        </div>
      </div>
    </motion.div>
  );
}
