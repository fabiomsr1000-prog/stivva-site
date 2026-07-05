"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ChevronLeft, ChevronRight, User } from "lucide-react";
import type { Appointment } from "@/lib/panel/types";
import {
  addDays,
  colorStatus,
  formatTime,
  isSameDay,
  labelStatus,
  startOfWeek,
} from "@/lib/panel/utils";

const HOURS = Array.from({ length: 12 }, (_, i) => i + 8);

type AgendaCalendarProps = {
  appointments: Appointment[];
};

export function AgendaCalendar({ appointments }: AgendaCalendarProps) {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()));
  const [selected, setSelected] = useState<Appointment | null>(null);

  const days = useMemo(
    () => Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart],
  );

  const today = new Date();

  function apptsForDay(day: Date) {
    return appointments.filter((a) => isSameDay(new Date(a.start), day));
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setWeekStart((d) => addDays(d, -7))}
            className="flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 hover:text-white"
            aria-label="Semana anterior"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => setWeekStart(startOfWeek(new Date()))}
            className="rounded-xl border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent"
          >
            Hoje
          </button>
          <button
            type="button"
            onClick={() => setWeekStart((d) => addDays(d, 7))}
            className="flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 hover:text-white"
            aria-label="Próxima semana"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
        <p className="text-sm text-white/40">
          {days[0].toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })} —{" "}
          {days[6].toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" })}
        </p>
      </div>

      <div className="gborder overflow-hidden rounded-2xl">
        <div className="grid grid-cols-[56px_repeat(7,1fr)] border-b border-white/[0.06] bg-white/[0.02]">
          <div />
          {days.map((day) => {
            const isToday = isSameDay(day, today);
            return (
              <div
                key={day.toISOString()}
                className={`border-l border-white/[0.06] px-2 py-3 text-center ${isToday ? "bg-accent/5" : ""}`}
              >
                <p className="text-[10px] uppercase tracking-wider text-white/35">
                  {day.toLocaleDateString("pt-BR", { weekday: "short" })}
                </p>
                <p
                  className={`mt-0.5 font-display text-lg font-bold ${isToday ? "text-accent" : "text-white"}`}
                >
                  {day.getDate()}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-[56px_repeat(7,1fr)]">
          {HOURS.map((hour) => (
            <div key={hour} className="contents">
              <div className="border-b border-white/[0.04] py-4 pr-2 text-right text-[10px] text-white/25">
                {String(hour).padStart(2, "0")}:00
              </div>
              {days.map((day) => {
                const dayAppts = apptsForDay(day).filter(
                  (a) => new Date(a.start).getHours() === hour,
                );
                return (
                  <div
                    key={`${day.toISOString()}-${hour}`}
                    className="relative min-h-[52px] border-b border-l border-white/[0.04] p-0.5"
                  >
                    {dayAppts.map((appt) => (
                      <motion.button
                        key={appt.id}
                        type="button"
                        layout
                        onClick={() => setSelected(appt)}
                        whileHover={{ scale: 1.02 }}
                        className={`mb-0.5 w-full rounded-lg border px-1.5 py-1 text-left text-[10px] transition ${
                          appt.source === "ia"
                            ? "border-accent/30 bg-accent/15 text-accent"
                            : "border-accent-2/30 bg-accent-2/15 text-sky-300"
                        } ${selected?.id === appt.id ? "ring-1 ring-white/30" : ""}`}
                      >
                        <p className="truncate font-semibold">{formatTime(appt.start)}</p>
                        <p className="truncate opacity-80">{appt.patientName}</p>
                      </motion.button>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="gborder-strong rounded-2xl p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/35">Detalhes</p>
                <h3 className="mt-1 font-display text-xl font-bold text-white">
                  {selected.patientName}
                </h3>
                <p className="text-sm text-white/45">{selected.service}</p>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${colorStatus(selected.status)}`}
              >
                {labelStatus(selected.status)}
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[10px] uppercase text-white/30">Horário</p>
                <p className="mt-1 text-sm font-medium text-white">
                  {formatTime(selected.start)} — {formatTime(selected.end)}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[10px] uppercase text-white/30">Profissional</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
                  <User className="size-3.5 text-white/40" />
                  {selected.professional}
                </p>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <p className="text-[10px] uppercase text-white/30">Origem</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-white">
                  {selected.source === "ia" ? (
                    <>
                      <Bot className="size-3.5 text-accent" /> Secretária IA
                    </>
                  ) : (
                    "Manual"
                  )}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-4 text-xs text-white/40 hover:text-white"
            >
              Fechar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
