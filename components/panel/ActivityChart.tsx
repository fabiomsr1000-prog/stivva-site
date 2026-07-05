"use client";

import { motion } from "framer-motion";
import type { ActivityPoint } from "@/lib/panel/types";

type ActivityChartProps = {
  data: ActivityPoint[];
};

export function ActivityChart({ data }: ActivityChartProps) {
  const max = Math.max(...data.flatMap((d) => [d.conversations, d.appointments]), 1);

  return (
    <div className="gborder rounded-2xl p-5 md:p-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">Atividade da semana</h3>
          <p className="mt-0.5 text-sm text-white/40">Conversas e agendamentos por dia</p>
        </div>
        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-white/50">
            <span className="size-2 rounded-full bg-accent" />
            Conversas
          </span>
          <span className="flex items-center gap-1.5 text-white/50">
            <span className="size-2 rounded-full bg-accent-2" />
            Agendamentos
          </span>
        </div>
      </div>

      <div className="flex h-44 items-end justify-between gap-2 md:gap-3">
        {data.map((point, i) => {
          const convH = (point.conversations / max) * 100;
          const apptH = (point.appointments / max) * 100;

          return (
            <div key={point.label} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-36 w-full items-end justify-center gap-1">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${convH}%` }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[42%] min-h-[4px] rounded-t-md bg-gradient-to-t from-accent/30 to-accent"
                  title={`${point.conversations} conversas`}
                />
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${apptH}%` }}
                  transition={{ duration: 0.6, delay: i * 0.06 + 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="w-[42%] min-h-[4px] rounded-t-md bg-gradient-to-t from-accent-2/30 to-accent-2"
                  title={`${point.appointments} agendamentos`}
                />
              </div>
              <span className="text-[11px] font-medium text-white/35">{point.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
