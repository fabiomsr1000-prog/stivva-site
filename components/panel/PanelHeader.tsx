"use client";

import { Bell, RefreshCw } from "lucide-react";
import { usePanel } from "./PanelProvider";
import { formatRelative } from "@/lib/panel/utils";

export function PanelHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  const { data, loading, refresh } = usePanel();

  return (
    <header className="panel-glass sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.06] px-6 py-4 backdrop-blur-xl">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent/80">
          {data?.config.name ?? "Clínica"}
        </p>
        <h1 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
          {title}
        </h1>
        {subtitle && <p className="mt-0.5 text-sm text-white/45">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2">
        {data?.updatedAt && (
          <span className="hidden text-xs text-white/30 sm:inline">
            Atualizado {formatRelative(data.updatedAt)}
          </span>
        )}
        <button
          type="button"
          onClick={() => void refresh()}
          disabled={loading}
          className="flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 transition hover:border-white/15 hover:text-white disabled:opacity-40"
          aria-label="Atualizar dados"
        >
          <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
        </button>
        <button
          type="button"
          className="relative flex size-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-white/50 transition hover:border-white/15 hover:text-white"
          aria-label="Notificações"
        >
          <Bell className="size-4" />
          {(data?.conversations.some((c) => c.unread > 0) ?? false) && (
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-accent" />
          )}
        </button>
      </div>
    </header>
  );
}
