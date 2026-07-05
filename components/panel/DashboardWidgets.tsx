"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Calendar, Sparkles } from "lucide-react";
import type { Appointment, Conversation } from "@/lib/panel/types";
import {
  colorStage,
  colorStatus,
  formatRelative,
  formatTime,
  labelStage,
  labelStatus,
} from "@/lib/panel/utils";

export function RecentAppointments({ items }: { items: Appointment[] }) {
  const upcoming = [...items]
    .filter((a) => a.status !== "cancelado" && a.status !== "concluido")
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
    .slice(0, 5);

  return (
    <div className="gborder rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="size-4 text-accent" />
          <h3 className="font-display font-semibold text-white">Próximos agendamentos</h3>
        </div>
        <Link
          href="/painel/agenda"
          className="flex items-center gap-1 text-xs text-white/40 transition hover:text-accent"
        >
          Ver agenda <ArrowRight className="size-3" />
        </Link>
      </div>

      <ul className="space-y-2">
        {upcoming.map((appt, i) => (
          <motion.li
            key={appt.id}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 transition hover:border-white/10"
          >
            <div className="flex min-w-[52px] flex-col items-center rounded-lg bg-accent/10 px-2 py-1.5">
              <span className="text-xs font-bold text-accent">{formatTime(appt.start)}</span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{appt.patientName}</p>
              <p className="truncate text-xs text-white/40">{appt.service}</p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${colorStatus(appt.status)}`}
              >
                {labelStatus(appt.status)}
              </span>
              {appt.source === "ia" && (
                <span className="flex items-center gap-0.5 text-[10px] text-accent/70">
                  <Bot className="size-2.5" /> IA
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function LiveConversations({ items }: { items: Conversation[] }) {
  const sorted = [...items]
    .sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime())
    .slice(0, 5);

  return (
    <div className="gborder rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="size-4 text-accent-2" />
          <h3 className="font-display font-semibold text-white">Conversas recentes</h3>
        </div>
        <Link
          href="/painel/conversas"
          className="flex items-center gap-1 text-xs text-white/40 transition hover:text-accent"
        >
          Ver todas <ArrowRight className="size-3" />
        </Link>
      </div>

      <ul className="space-y-2">
        {sorted.map((conv, i) => (
          <motion.li
            key={conv.id}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              href={`/painel/conversas?id=${conv.id}`}
              className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2.5 transition hover:border-accent/20 hover:bg-accent/[0.03]"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent/25 to-accent-2/20 text-xs font-bold text-white">
                {conv.contactName.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-white">{conv.contactName}</p>
                  <span className="shrink-0 text-[10px] text-white/30">
                    {formatRelative(conv.lastMessageAt)}
                  </span>
                </div>
                <p className="truncate text-xs text-white/40">{conv.lastMessage}</p>
              </div>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-medium ${colorStage(conv.stage)}`}
              >
                {labelStage(conv.stage)}
              </span>
              {conv.unread > 0 && (
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-[#04130a]">
                  {conv.unread}
                </span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function AiStatusBanner({
  assistantName,
  active,
  avgResponseSec,
}: {
  assistantName: string;
  active: boolean;
  avgResponseSec: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="gborder-strong relative overflow-hidden rounded-2xl p-5 md:p-6"
    >
      <div className="panel-glow absolute -right-10 -top-10 size-40 bg-accent/20" aria-hidden />
      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="relative flex size-14 items-center justify-center rounded-2xl bg-accent/15">
            <Bot className="size-7 text-accent" />
            {active && (
              <span className="panel-live-dot absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-bg bg-accent" />
            )}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent/80">
              Secretária de IA
            </p>
            <h2 className="font-display text-xl font-bold text-white md:text-2xl">
              {assistantName} está {active ? "online" : "offline"}
            </h2>
            <p className="mt-0.5 text-sm text-white/45">
              Resposta média em {avgResponseSec}s · Atendimento 24h no WhatsApp
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-white/35">Hoje</p>
            <p className="font-display text-lg font-bold text-white">24/7</p>
          </div>
          <div className="rounded-xl border border-accent/20 bg-accent/10 px-4 py-2.5 text-center">
            <p className="text-[10px] uppercase tracking-wider text-accent/70">Status</p>
            <p className="font-display text-lg font-bold text-accent">
              {active ? "Ativa" : "Pausada"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
