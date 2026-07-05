"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Bot,
  CalendarDays,
  LayoutDashboard,
  MessageSquareText,
  Settings2,
  Sparkles,
} from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { usePanel } from "./PanelProvider";

const nav = [
  { href: "/painel", label: "Visão geral", icon: LayoutDashboard, exact: true },
  { href: "/painel/agenda", label: "Agenda", icon: CalendarDays },
  { href: "/painel/conversas", label: "Conversas", icon: MessageSquareText },
  { href: "/painel/configuracao", label: "Configuração", icon: Settings2 },
];

export function PanelSidebar() {
  const pathname = usePathname();
  const { data } = usePanel();
  const unread = data?.conversations.reduce((n, c) => n + c.unread, 0) ?? 0;

  return (
    <aside className="panel-glass relative hidden h-full w-[260px] shrink-0 flex-col border-r border-white/[0.06] md:flex">
      <div className="panel-shine pointer-events-none absolute inset-0" />

      <div className="relative border-b border-white/[0.06] px-5 py-5">
        <Link href="/painel" className="flex items-center gap-2.5">
          <BrandMark className="size-8" />
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">
              stivva<span className="text-accent">.</span>
            </p>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
              Painel
            </p>
          </div>
        </Link>
      </div>

      <nav className="relative flex flex-1 flex-col gap-1 p-3">
        {nav.map((item) => {
          const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
          const Icon = item.icon;
          const badge = item.href === "/painel/conversas" && unread > 0 ? unread : null;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                active ? "text-white" : "text-white/50 hover:text-white/80"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="panel-nav-active"
                  className="absolute inset-0 rounded-xl border border-accent/25 bg-accent/10 shadow-[0_0_24px_rgba(34,197,94,0.12)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon
                className={`relative size-[18px] shrink-0 ${active ? "text-accent" : "text-white/40 group-hover:text-white/60"}`}
              />
              <span className="relative flex-1">{item.label}</span>
              {badge !== null && (
                <span className="relative flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-[#04130a]">
                  {badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="relative border-t border-white/[0.06] p-4">
        <div className="gborder rounded-xl p-3.5">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-accent/15">
              <Bot className="size-4 text-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-semibold text-white">
                {data?.config.assistantName ?? "Bia"}
              </p>
              <div className="flex items-center gap-1.5">
                <span
                  className={`panel-live-dot size-1.5 rounded-full ${data?.stats.activeNow ? "bg-accent" : "bg-white/30"}`}
                />
                <p className="text-[10px] text-white/45">
                  {data?.stats.activeNow ? "Ativa agora" : "Offline"}
                </p>
              </div>
            </div>
            <Sparkles className="size-3.5 shrink-0 text-accent/60" />
          </div>
        </div>
      </div>
    </aside>
  );
}
